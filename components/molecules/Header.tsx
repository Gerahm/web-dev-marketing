import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/molecules/NavigationHeader";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header className="relative h-[100px] my-auto transition-all duration-300 top-0 z-50 w-full box-border px-10 xs:px-10  xl:px-70 lg:px-10  md:px-10 justify-center items-center bg-black shadow-[0_8px_24px_rgba(149,157,165,0.2)] fixed ">
      <div className=" w-full md:w-auto md:mr-auto  relative flex flex-row items-center justify-center md:max-w-[80rem] mx-auto gap-10">
        {/* <!--Nav Logo--> */}
        <div className="flex-shrink-0 ">
          <Link
            href=""
            className="justify-center items-center"
            aria-label="back to home"
          >
            <Image
              src="/images/logo.svg"
              alt="logo"
              width="199"
              height="68"
              aria-hidden="true"
              className="w-[130px] xs:w-[130px] sm:w-[130px] md:w-[150px] lg:w-[199px] h-auto "
              decoding="async"
            />
          </Link>
        </div>
        {/* <!--Navigation List--> */}

        {/* <!--Mobile Nav Toggle--> */}
        <nav
          role="navigation"
          className="w-full hidden sm:hidden md:hidden py-8 sm:py-8 md:py-8 lg:py-0 lg:block [&[style*='opacity: 0']~div]:absolute [&[style*='opacity: 0']~div]:right-0 [&[style*='opacity: 0']~div]:top-1/2 [&[style*='opacity: 0']~div]:-translate-y-1/2"
        >
          <div className="relative py-8 w-full">
            <NavigationHeader />
          </div>
        </nav>
        <div className="w-full pl-0 lg:pl-0 xl:pl-20 transition-all duration-300">
          <Button variant="getStarted">
            <span className="text-black p-4">GET STARTED</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
