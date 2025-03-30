import React from "react";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto relative">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
