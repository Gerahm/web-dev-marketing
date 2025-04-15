import Link from "next/link";
import Seo from "../atoms/Seo";

const SEOSection = () => {
  return (
    <div className="relative">
      <div className="absolute -top-12 left-3 z-10 ">
        <Seo />
      </div>
      <div className="relative flex flex-col gap-4 bg-black text-white p-[15px] rounded-[10px] h-[450px] w-[320px]">
        <span className="pt-13 text-[28px] text-white font-bold leading-tight">
          LOCAL SEO
        </span>
        <p className="text-[20px] text-white font-[300px] pt-9">
          We help your business show up on <br /> Google when local customers
          <br /> searching for your services. From <br /> keyword targeting to
          on-page SEO, <br /> we make sure you're found by the <br />
          right people in your area.
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

export default SEOSection;
