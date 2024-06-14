import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import AnimatedLayout from "../components/AnimatedLayout";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "../components/ReduxProvider";
import Head from "next/head";

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
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <body className={inter.className}>
                <ReduxProvider >
                    <AnimatedLayout>
                        {children}
                    </AnimatedLayout>
                </ReduxProvider>

              </body>
        </html>
    );
}
