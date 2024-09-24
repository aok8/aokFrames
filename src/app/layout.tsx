"use client"
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname == "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en" className={dancingScript.className}>
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            {children}
          </>
        )}
      </body>
    </html>
  );
}
