import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Open_Sans } from "next/font/google";
import { type Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Esbanjanja",
  description: "Gaste como uma janja",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="flex min-h-screen flex-col">
        <header className="top-0 z-50 flex items-center justify-center bg-slate-700 py-6">
          <h1
            className={`${openSans.className} text-center text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl`}
          >
            Esbanje como esbanja a esbanjanja!
          </h1>
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
