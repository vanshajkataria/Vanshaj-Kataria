import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vanshaj Kataria",
  description: "This is a portfolio website of Vanshaj Kataria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased lg:h-screen w-screen text-white bg-gradient-to-br from-[#780000] to-[#003049] `}
      >
        {children}
      </body>
    </html>
  );
}
