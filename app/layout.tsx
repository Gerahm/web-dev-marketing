import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/organism/Header";
import Footer from "@/components/molecules/Footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Resilience",
  description: "Professional auto repair services for all makes and models",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/images/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} min-h-screen bg-background antialiased`}
      >
        <div className="relative min-h-screen">
          <div className="flex flex-col min-h-screen">
            <div className="w-full">
              <Header />
            </div>
            <div className="w-full flex-1 overflow-y-auto">
              <main>{children}</main>
            </div>
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
