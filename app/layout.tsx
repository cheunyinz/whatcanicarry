import type { Metadata } from "next";
import "./globals.scss";
import { Poppins, Montserrat } from "next/font/google";
import O2Footer from "@/components/organisms/o2-footer/o2-footer";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["400", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "What Can I Carry?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        {children}
        <O2Footer text="Build by" />
      </body>
    </html>
  );
}
