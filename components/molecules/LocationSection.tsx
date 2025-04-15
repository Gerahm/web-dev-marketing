import Link from "next/link";
import Location from "@/components/atoms/location";
const LocationSection = () => {
  return (
    <div className="relative">
      <div className="absolute -top-12 left-3 z-10 ">
        <Location />
      </div>
      <div className="relative flex flex-col gap-4 bg-black text-white p-[15px] rounded-[10px] h-[450px] w-[320px]">
        <span className="pt-13 text-[28px] text-white font-bold leading-tight">
          LOCAL LISTINGS
          <br />
          OPTIMIZATION
        </span>
        <p className="text-[20px] text-white font-[300px] pt-1">
          We optimize your business on key
          <br />
          platforms like Google Business
          <br />
          Profile, Apple Maps, and Bing Places
          <br />— making sure your info is accurate,
          <br />
          complete, and working to drive more
          <br />
          calls and leads.
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

export default LocationSection;
