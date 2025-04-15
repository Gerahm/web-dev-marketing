import Image from "next/image";
import { Button } from "@/components/ui/button";
import GetStartedButton from "@/components/atoms/GetStartedButton";
const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[74vh] overflow-hidden">
        <div className="absolute -right-[20%] w-[120%] h-full">
          <Image
            src="/images/hero-image.png"
            alt="Hero Section"
            height={787}
            width={1920}
            className="object-cover object-[center_10%] w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-white/20 to-transparent" />
      </div>
      <div className="absolute w-full inset-0">
        <div className="flex flex-col pt-[100px] p-3 mx-0 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-[16%]">
          <div className="flex flex-col gap-0">
            <h1 className="font-[var(--font-roboto-condensed)]  text-[24px] md:text-[24px] lg:text-[24px] text-white font-[300px] font-italic">
              AFFORDABLE & MADE SIMPLE
            </h1>
            <div className="flex flex-col gap-2">
              <span className="font-[var(--font-roboto-condensed)] text-[72px] font-bold text-[#ffb200] leading-[1.2] tracking-[0] uppercase ">
                SMALL BUSINESS
              </span>
              <span className="font-[var(--font-roboto-condensed)] text-[72px] font-bold text-white leading-[1.2] tracking-[0] uppercase ">
                WEB DESIGN
              </span>
            </div>
            <p className="font-[var(--font-roboto-condensed)] text-[26px] text-white">
              We don't just build websites — we help small service-based <br />
              businesses grow. With no upfront costs, we invest in your <br />{" "}
              success from day one.
            </p>
          </div>
          <div className="flex flex-row gap-5 mt-5">
            <GetStartedButton />
            <Button
              variant="ghost"
              className="rounded-2 py-[15px] px-[30px]   w-[274px] h-[69px]"
            >
              <span className="text-white font-bold text-[18px] ">
                See Our Services
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
