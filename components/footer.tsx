import { cn } from "@/lib/utils";

interface FooterLink {
  text: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  className?: string;
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { text: "Browse Events", url: "/events" },
      { text: "Host an Event", url: "/host" },
      { text: "List Your Venue", url: "/venues" },
      { text: "Pricing", url: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Us", url: "/about" },
      { text: "Careers", url: "/careers" },
      { text: "Blog", url: "/blog" },
      { text: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Cookie Policy", url: "/cookies" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="text-xl font-bold">
              After Five
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Connecting venues, organizers, and attendees for effortless,
              unforgettable experiences after five.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.url}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} After Five. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ♥ for nightlife enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
