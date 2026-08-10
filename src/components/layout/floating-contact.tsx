import { mailtoUrl, telUrl, whatsappUrl } from "@/data/site";
import iconWhatsapp from "@/assets/icon-whatsapp.png.asset.json";
import iconCall from "@/assets/icon-call.png.asset.json";
import iconEmail from "@/assets/icon-email.png.asset.json";

const actions = [
  { href: whatsappUrl, label: "Chat on WhatsApp", icon: iconWhatsapp.url, external: true },
  { href: telUrl, label: "Call us", icon: iconCall.url, external: false },
  { href: mailtoUrl, label: "Email us", icon: iconEmail.url, external: false },
];

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      {actions.map(({ href, label, icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group grid h-12 w-12 place-items-center rounded-full border border-border bg-surface shadow-lg backdrop-blur transition-transform hover:scale-105"
        >
          <img src={icon} alt="" aria-hidden="true" loading="lazy" className="h-7 w-7 object-contain" />
        </a>
      ))}
    </div>
  );
}