import { Calendar, Building2, Users } from "lucide-react";

import { cn } from "@/lib/utils";

interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ValuePropsProps {
  className?: string;
  heading?: string;
  subheading?: string;
  items?: ValueProp[];
}

const ValueProps = ({
  className,
  heading = "Built for everyone",
  subheading = "Whether you're hosting, listing, or attending — we've got you covered.",
  items = [
    {
      title: "Organizers",
      description:
        "Book spaces easily for mixers, pop-ups, panels, or private events.",
      icon: <Calendar className="size-6" />,
    },
    {
      title: "Venues",
      description:
        "Monetize your space, attract foot traffic, and showcase your vibe.",
      icon: <Building2 className="size-6" />,
    },
    {
      title: "Attendees",
      description:
        "Find the best social events happening near you every evening.",
      icon: <Users className="size-6" />,
    },
  ],
}: ValuePropsProps) => {
  return (
    <section className={cn("py-20 lg:py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">{heading}</h2>
          <p className="text-lg text-muted-foreground">{subheading}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border bg-card p-8 text-center"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ValueProps };
