"use client";

import { Poppins } from "next/font/google";

import { Header } from "@/components/section/header";
import { cn } from "@/lib/utils";
import { ReduxProvider } from "@/providers/redux-provider";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-poppins", poppins.variable)}>
        <ReduxProvider>
          <Header />
          <main className="flex min-h-screen pb-10 pt-24">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
