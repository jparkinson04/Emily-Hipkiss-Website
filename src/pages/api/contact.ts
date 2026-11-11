export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  if (data.get("company")) return new Response(null, { status: 200 });

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "missing" }), { status: 400 });
  }

  const body =
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + (phone || "not given") + "\n\n" +
    message;

  try {
    await resend.emails.send({
      from: "Website enquiries <enquiries@emilyhipkiss.com>",
      to: "emilyhipkisscounselling@outlook.com",
      replyTo: email,
      subject: "New enquiry from " + name,
      text: body,
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "send" }), { status: 500 });
  }
};