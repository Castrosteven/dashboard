import { Hero } from "@/components/hero";
import { EventGallery } from "@/components/event-gallery";
import { ValueProps } from "@/components/value-props";

export default function Home() {
  return (
    <main>
      <Hero
        heading="Discover and host events after five."
        subheading=" Your city comes alive."
        description="From rooftops and lounges to hotels and bars — After Five connects venues, organizers, and attendees for effortless, unforgettable experiences."
        buttons={[
          { text: "Host Your Event", url: "/host", variant: "default" },
          { text: "List Your Space", url: "/venues", variant: "outline" },
          {
            text: "See Tonight's Events",
            url: "/events",
            variant: "secondary",
          },
        ]}
      />
      <EventGallery />
      <ValueProps />
    </main>
  );
}
