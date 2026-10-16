import type { Metadata } from "next";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heron AI | Works inside your design tools",
  description:
    "An AI agent that works inside your design tools. Heron sees your model, spots problems, and suggests fixes as you design.",
  icons: {
    icon: "https://cdn.prod.website-files.com/6a4b5161f0d11f1602cc3bbf/6a69ba2640fdb174e5b57241_favicon-light.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
