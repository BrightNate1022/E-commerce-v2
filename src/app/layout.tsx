import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoreExample",
  description: "Example of a store with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html>
      <body >
        <section >
      <nav className=" fixed right-0 text-center  mt-5 "  >
        <div className="mt-3 "><Link className=" bg-gray-100/20 border-2 border-rounded-lg text-2xl pr-5 pl-5 " href={"/"}>Home</Link></div>
        <div className="mt-3"><Link className="bg-gray-100/20 text-2xl border-2 border-rounded-lg pr-6 pl-6" href={"/store"}>Store</Link></div>
        <div className="mt-3 mb-3"><Link className="bg-gray-100/20 text-2xl border-2 border-rounded-lg pr-7  pl-7" href={"/cart"}>Cart</Link></div>
      </nav> 
       </section>
       {children}
       </body>
      </html>
  
      
  );
}
