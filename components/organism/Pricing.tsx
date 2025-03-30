import Image from "next/image";
import Link from "next/link";

const pricingData = [
  {
    package: "Personal",
    price: "$49.99",
    description: "Basic features for up to 10 services",
    isPopular: false,
    features: [
      { text: "All available starter feature", enabled: true },
      { text: "Home service 24/7", enabled: true },
      { text: "Customer agent service", enabled: true },
      { text: "Professional Service", enabled: true },
      { text: "2 dedicated mechanic", enabled: false },
      { text: "Remote Service mechanic", enabled: false },
    ],
  },
  {
    package: "Professional",
    price: "$99.99",
    description: "Basic features for up to 10 services",
    isPopular: true,
    features: [
      { text: "All available starter feature", enabled: true },
      { text: "Home service 24/7", enabled: true },
      { text: "Customer agent service", enabled: true },
      { text: "Professional Service", enabled: true },
      { text: "2 dedicated mechanic", enabled: false },
      { text: "Remote Service mechanic", enabled: false },
    ],
  },
  {
    package: "Basic",
    price: "$49.99",
    description: "Basic features for up to 10 services",
    isPopular: false,
    features: [
      { text: "All available starter feature", enabled: true },
      { text: "Home service 24/7", enabled: true },
      { text: "Customer agent service", enabled: true },
      { text: "Professional Service", enabled: true },
      { text: "2 dedicated mechanic", enabled: false },
      { text: "Remote Service mechanic", enabled: false },
    ],
  },
];

const Pricing = () => {
  return (
    <section className=" bg-[#f7f8f8]">
      <div className="container mx-auto flex flex-col items-center gap-[clamp(3rem,6vw,4rem)] max-w-[80em] px-4 pt-[clamp(4rem,10vw,8rem)] pb-[clamp(3.75rem,7.82vw,6.25rem)]">
        <div className="w-full text-center flex flex-col items-center relative z-10">
          <span className="text-primary text-[clamp(0.8125rem,1.6vw,1rem)] uppercase font-bold tracking-wider mb-1">
            Pricing
          </span>
          <h2 className="text-[clamp(1.9375rem,3.9vw,3.0625rem)] font-black leading-tight mb-4 text-headerColor max-w-[800px]">
            Simple & Transparent <br className="hidden md:block" />
            Pricing
          </h2>
          <p className="text-bodyTextColor text-base leading-relaxed max-w-[600px]">
            We are one of the leading auto repair shops serving customers in
            Tucson. All mechanic services are performed by highly qualified
            mechanics. We handle all makes and models in more than 40 car
            brands.
          </p>
        </div>

        <ul className="w-full m-0 p-0 flex flex-col md:flex-row items-stretch gap-[clamp(1rem,1.8vw,1.25rem)] relative z-10">
          {pricingData.map((plan, index) => (
            <li
              key={index}
              className={`text-left list-none w-full max-w-[31.25rem] m-0 p-[clamp(1.25rem,3vw,2.5rem)_clamp(1rem,3vw,2rem)] ${
                plan.isPopular ? "bg-[#1a1a1a]" : "bg-white"
              } flex flex-col`}
            >
              {plan.isPopular && (
                <span className=" top-0 right-0 uppercase text-[0.8125rem] font-bold leading-[1.2em] tracking-[0.01em] py-2 px-5 bg-[#ffba43] text-[#1a1a1a]">
                  Popular
                </span>
              )}
              <span
                className={`text-[clamp(0.8125rem,1.4vw,1rem)] leading-[1.2em] uppercase font-bold mb-2 ${
                  plan.isPopular ? "text-[#888]" : "text-[#767676]"
                }`}
              >
                {plan.package}
              </span>
              <span
                className={`text-[clamp(1.9375rem,3.9vw,3.0625rem)] leading-[1.2em] font-black ${
                  plan.isPopular ? "text-white" : "text-[#1a1a1a]"
                }`}
              >
                {plan.price}
              </span>
              <p
                className={`text-base leading-[1.5em] mb-[clamp(1rem,2vw,1.5rem)] ${
                  plan.isPopular ? "text-white" : "text-[#4e4b66]"
                }`}
              >
                {plan.description}
              </p>
              <Link
                href="/book-appointment"
                className={`text-base leading-[clamp(2.875em,5.5vw,3.5em)] font-bold text-center text-white min-w-[9.375rem] px-6 ${
                  plan.isPopular
                    ? "bg-[#ff6a3e] hover:bg-black"
                    : "bg-[#1a1a1a] hover:bg-[#ff6a3e]"
                } transition-colors duration-300`}
              >
                Book Appointment
              </Link>

              <ul className="mt-6 pt-6 flex flex-col gap-3 relative before:content-[''] before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[rgba(232,232,232,0.2)] before:via-[#e8e8e8] before:to-[rgba(232,232,232,0.2)] before:absolute before:top-0">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`text-[clamp(0.875rem,1.5vw,1rem)] list-none leading-[1.2em] w-full m-0 p-0 flex justify-between items-start gap-4 ${
                      feature.enabled ? "" : "opacity-50"
                    } ${plan.isPopular ? "text-white" : "text-[#4e4b66]"}`}
                  >
                    {feature.text}
                    <Image
                      className={`w-[1.125rem] h-auto ${
                        plan.isPopular ? "filter invert brightness-200" : ""
                      }`}
                      src="/images/checkmark.svg"
                      alt="checkmark"
                      width={18}
                      height={18}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating Images */}
      <Image
        className="absolute top-0 left-0 w-[clamp(4.75rem,7vw,7.5625rem)] h-auto pointer-events-none z-[1]"
        src="/images/left-chevron.svg"
        alt="left chevron"
        width={121}
        height={272}
      />
      <Image
        className="absolute bottom-0 right-0 w-[clamp(4.75rem,7vw,7.5625rem)] h-auto pointer-events-none z-[1]"
        src="/images/right-chevron.svg"
        alt="right chevron"
        width={121}
        height={272}
      />
    </section>
  );
};

export default Pricing;
