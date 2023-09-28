import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AdviceHealth",
  description: "AdviceHealth",
  creator: "thaliszambarda",
  themeColor: "white",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://advice-health-trelcray.vercel.app/site.webmanifest",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
