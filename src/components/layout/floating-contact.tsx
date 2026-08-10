import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoUrl, telUrl, whatsappUrl } from "@/data/site";

const actions = [
  { href: whatsappUrl, label: "Chat on WhatsApp", Icon: MessageCircle, external: true },
  { href: telUrl, label: "Call us", Icon: Phone, external: false },
  { href: mailtoUrl, label: "Email us", Icon: Mail, external: false },
];

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      {actions.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group grid h-12 w-12 place-items-center rounded-full border border-border bg-surface shadow-lg backdrop-blur transition-transform hover:scale-105"
        >
          <Icon className="h-5 w-5 text-accent" />
        </a>
      ))}
    </div>
  );
}