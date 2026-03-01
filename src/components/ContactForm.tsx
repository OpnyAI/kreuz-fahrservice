"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Mail } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

type ContactApiPayload = FormState & {
  turnstileToken: string;
};

type ContactApiError = {
  ok: false;
  error: string;
};

type ContactApiSuccess = {
  ok: true;
};

type TurnstileWidgetId = string | number;

type TurnstileRenderOptions = {
  sitekey: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: TurnstileRenderOptions,
      ) => TurnstileWidgetId;
      reset: (widgetId?: TurnstileWidgetId) => void;
    };
  }
}

const initialState: FormState = {
  name: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<TurnstileWidgetId | null>(null);

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formState.name.trim()) nextErrors.name = "Bitte Ihren Namen eingeben.";
    if (!formState.phone.trim())
      nextErrors.phone = "Bitte eine Telefonnummer eingeben.";
    if (!formState.message.trim())
      nextErrors.message = "Bitte eine Nachricht eingeben.";

    if (!turnstileToken) {
      nextErrors.turnstile = "Bitte bestätigen Sie die Sicherheitsprüfung.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const { [field]: _fieldError, ...rest } = prev;
      return rest;
    });
  };

  const renderTurnstile = useCallback(() => {
    if (!siteKey || !window.turnstile || !turnstileContainerRef.current) return;
    if (widgetIdRef.current !== null) return;

    widgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: siteKey,
        callback: (token: string) => {
          setTurnstileToken(token);
          setErrors((prev) => {
            const { turnstile: _turnstile, ...rest } = prev;
            return rest;
          });
        },
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      },
    );
  }, [siteKey]);

  useEffect(() => {
    renderTurnstile();
  }, [renderTurnstile]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    const payload: ContactApiPayload = {
      ...formState,
      turnstileToken,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let parsed: ContactApiError | null = null;
        try {
          parsed = (await response.json()) as ContactApiError;
        } catch {
          parsed = null;
        }

        if (parsed?.error === "turnstile_failed") {
          setSubmitError(
            "Die Sicherheitsprüfung war nicht erfolgreich. Bitte erneut versuchen.",
          );
        } else if (parsed?.error === "turnstile_unavailable") {
          setSubmitError(
            "Sicherheitsprüfung aktuell nicht verfügbar. Bitte später erneut versuchen.",
          );
        } else {
          setSubmitError(
            "Senden aktuell nicht möglich. Bitte später erneut versuchen.",
          );
        }

        // Token resetten, damit User direkt neu prüfen kann
        setTurnstileToken("");
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }
        return;
      }

      await (response.json() as Promise<ContactApiSuccess>);

      setSubmitted(true);
      setFormState(initialState);
      setTurnstileToken("");

      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {
      setSubmitError(
        "Senden aktuell nicht möglich. Bitte später erneut versuchen.",
      );
      setTurnstileToken("");
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:kontakt@kreuz-fahrservice.de?subject=${encodeURIComponent(
    "Fahranfrage Kreuz-Fahrservice",
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nTelefon: ${formState.phone}\n\nNachricht:\n${formState.message}`,
  )}`;

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-card">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
      />

      {submitted ? (
        <div className="space-y-4 text-sm text-ink-700">
          <p className="text-base font-semibold text-ink-900">
            Vielen Dank! Ihre Anfrage wurde gesendet.
          </p>
          <p className="text-sm text-ink-600">
            Falls Sie uns lieber direkt schreiben möchten:
          </p>
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-offwhite px-4 py-2 text-sm font-semibold text-ink-900 hover:border-ink-300"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            E-Mail öffnen
          </a>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-semibold text-ink-900">Name</label>
            <input
              value={formState.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-ink-300"
              placeholder="Vor- und Nachname"
              autoComplete="name"
            />
            {errors.name ? (
              <p className="mt-1 text-xs text-accent-600">{errors.name}</p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink-900">
              Telefon
            </label>
            <input
              value={formState.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-ink-300"
              placeholder="+49 …"
              autoComplete="tel"
              inputMode="tel"
            />
            {errors.phone ? (
              <p className="mt-1 text-xs text-accent-600">{errors.phone}</p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-semibold text-ink-900">
              Nachricht
            </label>
            <textarea
              value={formState.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="mt-1 min-h-[120px] w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-ink-300"
              placeholder="Wohin soll die Fahrt gehen? Datum/Uhrzeit? Besonderheiten?"
            />
            {errors.message ? (
              <p className="mt-1 text-xs text-accent-600">{errors.message}</p>
            ) : null}
          </div>

          <div>
            <div ref={turnstileContainerRef} />
            {errors.turnstile ? (
              <p className="mt-1 text-xs text-accent-600">{errors.turnstile}</p>
            ) : null}
            {!siteKey ? (
              <p className="mt-2 text-xs text-accent-600">
                Turnstile Site Key fehlt lokal (NEXT_PUBLIC_TURNSTILE_SITE_KEY).
              </p>
            ) : null}
          </div>

          {submitError ? (
            <p className="text-xs text-accent-600">{submitError}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
          </button>

          <p className="text-xs text-ink-500">
            Mit dem Absenden bestätigen Sie, dass Ihre Angaben zur
            Kontaktaufnahme verwendet werden.
          </p>
        </form>
      )}
    </div>
  );
}
