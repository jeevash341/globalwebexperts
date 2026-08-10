import { mailtoUrl, telUrl, whatsappUrl } from "@/data/site";
import iconWhatsapp from "@/assets/icon-whatsapp.png.asset.json";
import iconCall from "@/assets/icon-call.png.asset.json";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="group grid h-12 w-12 place-items-center rounded-full border border-border bg-surface shadow-lg backdrop-blur transition-transform hover:scale-105"
      >
        <img
          src={iconWhatsapp.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-7 w-7 object-contain"
        />
      </a>
      <a
        href={telUrl}
        aria-label="Call us"
        className="group grid h-12 w-12 place-items-center rounded-full border border-border bg-surface shadow-lg backdrop-blur transition-transform hover:scale-105"
      >
        <img
          src={iconCall.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-7 w-7 object-contain"
        />
      </a>
      <a
        href={mailtoUrl}
        aria-label="Email us"
        className="group grid h-12 w-12 place-items-center rounded-full border border-border bg-surface shadow-lg backdrop-blur transition-transform hover:scale-105"
      >
        <MailIcon className="h-7 w-7 text-foreground" />
      </a>
    </div>
  );
}
