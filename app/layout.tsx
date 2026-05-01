import type { Metadata, Viewport } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Diptish Gohane | Premium Web Developer",
  description:
    "Diptish Studio builds premium websites and web apps that help businesses grow leads, sales, and trust online.",
  metadataBase: new URL("https://diptishstudio.example"),
  openGraph: {
    title: "Diptish Gohane | Premium Web Developer",
    description:
      "Premium React, Next.js, Angular, and full-stack web solutions for global and Indian clients.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
