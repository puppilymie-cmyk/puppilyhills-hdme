import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { contactHero, contactMethods } from "@/content/pages/contact";
import { siteConfig } from "@/content/site";
import { stores } from "@/content/stores";

export const metadata: Metadata = {
  title: "CONTACT | お問い合わせ・ご予約",
  description:
    "Puppily Hillsのトリミングご予約、Puppily Animal Hospitalへのご相談、Puppily Delicaに関するお問い合わせはこちらから。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "TOP", path: "/" },
          { name: "CONTACT", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow={contactHero.eyebrow}
        heading={contactHero.heading}
        lead={contactHero.lead}
        image={contactHero.image}
        imageAlt={contactHero.imageAlt}
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="flex flex-col gap-10">
              <SectionHeading eyebrow="HOW TO CONTACT" heading="お問い合わせについて" />
              <div className="flex flex-col gap-6">
                {contactMethods.map((method) => (
                  <div key={method.title} className="border-t border-line pt-5">
                    <h3 className="font-heading text-[16px] tracking-wide text-charcoal">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.85] text-charcoal-soft">
                      {method.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-line pt-6">
                <h3 className="font-heading text-[16px] tracking-wide text-charcoal">
                  お電話でのお問い合わせ
                </h3>
                <ul className="mt-4 flex flex-col gap-2 text-[14px] text-charcoal-soft">
                  {stores.map((store) => (
                    <li key={store.id} className="flex justify-between gap-4">
                      <span>{store.name}</span>
                      <span>{store.tel}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] text-charcoal-soft/80">
                  メールでのお問い合わせ: {siteConfig.contact.email}
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
