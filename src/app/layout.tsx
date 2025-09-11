import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import Header from "@/components/globals/Header";
import Strip from "@/components/globals/Strip";
import "./globals.css";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bigbear",
  description: "Projetos gráficos e personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${encodeSans.variable}`}>
        <Header/>
        <Strip/>
        {children}
      </body>
    </html>
  );
}
