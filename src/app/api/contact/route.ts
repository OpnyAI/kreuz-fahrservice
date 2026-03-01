import { NextRequest, NextResponse } from "next/server";

type ContactRequestBody = {
  name: string;
  phone: string;
  message: string;
  turnstileToken: string;
};

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: NextRequest) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "turnstile_unavailable" },
      { status: 503 },
    );
  }

  let body: ContactRequestBody;
  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  if (!body.turnstileToken) {
    return NextResponse.json(
      { ok: false, error: "turnstile_failed" },
      { status: 403 },
    );
  }

  const ipHeader = request.headers.get("x-forwarded-for");
  const remoteIp = ipHeader?.split(",")[0]?.trim();

  const params = new URLSearchParams({
    secret,
    response: body.turnstileToken,
  });

  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }

  let verification: TurnstileVerifyResponse;

  try {
    const verifyResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-store",
    });

    if (!verifyResponse.ok) {
      return NextResponse.json(
        { ok: false, error: "turnstile_unavailable" },
        { status: 503 },
      );
    }

    verification = (await verifyResponse.json()) as TurnstileVerifyResponse;
  } catch {
    return NextResponse.json(
      { ok: false, error: "turnstile_unavailable" },
      { status: 503 },
    );
  }

  if (!verification.success) {
    return NextResponse.json(
      { ok: false, error: "turnstile_failed" },
      { status: 403 },
    );
  }

  // Existing contact logic continues here (currently no server-side mail dispatch in this project).
  return NextResponse.json({ ok: true });
}
