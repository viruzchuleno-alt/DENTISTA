import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dra. Clínica Dental | Tratamientos Dentales Profesionales en Chile",
  description: "Clínica dental moderna con tecnología de última generación. Blanqueamiento, ortodoncia invisible, implantes y más. Primera consulta sin costo.",
  keywords: "odontología, clínica dental, blanqueamiento dental, ortodoncia invisible, implantes dentales, Chile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="bg-brand-dark font-body text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
