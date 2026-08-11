import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreCard } from "@/components/sections/StoreCard";
import { stores } from "@/content/stores";
import { storesSection } from "@/content/pages/home";

export function StoresSection() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow={storesSection.eyebrow}
          heading={storesSection.heading}
          lead={storesSection.body}
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </Container>
    </section>
  );
}
