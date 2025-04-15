import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col gap-4 items-left justify-left ">
      <div className="flex flex-row gap-4 ">
        <Image
          src="/images/clean-house.png"
          alt="service1"
          width={100}
          height={100}
        />
        <p className="text-[28px] text-black font-[300px] my-auto">
          Pressure Washing Services
        </p>
      </div>
      <div className="flex flex-row gap-4 ">
        <Image
          src="/images/carwash.png"
          alt="service2"
          width={100}
          height={100}
        />
        <p className="text-[28px] text-black font-[300px] my-auto">
          Auto Detailing Services
        </p>
      </div>
      <div className="flex flex-row gap-4  ">
        <Image
          src="/images/carwash.png"
          alt="service3"
          width={100}
          height={100}
        />
        <p className="text-[28px] text-black font-[300px] my-auto">
          Gutter Cleaning Services
        </p>
      </div>
      <div className="flex flex-row gap-4 ">
        <Image
          src="/images/carwash.png"
          alt="service4"
          width={100}
          height={100}
        />
        <p className="text-[28px] text-black font-[300px] my-auto">
          Pool Cleaning & Maintenance
        </p>
      </div>
      <div className="flex flex-row gap-4 ">
        <Image
          src="/images/carwash.png"
          alt="service1"
          width={100}
          height={100}
        />
        <p className="text-[28px] text-black font-[300px] my-auto">Other </p>
      </div>
    </div>
  );
};

export default Services;
