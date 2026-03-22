import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { FocusCard } from "./FocusCard";
import { focusItems } from "../../data/focusItemts";

export function FocusSection() {
  return (
    <section id="focus" className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Key focus areas"
          title="A sharper way to connect brand, experience, and market signals"
          description="This microsite highlights the areas where strategic thinking, digital execution, and trend awareness come together to create momentum."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {focusItems.map((item) => (
            <FocusCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
    );
}