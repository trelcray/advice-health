"use client";

import { Poppins } from "next/font/google";

import { Header } from "@/components/section/header";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";
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
    <html lang="pt-BR">
      <body className={cn("font-poppins", poppins.variable)}>
        <ReduxProvider>
          <ModalProvider />
          <Header />
          <main className="flex min-h-screen pb-10 pt-24">{children}</main>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
