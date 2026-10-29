import type { Metadata } from "next";
import { Lora, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "TomCash Tattoo | Salvador Tattoo Studio",
  description:
    "Um corpo sem pintura é um corpo mudo. Tatuagens autorais, exclusivas e o projeto Os Selos por Tom Cash no Salvador Tattoo Studio, Barra Center, Salvador - BA.",
  icons: {
    icon: "/Iluminart_Vetor_PB_Principal.svg",
    shortcut: "/Iluminart_Vetor_PB_Principal.svg",
    apple: "/Iluminart_Vetor_PB_Principal.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${lora.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
