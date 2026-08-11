import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNavigation, siteConfig } from "@/content/site";
import { stores } from "@/content/stores";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ivory">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl tracking-[0.12em] text-charcoal">
              {siteConfig.name}
            </span>
            <p className="max-w-xs text-[13px] leading-[1.9] text-charcoal-soft">
              {siteConfig.brandStatement}。
              <br />
              大切な家族の一生に寄り添う場所。
            </p>
            <a
              href={siteConfig.sns.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[12px] tracking-[0.15em] text-charcoal-soft underline underline-offset-4 hover:text-charcoal"
            >
              Instagram
            </a>
          </div>

          {footerNavigation.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4">
              <span className="font-display text-sm tracking-[0.2em] text-charcoal-soft">
                {group.heading}
              </span>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] tracking-[0.05em] text-charcoal-soft hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <span className="font-display text-sm tracking-[0.2em] text-charcoal-soft">
              店舗一覧
            </span>
            <ul className="flex flex-col gap-3">
              {stores.map((store) => (
                <li key={store.id} className="text-[13px] leading-[1.7] text-charcoal-soft">
                  <Link href={store.href} className="hover:text-charcoal">
                    {store.name}
                  </Link>
                  <div className="text-[12px] text-charcoal-soft/70">{store.tel}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[12px] text-charcoal-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.contact.email}</p>
        </div>
      </Container>
    </footer>
  );
}
