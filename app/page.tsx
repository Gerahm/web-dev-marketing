"use client";
import HeroSection from "@/components/organism/HeroSection";
import WhatWeDo from "@/components/organism/WhatWeDo";
import WhoWeHelp from "@/components/organism/WhoWeHelp";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 pt-[100px] ">
        <HeroSection />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-4 w-fit">
          <div className="flex ">
            <WhatWeDo />
          </div>
          <div className=" flex  pb-10">
            <WhoWeHelp />
          </div>
        </div>
      </div>
    </>
  );
}
