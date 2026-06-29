"use client";

import { useEffect, useState } from "react";
import { FieldGroup, Input, Select, Textarea, Alert } from "@/components/ui/form";
import { useI18n } from "@/i18n/client";

type ContactFormProps = {
  defaultSubject?: string;
  defaultMessage?: string;
  sourcePlan?: string;
  sourcePage?: string;
};

export default function ContactForm({
  defaultSubject = "",
  defaultMessage = "",
  sourcePlan = "",
  sourcePage = "",
}: ContactFormProps) {
  const { dict } = useI18n();
  const { form } = dict.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState(defaultMessage);

  useEffect(() => {
    setSubject(defaultSubject);
  }, [defaultSubject]);

  useEffect(() => {
    setMessage(defaultMessage);
  }, [defaultMessage]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error ?? form.submitError);
      }

      setStatus("success");
      formEl.reset();
      setSubject(defaultSubject);
      setMessage(defaultMessage);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : form.unknownError);
    }
  }

  return (
    <div>
      {status === "success" && (
        <Alert variant="success" className="mb-4">
          {form.success}
        </Alert>
      )}
      {status === "error" && <Alert variant="error" className="mb-4">{errorMsg}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-5">
        {sourcePlan && <input type="hidden" name="sourcePlan" value={sourcePlan} />}
        {sourcePage && <input type="hidden" name="sourcePage" value={sourcePage} />}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FieldGroup label={form.name} htmlFor="contact-name">
            <Input id="contact-name" name="name" required autoComplete="name" placeholder={form.namePlaceholder} />
          </FieldGroup>
          <FieldGroup label={form.email} htmlFor="contact-email">
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              spellCheck={false}
              placeholder={form.emailPlaceholder}
            />
          </FieldGroup>
        </div>

        <FieldGroup label={form.phone} htmlFor="contact-phone">
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={form.phonePlaceholder}
          />
        </FieldGroup>

        <FieldGroup label={form.subject} htmlFor="contact-subject">
          <Select
            id="contact-subject"
            name="subject"
            required
            autoComplete="off"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">{form.subjectPlaceholder}</option>
            {form.subjects.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FieldGroup>

        <FieldGroup label={form.message} htmlFor="contact-message">
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={form.messagePlaceholder}
          />
        </FieldGroup>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-everfit-primary w-full py-3"
        >
          {status === "loading" ? form.submitting : form.submit}
        </button>
      </form>
    </div>
  );
}
