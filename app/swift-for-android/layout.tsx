"use client"
import {type ReactNode} from "react";
import {Geist, Geist_Mono} from "next/font/google";
import {ThemeProvider} from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import "./swift-for-android.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <div
      className={`swift-for-android content ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
      <ScrollToTop />
      <ThemeProvider> {children} </ThemeProvider>
    </div>
  );
}
