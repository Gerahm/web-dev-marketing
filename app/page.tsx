"use client";
import Form from "@/components/molecules/Form";
import HeroSection from "@/components/organism/HeroSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 pt-[100px]">
        <div className="flex">
          <HeroSection />
        </div>
        <div className=" flex  gap-4 flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className=" max-w-[35rem]">
            <Form />
          </div>
          <div className="flex mx-auto justify-center items-center">
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quos.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
