import Footer from "@/components/shared-sections/Footer";
import Navbar from "@/components/shared-sections/Navbar";
import type { Metadata } from "next";
import { Maven_Pro, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const mavenPro = Maven_Pro({ subsets: ["latin"], variable: "--font-maven_pro" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Byuda Holding | Nurturing and steering businesses across diverse sector",
  description:
    "Byuda Holding: multifaceted holding company with a passion for nurturing and steering businesses across diverse sectors. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${mavenPro.variable} ${roboto.variable} font-sans`}>
        <main className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 h-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
