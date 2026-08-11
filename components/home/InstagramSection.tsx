import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { instagramSection } from "@/content/pages/home";
import { siteConfig } from "@/content/site";

export function InstagramSection() {
  return (
    <section className="bg-ivory">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow={instagramSection.eyebrow}
          heading={instagramSection.heading}
          lead={instagramSection.body}
          align="center"
        />
        <div className="mt-10 sm:mt-14">
          <InstagramGrid />
        </div>
        <div className="mt-8 text-center">
          <a
            href={siteConfig.sns.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[13px] tracking-[0.15em] text-charcoal-soft underline underline-offset-4 hover:text-charcoal"
          >
            @puppilyhills をフォローする
          </a>
        </div>
      </Container>
    </section>
  );
}
