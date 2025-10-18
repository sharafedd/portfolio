import "./globals.css";
import { Inter, Space_Mono } from "next/font/google";
import BackgroundMusic from "@/components/BackgroundMusic";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata = {
  title: "Sharaf E. Boukhezer",
  description: "Personal portfolio of Sharaf E. Boukhezer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} antialiased bg-[#0d0d0d] text-white relative`}
      >
        {/* === Global Top Controls === */}
        <div className="absolute top-6 left-6 z-50">
          <BackgroundMusic />
        </div>

        {/* === Page Content === */}
        {children}
      </body>
    </html>
  );
}
