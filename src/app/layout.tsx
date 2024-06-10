import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import couch from "@/assets/couch.svg";
import UserInfo from "@/components/user-info";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Room Generator",
  description: "The best room generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={
            inter.className + " bg-[#17181c] flex flex-col min-h-screen"
          }
        >
          <header className="w-full">
            <div className="container border-b p-5 mx-auto flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src={couch} alt="couch" width={50} height={50} />
                <h3 className="text-white md:text-3xl text-2xl font-bold">
                  Room Generator
                </h3>
              </Link>
              <UserInfo />
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
