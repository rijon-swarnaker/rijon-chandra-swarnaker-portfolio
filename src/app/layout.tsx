import type { Metadata } from "next";
import { Exo_2, Geist, Geist_Mono,  Share_Tech, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBer from "@/components/NavBer";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const geistExo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo", 
});

const shareTech = Share_Tech({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-share-tech", 
});





export const metadata: Metadata = {
  title: "Rijon Swarnaker | Full-Stack Developer",
  description: "Personal portfolio of Rijon Chandra Swarnaker - Computer Science student & Aspiring Full-Stack Developer building modern web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}  ${geistExo.variable} ${spaceGrotesk.variable} ${shareTech.variable}   h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200">
        <NavBer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
