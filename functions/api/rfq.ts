interface Env {
  RESEND_API_KEY?: string;
  RFQ_TO_EMAIL?: string;
  TURNSTILE_SECRET?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const form = await request.formData();

    // 1. Spam check (Turnstile verification if secret is provided)
    const token = String(form.get("cf-turnstile-response") ?? "");
    if (env.TURNSTILE_SECRET && token) {
      const check = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token }),
      });
      const { success } = (await check.json()) as { success: boolean };
      if (!success) {
        return json({ ok: false, error: "Spam verification failed. Please try again." }, 400);
      }
    }

    // 2. Validate required fields
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const projectType = String(form.get("projectType") ?? "").trim();
    const siteLocation = String(form.get("siteLocation") ?? "").trim();
    const scopeNotes = String(form.get("scopeNotes") ?? "").trim();

    if (!name || !email || !projectType) {
      return json({ ok: false, error: "Name, email and project type are required fields." }, 422);
    }

    // Basic email format check
    if (!email.includes("@") || !email.includes(".")) {
      return json({ ok: false, error: "Please enter a valid business email address." }, 422);
    }

    // 3. Send email via Resend if credentials are configured
    const ref = "RFQ-" + Date.now().toString(36).toUpperCase();

    if (env.RESEND_API_KEY && env.RFQ_TO_EMAIL) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Apex RFQ Gateway <no-reply@apextowerinfra.com>",
          to: [env.RFQ_TO_EMAIL],
          subject: `[${ref}] New Infrastructure RFQ: ${projectType} (${organization || name})`,
          text: `REFERENCE: ${ref}\nNAME: ${name}\nEMAIL: ${email}\nPHONE: ${phone}\nORG: ${organization}\nTYPE: ${projectType}\nLOCATION: ${siteLocation}\nSCOPE: ${scopeNotes}\nSUBMITTED: ${new Date().toISOString()}`,
        }),
      });

      if (!res.ok) {
        return json({ ok: false, error: "Transmission error with mail dispatch. Call NOC directly." }, 502);
      }
    }

    return json({
      ok: true,
      ref,
      message: "Quotation request registered successfully. Engineering team will respond within 2 business days."
    });
  } catch (err: any) {
    return json({ ok: false, error: "Internal processing error: " + (err?.message || "Unknown error") }, 500);
  }
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
