import Image from "next/image";
export default function Location() {
  return (
    <div className="w-[120px] h-[100px] bg-[#ffb200] flex justify-center items-center rounded-[5px]">
      <Image src="/images/location.png" alt="Location" width={90} height={90} />
    </div>
  );
}
