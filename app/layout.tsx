import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar1 } from "@/components/navbar1";

import "./globals.css";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "After 5 NYC",
  description:
    "Discover the city after five. From rooftops and lounges to hotel lobbies and bars — book, host, and attend unforgettable events effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto p-6`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar1
            logo={{
              url: "/",
              src: "/logo.svg",
              alt: "After 5 NYC",
              title: "After 5 NYC",
            }}
            menu={[
              { title: "Events", url: "/events" },
              { title: "Venues", url: "/venues" },
              { title: "Host", url: "/host" },
              { title: "About", url: "/about" },
            ]}
            auth={{
              login: { title: "Log in", url: "/login" },
              signup: { title: "Sign up", url: "/signup" },
            }}
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
