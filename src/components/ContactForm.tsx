"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      nextErrors.name = "Bitte Ihren Namen angeben.";
    }

    if (!formState.email.trim()) {
      nextErrors.email = "Bitte eine E-Mail-Adresse angeben.";
    }

    if (!formState.message.trim()) {
      nextErrors.message = "Bitte eine Nachricht eingeben.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);
  };

  const mailtoLink = `mailto:kontakt@kreuz-fahrservice.de?subject=Fahranfrage%20Kreuz-Fahrservice&body=${encodeURIComponent(
    `Name: ${formState.name}\nTelefon: ${formState.phone}\nE-Mail: ${formState.email}\nNachricht: ${formState.message}`
  )}`;

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-card">
      {submitted ? (
        <div className="space-y-4 text-sm text-ink-700">
          <p className="text-base font-semibold text-ink-900">
            Danke! Wir melden uns schnellstmöglich zurück.
          </p>
          <p>
            Falls Sie möchten, können Sie Ihre Anfrage direkt per E-Mail senden:
          </p>
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-4 py-2 text-sm font-semibold text-ink-800 hover:border-accent-600 hover:text-accent-600"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            E-Mail mit Details öffnen
          </a>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-semibold text-ink-800" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={(event) => handleChange("name", event.target.value)}
              className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-3 text-sm text-ink-900"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name ? (
              <p className="mt-1 text-xs text-accent-600" id="name-error">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div>
            <label
              className="text-sm font-semibold text-ink-800"
              htmlFor="phone"
            >
              Telefon (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={(event) => handleChange("phone", event.target.value)}
              className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-3 text-sm text-ink-900"
            />
          </div>
          <div>
            <label
              className="text-sm font-semibold text-ink-800"
              htmlFor="email"
            >
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={(event) => handleChange("email", event.target.value)}
              className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-3 text-sm text-ink-900"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <p className="mt-1 text-xs text-accent-600" id="email-error">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div>
            <label
              className="text-sm font-semibold text-ink-800"
              htmlFor="message"
            >
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={(event) => handleChange("message", event.target.value)}
              rows={4}
              className="mt-2 w-full rounded-lg border border-ink-200 px-4 py-3 text-sm text-ink-900"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message ? (
              <p className="mt-1 text-xs text-accent-600" id="message-error">
                {errors.message}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white hover:bg-accent-500"
          >
            Anfrage senden
          </button>
          <p className="text-xs text-ink-500">
            Mit dem Absenden bestätigen Sie, dass Ihre Angaben zur Kontaktaufnahme
            verwendet werden.
          </p>
        </form>
      )}
    </div>
  );
}
