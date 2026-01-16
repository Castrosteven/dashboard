import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface HeroButton {
  text: string;
  url: string;
  variant?: "default" | "outline" | "secondary";
}

interface HeroProps {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: HeroButton[];
  className?: string;
}

const Hero = ({
  heading = "Epic Blocks",
  subheading = " built with shadcn/ui & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = [
    { text: "Get Started", url: "#", variant: "default" },
    { text: "Read the docs", url: "#", variant: "outline" },
  ],
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
    alt: "Placeholder",
  },
  className,
}: HeroProps) => {
  return (
    <section className={cn("bg-background py-20 lg:py-32", className)}>
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl lg:text-7xl">
            <span>{heading}</span>
            <span className="text-muted-foreground">{subheading}</span>
          </h1>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.variant || "default"}
                size="lg"
              >
                <a href={button.url} className="gap-2">
                  {button.variant === "default" && (
                    <ArrowUpRight className="size-4" />
                  )}
                  {button.text}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute top-2.5 left-1/2! h-[92%]! w-[69%]! -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%]"
            />
          </div>
          <img
            className="relative z-10"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
