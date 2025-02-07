// This layout file is the blueprint for all the pages.
// Layout files can also be nested into page folders if you want to override the layout file and change something for a specific page of the app.

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PH0TOBLOG",
  description: "Made by Tom Greening",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// The {children} param represents each page of the website. {children} will display whatever page the user in on. /about /contact /(homepage), for example.
