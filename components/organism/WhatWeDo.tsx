import DevicesSection from "@/components/molecules/DevicesSection";
import LocationSection from "@/components/molecules/LocationSection";
import SEOSection from "@/components/molecules/SEOSection";
import TrackingSection from "@/components/molecules/TrackingSection";
const WhatWeDo = () => {
  return (
    <div className="flex flex-col gap-4 pt-10">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[24px] text-[#ffb200] font-bold ">What We Do</h1>
        <span className="text-[48px] text-black font-bold ">
          Web Solutions Built for Trades & Local Services
        </span>
        <p className="text-[24px] text-black font-[300px] text-center justify-center items-center">
          We build conversion-focused websites for small business owners in
          trades like pressure washing, auto detailing,
          <br /> gutter cleaning, pool services, and more — so you can get more
          calls, leads, and repeat customers. While you <br /> focus on running
          your business, we handle the website and marketing side — because when
          your business grows, <br /> so does ours.
        </p>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center pt-25">
        <DevicesSection />
        <SEOSection />
        <LocationSection />
        <TrackingSection />
      </div>
    </div>
  );
};

export default WhatWeDo;
