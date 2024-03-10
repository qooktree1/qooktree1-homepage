import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hominy Website",
  description: "FE 개발자 박종민님의 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
