"use client"
import {Inter, Geist_Mono} from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import {RootProvider} from 'fumadocs-ui/provider';
import {ThemeProvider} from 'next-themes'
import {useEffect} from "react";
import "./globals.css";


const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}: {children: React.ReactNode; }) {
  useEffect(() => {
    // Clear theme preferences from localStorage
    localStorage.removeItem("theme");
    // Clear cookies (optional, if your app uses cookies to store the theme)
    document.cookie = "theme=; Max-Age=0; path=/; domain=" + window.location.hostname;
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${interSans.variable} ${geistMono.variable} pt-[64px] antialiased flex flex-col font-(family-name:--font-inter-sans)`}>
    <ScrollToTop />
    <ThemeProvider
      enableSystem={true} // Enable system theme detection
      attribute="class"   // Apply themes using the "class" attribute
      defaultTheme="system" // Default to system theme
    >
      <Navbar/>
      <RootProvider>{children}</RootProvider>
    </ThemeProvider>
    </body>
    </html>

  );
}
