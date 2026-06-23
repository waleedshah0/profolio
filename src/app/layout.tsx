import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Muhammad Waleed Ahmad — AI Engineer",
  description:
    "AI Engineer specializing in Computer Vision, Generative AI, and Agentic AI. Builder of Fortix AI and Sprixle.",
  keywords: [
    "AI Engineer",
    "Computer Vision",
    "Generative AI",
    "Agentic AI",
    "YOLO",
    "LangChain",
    "Machine Learning",
    "Muhammad Waleed Ahmad",
  ],
  authors: [{ name: "Muhammad Waleed Ahmad" }],
  openGraph: {
    title: "Muhammad Waleed Ahmad — AI Engineer",
    description:
      "AI Engineer building production Computer Vision, Generative AI, and Agentic AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
