import React from "react";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col w-full h-full">
      <Header />
      <div className="absolute w-full h-screen">{children}</div>
      <div className="absolute bottom-0 w-full h-10 bg-red-500">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
