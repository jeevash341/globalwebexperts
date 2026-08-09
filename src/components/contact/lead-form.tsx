import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { services } from "@/data/services";
import { mailtoUrl, site, whatsappUrl } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Choose a service"),
  budget: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please describe your project (20+ characters)").max(2000),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const budgets = [
  "Under PKR 50,000",
  "PKR 50,000 – 150,000",
  "PKR 150,000 – 400,000",
  "PKR 400,000+",
  "International / USD budget",
  "Not sure yet",
];

const inputClass =
  "w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/25";

export function LeadForm({ variant = "contact" }: { variant?: "contact" | "quote" }) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const buildSummary = (v: Values) =>
    [
      `New ${variant === "quote" ? "quote request" : "enquiry"} — ${site.name}`,
      `Name: ${v.name}`,
      v.company ? `Company: ${v.company}` : "",
      `Email: ${v.email}`,
      v.phone ? `Phone: ${v.phone}` : "",
      `Service: ${v.service}`,
      v.budget ? `Budget: ${v.budget}` : "",
      "",
      v.message,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    const summary = buildSummary(parsed.data);
    window.open(`${whatsappUrl.split("?")[0]}?text=${encodeURIComponent(summary)}`, "_blank", "noopener");
    setSent(true);
    toast.success("Opening WhatsApp with your details — send the message to reach us instantly.");
  };

  const sendByEmail = () => {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast.error("Complete the form first, then send by email.");
      return;
    }
    const body = encodeURIComponent(buildSummary(parsed.data));
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${variant === "quote" ? "Quote request" : "Project enquiry"} — ${parsed.data.name}`,
    )}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} noValidate className="surface-panel rounded-sm p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="lf-name" label="Full name" error={errors.name}>
          <input
            id="lf-name"
            className={inputClass}
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field id="lf-company" label="Business name" optional>
          <input
            id="lf-company"
            className={inputClass}
            value={values.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder="Company or brand"
            autoComplete="organization"
          />
        </Field>
        <Field id="lf-email" label="Email" error={errors.email}>
          <input
            id="lf-email"
            type="email"
            className={inputClass}
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </Field>
        <Field id="lf-phone" label="Phone / WhatsApp" optional>
          <input
            id="lf-phone"
            className={inputClass}
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="03xx-xxxxxxx"
            autoComplete="tel"
          />
        </Field>
        <Field id="lf-service" label="Service needed" error={errors.service}>
          <select
            id="lf-service"
            className={inputClass}
            value={values.service}
            onChange={(e) => set("service")(e.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.navTitle}>
                {s.kind === "category" ? s.navTitle : `— ${s.navTitle}`}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </Field>
        <Field id="lf-budget" label="Approximate budget" optional>
          <select
            id="lf-budget"
            className={inputClass}
            value={values.budget}
            onChange={(e) => set("budget")(e.target.value)}
          >
            <option value="">Prefer not to say</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field id="lf-message" label="Project details" error={errors.message}>
          <textarea
            id="lf-message"
            rows={5}
            className={inputClass}
            value={values.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="What are you trying to achieve, and by when?"
          />
        </Field>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
        >
          {variant === "quote" ? "Send quote request" : "Send message"}
        </button>
        <button
          type="button"
          onClick={sendByEmail}
          className="rounded-sm border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          Send by email instead
        </button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        We reply within one business day, {site.hours}. Your details are only used to respond to this
        enquiry.
      </p>
      {sent ? (
        <p className="mt-3 rounded-sm border border-accent/40 bg-accent/10 px-3 py-2 text-xs text-foreground">
          Details prepared. If WhatsApp did not open, use “Send by email instead” or call{" "}
          {site.phoneDisplay}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
        {optional ? <span className="ml-1 font-normal normal-case">(optional)</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}