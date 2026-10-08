import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, waLink } from "@/data/content";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name must be under 100 characters."),
  phone: z.string().trim().regex(/^[+0-9 ()-]{7,20}$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Email must be under 255 characters."),
  enquiryType: z.enum(["Stay", "Wedding or event", "Dining", "Pool day", "Turf booking", "General enquiry"]),
  preferredDate: z.string().max(20),
  guests: z.string().trim().max(20, "Guest count must be under 20 characters."),
  message: z.string().trim().min(10, "Please add a little more detail.").max(1000, "Message must be under 1,000 characters."),
});

type FormErrors = Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = enquirySchema.safeParse({
      name: form.get("name"), phone: form.get("phone"), email: form.get("email"),
      enquiryType: form.get("enquiryType"), preferredDate: form.get("preferredDate"),
      guests: form.get("guests"), message: form.get("message"),
    });
    if (!result.success) {
      const nextErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string" && !(field in nextErrors)) nextErrors[field as keyof FormErrors] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    const value = result.data;
    const message = [
      "Hi Yume! I'd like to make an enquiry.", "", `Name: ${value.name}`, `Phone: ${value.phone}`,
      `Email: ${value.email}`, `Enquiry: ${value.enquiryType}`,
      value.preferredDate ? `Preferred date: ${value.preferredDate}` : "",
      value.guests ? `Guests: ${value.guests}` : "", "", value.message,
    ].filter(Boolean).join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  const fieldClass = "h-12 rounded-none border-0 border-b border-ink/20 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-sage";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-7" aria-label="Yume Resort enquiry form">
      <div className="grid gap-7 md:grid-cols-2">
        <FormField label="Name" error={errors.name}><Input name="name" autoComplete="name" maxLength={100} className={fieldClass} /></FormField>
        <FormField label="Phone" error={errors.phone}><Input name="phone" type="tel" autoComplete="tel" maxLength={20} className={fieldClass} /></FormField>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <FormField label="Email" error={errors.email}><Input name="email" type="email" autoComplete="email" maxLength={255} className={fieldClass} /></FormField>
        <FormField label="What are you planning?" error={errors.enquiryType}>
          <select name="enquiryType" defaultValue="General enquiry" className={`${fieldClass} w-full text-sm outline-none`}>
            {CONTACT.enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </FormField>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <FormField label="Preferred date" error={errors.preferredDate}><Input name="preferredDate" type="date" className={fieldClass} /></FormField>
        <FormField label="Number of guests" error={errors.guests}><Input name="guests" inputMode="numeric" maxLength={20} placeholder="e.g. 4" className={fieldClass} /></FormField>
      </div>
      <FormField label="Tell us more" error={errors.message}>
        <Textarea name="message" maxLength={1000} rows={5} placeholder="Share what you would like to plan, and any questions." className="min-h-32 rounded-none border-0 border-b border-ink/20 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-sage" />
      </FormField>
      <p className="text-xs leading-relaxed text-ink/50">Submitting opens WhatsApp with your details ready to send. Nothing is stored on this website.</p>
      <Button type="submit" className="h-12 w-fit bg-ink px-7 text-xs uppercase tracking-[0.2em] text-cream shadow-none hover:bg-sage">Send via WhatsApp<Send className="h-4 w-4" /></Button>
    </form>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-[11px] uppercase tracking-[0.2em] text-ink/55">{label}</Label>
      <div className="mt-2">{children}</div>
      {error ? <p role="alert" className="mt-2 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}