import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VSTACK - Plataforma de Entretenimiento Vertical Premium",
  description: "Plataforma B2B de streaming vertical con microseries, documentales y contenido audiovisual corto. Dashboard para usuarios, administradores y anunciantes.",
  keywords: "streaming, microseries, entretenimiento, video vertical, SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
