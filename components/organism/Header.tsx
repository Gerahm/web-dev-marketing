"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/organism/NavigationHeader";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CustomDropDown from "../molecules/CustomDropDown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[100px] bg-black fixed top-0 left-0 right-0 z-50 border-none outline-none">
      <div className="h-full flex flex-row gap-10 p-3 mx-0 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-[16%] relative">
        {/* <!--Nav Logo--> */}
        <div className="flex-shrink-0 my-auto">
          <Link href="" aria-label="back to home">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width="199"
              height="68"
              aria-hidden="true"
              decoding="async"
            />
          </Link>
        </div>
        {/* <!--Navigation List--> */}
        <div className="z-1 w-full hidden lg:flex md:hidden sm:hidden xl:flex">
          <nav
            role="navigation"
            className="w-full flex items-center justify-between"
          >
            <div className="my-auto flex-grow">
              <NavigationHeader />
            </div>
            <div className="transition-all duration-300 flex-shrink-0 ml-4">
              <Button variant="getStarted">
                <span className="text-black p-4">GET STARTED</span>
              </Button>
            </div>
          </nav>
        </div>
        {/* <!--Mobile Nav Toggle--> */}
        <div className="my-auto ml-auto flex md:flex lg:hidden xl:hidden">
          <Button
            variant="normal"
            className="w-14 h-14 bg-[#1a1a1a] rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && <CustomDropDown />}
    </header>
  );
};

export default Header;
