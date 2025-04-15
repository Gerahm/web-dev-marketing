import Link from "next/link";
import Tracker from "@/components/atoms/tracker";
const TrackingSection = () => {
  return (
    <div className="relative">
      <div className="absolute -top-12 left-3 z-10 ">
        <Tracker />
      </div>
      <div className="relative flex flex-col gap-4 bg-black text-white p-[15px] rounded-[10px] h-[450px] w-[320px]">
        <span className="pt-13 text-[28px] text-white font-bold leading-tight">
          PERFORMANCE
          <br />
          TRACKING & REPORTING
        </span>
        <p className="text-[20px] text-white font-[300px] pt-1">
          Get clear, easy-to-understand
          <br />
          reports that show how your website
          <br />
          and local marketing are performing.
          <br />
          We track what matters most —<br />
          traffic, calls, leads, and more — so
          <br />
          you always know what’s working.
        </p>
        <Link
          href="/"
          className="text-[20px] text-white font-[300px] underline py-2 pt-4"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default TrackingSection;
