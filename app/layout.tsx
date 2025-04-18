import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <header className="border-b border-white text-4xl">
          Sajid Blog
        </header>
        <header className="border-b border-white">
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about/team">Team</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
