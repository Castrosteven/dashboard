import { cn } from "@/lib/utils";

interface EventImage {
  src: string;
  alt: string;
  caption?: string;
}

interface EventGalleryProps {
  className?: string;
  heading?: string;
  subheading?: string;
  images?: EventImage[];
}

const EventGallery = ({
  className,
  heading = "Events happening in NYC",
  subheading = "From networking mixers to rooftop galas — see what's possible with After Five.",
  images = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      alt: "Professional networking event",
      caption: "Networking Mixer",
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      alt: "Business conference",
      caption: "Corporate Conference",
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      alt: "Rooftop event in NYC",
      caption: "Rooftop Gala",
    },
    {
      src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80",
      alt: "Business professionals networking",
      caption: "Professional Meetup",
    },
    {
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
      alt: "Group dinner event",
      caption: "Private Dinner",
    },
    {
      src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80",
      alt: "Cocktail party networking",
      caption: "Cocktail Reception",
    },
  ],
}: EventGalleryProps) => {
  return (
    <section className={cn("py-20 lg:py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">{heading}</h2>
          <p className="text-lg text-muted-foreground">{subheading}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-white">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { EventGallery };
