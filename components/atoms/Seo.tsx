import Image from "next/image";

export default function Seo() {
  return (
    <div className="w-[120px] h-[100px] bg-[#ffb200] flex justify-center items-center rounded-[5px]">
      <Image src="/images/Seo.png" alt="Seo" width={100} height={100} />
    </div>
  );
}
