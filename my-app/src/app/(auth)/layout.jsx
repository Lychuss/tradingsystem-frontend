import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "YES4TRADE",
    template: "YES4TRADE-%s",
  },
  description: "Trading system web app",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex justify-center items-center contents-center py-25`}
      >
        <header>
        <main>
        {children}
        </main>
        </header>
      </body>
    </html>
  );
}
