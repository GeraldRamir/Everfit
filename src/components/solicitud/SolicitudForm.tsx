"use client";

import { useEffect, useState } from "react";
import { FieldGroup, Input, Select, Textarea, Alert } from "@/components/ui/form";
import { useI18n } from "@/i18n/client";

type SolicitudFormProps = {
  defaultSubject?: string;
  sourcePlan?: string;
  sourcePage?: string;
};

type PhotoKey = "photoFront" | "photoBack" | "photoSide";

export default function SolicitudForm({
  defaultSubject = "",
  sourcePlan = "",
  sourcePage = "",
}: SolicitudFormProps) {
  const { dict } = useI18n();
  const { form } = dict.solicitud;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [previews, setPreviews] = useState<Partial<Record<PhotoKey, string>>>({});

  useEffect(() => {
    setSubject(defaultSubject);
  }, [defaultSubject]);

  useEffect(() => {
    return () => {
      Object.values(previews).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [previews]);

  function handlePhotoChange(key: PhotoKey, fileList: FileList | null) {
    const file = fileList?.[0];
    setPreviews((prev) => {
      if (prev[key]) URL.revokeObjectURL(prev[key]!);
      if (!file) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: URL.createObjectURL(file) };
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch("/api/solicitud", {
        method: "POST",
        body: formData,
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error ?? form.submitError);
      }

      setStatus("success");
      formEl.reset();
      setSubject(defaultSubject);
      setPreviews((prev) => {
        Object.values(prev).forEach((url) => {
          if (url) URL.revokeObjectURL(url);
        });
        return {};
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : form.unknownError);
    }
  }

  const photoFields: { key: PhotoKey; label: string; hint: string }[] = [
    { key: "photoFront", label: form.photoFront, hint: form.photoFrontHint },
    { key: "photoBack", label: form.photoBack, hint: form.photoBackHint },
    { key: "photoSide", label: form.photoSide, hint: form.photoSideHint },
  ];

  return (
    <div>
      {status === "success" && (
        <Alert variant="success" className="mb-4">
          {form.success}
        </Alert>
      )}
      {status === "error" && <Alert variant="error" className="mb-4">{errorMsg}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
        {sourcePlan && <input type="hidden" name="sourcePlan" value={sourcePlan} />}
        {sourcePage && <input type="hidden" name="sourcePage" value={sourcePage} />}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FieldGroup label={form.name} htmlFor="solicitud-name">
            <Input
              id="solicitud-name"
              name="name"
              required
              autoComplete="name"
              placeholder={form.namePlaceholder}
            />
          </FieldGroup>
          <FieldGroup label={form.email} htmlFor="solicitud-email">
            <Input
              id="solicitud-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              spellCheck={false}
              placeholder={form.emailPlaceholder}
            />
          </FieldGroup>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FieldGroup label={form.phone} htmlFor="solicitud-phone">
            <Input
              id="solicitud-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder={form.phonePlaceholder}
            />
          </FieldGroup>
          <FieldGroup label={form.subject} htmlFor="solicitud-subject">
            <Select
              id="solicitud-subject"
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
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <FieldGroup label={form.age} htmlFor="solicitud-age">
            <Input
              id="solicitud-age"
              name="age"
              required
              inputMode="numeric"
              placeholder={form.agePlaceholder}
            />
          </FieldGroup>
          <FieldGroup label={form.weight} htmlFor="solicitud-weight">
            <Input
              id="solicitud-weight"
              name="weight"
              required
              placeholder={form.weightPlaceholder}
            />
          </FieldGroup>
          <FieldGroup label={form.height} htmlFor="solicitud-height">
            <Input
              id="solicitud-height"
              name="height"
              required
              placeholder={form.heightPlaceholder}
            />
          </FieldGroup>
        </div>

        <FieldGroup label={form.dietHabits} htmlFor="solicitud-diet">
          <Textarea
            id="solicitud-diet"
            name="dietHabits"
            rows={3}
            required
            placeholder={form.dietHabitsPlaceholder}
          />
        </FieldGroup>

        <FieldGroup label={form.sleepHours} htmlFor="solicitud-sleep">
          <Input
            id="solicitud-sleep"
            name="sleepHours"
            required
            placeholder={form.sleepHoursPlaceholder}
          />
        </FieldGroup>

        <FieldGroup label={form.medicalConditions} htmlFor="solicitud-medical">
          <Textarea
            id="solicitud-medical"
            name="medicalConditions"
            rows={3}
            required
            placeholder={form.medicalConditionsPlaceholder}
          />
        </FieldGroup>

        <FieldGroup label={form.motivation} htmlFor="solicitud-motivation">
          <Textarea
            id="solicitud-motivation"
            name="motivation"
            rows={3}
            required
            placeholder={form.motivationPlaceholder}
          />
        </FieldGroup>

        <FieldGroup label={form.biggestChallenge} htmlFor="solicitud-challenge">
          <Textarea
            id="solicitud-challenge"
            name="biggestChallenge"
            rows={3}
            required
            placeholder={form.biggestChallengePlaceholder}
          />
        </FieldGroup>

        <FieldGroup label={form.goal} htmlFor="solicitud-goal">
          <Textarea
            id="solicitud-goal"
            name="goal"
            rows={3}
            required
            placeholder={form.goalPlaceholder}
          />
        </FieldGroup>

        <div>
          <p className="mb-1 text-sm font-semibold text-everfit-charcoal">{form.photosTitle}</p>
          <p className="mb-4 text-sm text-gray-600">{form.photosHint}</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {photoFields.map(({ key, label, hint }) => (
              <FieldGroup key={key} label={label} htmlFor={`solicitud-${key}`}>
                <Input
                  id={`solicitud-${key}`}
                  name={key}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  required
                  className="max-w-full cursor-pointer text-sm file:mr-3 file:rounded-md file:border-0 file:bg-everfit-cream file:px-3 file:py-2 file:text-sm file:font-medium file:text-everfit-wine"
                  onChange={(e) => handlePhotoChange(key, e.target.files)}
                />
                <p className="mt-1 text-xs text-gray-500">{hint}</p>
                {previews[key] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={previews[key]}
                    alt={label}
                    className="mt-2 h-44 w-full rounded-lg object-cover md:h-36"
                  />
                )}
              </FieldGroup>
            ))}
          </div>
        </div>

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
