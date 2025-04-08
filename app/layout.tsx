// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/organism/Header";
import Footer from "@/components/molecules/Footer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Auto Repair Service",
//   description: "Professional auto repair services for all makes and models",
//   viewport: "width=device-width, initial-scale=1",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-background antialiased">
        <div className="  flex flex-col min-h-screen">
          <div className=" w-full ">
            <Header />
          </div>
          <div className="w-full flex-1 overflow-y-auto ">
            <main>{children}</main>
          </div>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
