import type { Metadata } from "next";
import "./globals.scss";
import Home from "./page";
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
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Home />
        <O2Footer text="Data is lastly updated on 19 December 2023  " />
      </body>
    </html>
  );
}
