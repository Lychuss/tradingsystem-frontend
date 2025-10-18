import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Header from "../(components)/Header";
import Filter from "../(components)/Filter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "YES4TRADE-Home",
    template: "YES4TRADE-%s",
  },
  description: "Trading system web app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex items-center justify-between px-6 py-3 font-mono my-10">
          <div className="mx-10 flex items-center gap-4">
            <h1 className="font-bold">FILTERS:</h1>
            <Filter />
          </div>
          <div className="p-1 rounded-lg font-mono absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-20 border font-bold">
            <Link href="/home" className="text-2xl cursor-pointer" >YES4TRADE</Link>
            <div className="font-mono flex items-center space-x-8 font-bold">
              <Link href="/home/products/books">Books</Link>
              <p>Notes</p>
              <p>Uniforms</p>
            </div>
            <Link href="/trading-products" className="border bg-green-300 rounded-lg py-1 px-2 text-black cursor-pointer">Let's Trade</Link>
          </div>
          <div>
            <Header />
          </div>
        </header>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
