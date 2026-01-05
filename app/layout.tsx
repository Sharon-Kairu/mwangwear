import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./component/navigation/ResponsiveNav";
import Footer from "./component/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mwangwear",
  description: "Mwangwear – Prime Time, Every Time",
  openGraph: {
    title: "Mwangwear",
    description: "Mwangwear – Prime Time, Every Time.",
    url: "https://mwangwear.com",
    siteName: "Mwangwear",
    images: [
      {
        url: "/logo2.png", 
        width: 800,
        height: 600,
        alt: "Mwangwear Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mwangwear",
    description: "Mwangwear – Prime Time, Every Time",
    images: ["/logo2.png"], 
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
