export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  // The form posts JSON: a plain HTML form on another site cannot do that without a CORS preflight,
  // which keeps the endpoint from being abused cross-site (Astro's origin check covers form bodies).
  let fields: Record<string, unknown> = {};
  try {
    if ((request.headers.get("content-type") ?? "").includes("application/json")) {
      fields = await request.json();
    } else {
      fields = Object.fromEntries((await request.formData()).entries());
    }
  } catch {
    return new Response(JSON.stringify({ error: "bad request" }), { status: 400 });
  }

  if (fields.company) return new Response(null, { status: 200 });

  const name = String(fields.name ?? "").trim();
  const email = String(fields.email ?? "").trim();
  const phone = String(fields.phone ?? "").trim();
  const message = String(fields.message ?? "").trim();

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