import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full ">
      <Image
        src="/images/image-hero.jpg"
        alt="Hero Section"
        height={787}
        width={1920}
        className="object-cover z-0"
        priority
      />
    </section>
  );
};

export default HeroSection;
