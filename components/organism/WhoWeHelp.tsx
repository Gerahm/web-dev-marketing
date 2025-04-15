import GetStartedButton from "@/components/atoms/GetStartedButton";
import Services from "@/components/molecules/Services";
const WhoWeHelp = () => {
  return (
    <div className="flex flex-row gap-25 pt-25">
      <div className="flex flex-col gap-4 text-left justify-left items-left">
        <span className="text-[24px] font-[var(--font-roboto-condensed)] text-[#ffb200] font-bold ">
          Who We Help
        </span>
        <span className="text-[48px] text-black font-bold ">
          Website Built for Local Trades &<br />
          Service Providers
        </span>
        <p className="text-[24px] text-black font-[300px] ">
          We help small service businesses like pressure washers, mobile
          <br />
          auto detailers, gutter cleaners, pool service pros, and more grow
          <br />
          their leads and local reputation. If your business depends on calls,
          <br />
          referrals, and being found online — we’re here to help you stand out
          <br />
          and grow strong.
        </p>
        <div className="flex pt-10">
          <GetStartedButton />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-left justify-left items-left">
        <Services />
      </div>
    </div>
  );
};

export default WhoWeHelp;
