import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import AnimatedLayout from "../components/AnimatedLayout";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "../components/ReduxProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Lankai Lamptey - Motion & 3D Designer",
  description: "Motion & 3D Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider >
                    <AnimatedLayout>
                        {children}
                        <SpeedInsights />
                    </AnimatedLayout>
                </ReduxProvider>

              </body>
        </html>
    );
}
