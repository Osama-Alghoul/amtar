import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Amtar",
  description: "Amtar reat estate",
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
        {children}
      </body>
    </html>
  );
}
