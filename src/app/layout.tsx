import "@/styles/variables/kmenu.css";
import "kmenu/dist/cmdk.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/app/provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--gb-font-sans",
});

export const metadata: Metadata = {
  title: "Gelecek Bilimde",
  description:
    "Gelecek Bilimde, toplum ile bilim arasındaki köprü olmayı amaçlayan popüler bilim değil, bilim iletişimi platformu!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className={inter.className} lang="tr">
      <body className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
