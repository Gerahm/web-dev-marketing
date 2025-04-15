import Devices from "../atoms/devices";

import Link from "next/link";

const DevicesSection = () => {
  return (
    <div className="relative h-full">
      <div className="absolute -top-12 left-3 z-10 ">
        <Devices />
      </div>
      <div className="relative flex flex-col gap-4 bg-black text-white p-[15px] rounded-[10px] h-[450px] w-[320px]">
        <span className="pt-13 text-[28px] text-white font-bold leading-tight">
          CUSTOM WEB DESIGN &<br /> DEVELOPMENT
        </span>
        <p className="text-[20px] text-white font-[300px] leading-relaxed">
          We build fast, mobile-friendly
          <br />
          websites that are custom-coded — <br />
          no bloated templates & plugins.
          <br />
          Every site is fully responsive,
          <br />
          optimized for search engines, and
          <br />
          designed to turn visitors into leads.
        </p>
        <Link
          href="/"
          className="text-[20px] text-white font-[300px] py-2 underline hover:text-[#ffb200] transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default DevicesSection;
