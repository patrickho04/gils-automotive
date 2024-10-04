import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Gil's Automotive",
  description: "Best Mechanic Shop in San Diego County",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
