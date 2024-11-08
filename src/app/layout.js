import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesbg from "@/components/FireFliesbg";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Saquib Khan Portfolio",
  description: "Harry Potter theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesbg />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
