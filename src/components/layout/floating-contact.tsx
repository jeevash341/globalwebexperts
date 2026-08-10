import instagramIcon from "@/assets/icon-instagram.png.asset.json";
import facebookIcon from "@/assets/icon-facebook.png.asset.json";
import tiktokIcon from "@/assets/icon-tiktok.png.asset.json";
import whatsappIcon from "@/assets/icon-whatsapp.png.asset.json";
import callIcon from "@/assets/icon-call.png.asset.json";
import emailIcon from "@/assets/icon-email.png.asset.json";
import { mailtoUrl, site, telUrl, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

type Rail = {
  href: string;
  label: string;
  src: string;
  external?: boolean;
  plate?: boolean;
};

const socials: Rail[] = [
  { href: site.socials.instagram, label: "Instagram", src: instagramIcon.url, external: true },
  { href: site.socials.facebook, label: "Facebook", src: facebookIcon.url, external: true },
  { href: site.socials.tiktok, label: "TikTok", src: tiktokIcon.url, external: true, plate: true },
];

const contacts: Rail[] = [
  { href: whatsappUrl, label: "WhatsApp", src: whatsappIcon.url, external: true },
  { href: telUrl, label: "Call", src: callIcon.url },
  { href: mailtoUrl, label: "Email", src: emailIcon.url, plate: true },
];

function RailList({ items, side }: { items: Rail[]; side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "fixed top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2",
        side === "left" ? "left-2 sm:left-3" : "right-2 sm:right-3",
      )}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          title={item.label}
          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg sm:h-10 sm:w-10"
        >
          <span
            className={cn(
              "grid h-6 w-6 place-items-center overflow-hidden rounded-[4px] sm:h-7 sm:w-7",
              item.plate && "bg-white",
            )}
          >
            <img
              src={item.src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-5 w-5 object-contain sm:h-6 sm:w-6"
            />
          </span>
        </a>
      ))}
    </div>
  );
}

export function FloatingContact() {
  return (
    <>
      <RailList items={socials} side="left" />
      <RailList items={contacts} side="right" />
    </>
  );
}
