import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sirat | Your Islamic Companion",
  description: "A beautiful journey, guided by faith. Prayer times, Quran, Hadith, Duas and your local Muslim community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
