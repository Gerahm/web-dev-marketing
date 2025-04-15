import Image from "next/image";

export default function Devices() {
  return (
    <div className=" w-[120px] h-[100px] bg-[#ffb200] flex justify-center items-center rounded-[5px] absolute top-0 left-0">
      <Image src="/images/devices.png" alt="Devices" width={100} height={100} />
    </div>
  );
}
