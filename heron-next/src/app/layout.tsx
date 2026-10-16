import type { Metadata } from "next";
import Script from "next/script";
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

        {/* ScrollTrigger & Animation Scripts */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6a4b5161f0d11f1602cc3bbf"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/TextPlugin.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/6a4b5161f0d11f1602cc3bbf/js/webflow.a0aa6ca1.b7683852b8a60d8e.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://heronai-bp.netlify.app/main.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

