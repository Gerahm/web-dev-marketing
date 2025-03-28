import Link from "next/link";

const Content = () => {
  return (
    <div className="z-9999 w-full max-w-[39.375rem] mb-8 flex justify-start items-center flex-wrap gap-6">
      <Link
        href=""
        className="text-base leading-[clamp(2.875rem,5.5vw,3.5rem)] no-underline font-bold text-center m-0 text-white min-w-[9.375rem] px-6 bg-primary rounded relative z-[1] inline-block box-border hover:before:w-full before:content-[''] before:absolute before:h-full before:w-0 before:bg-black before:opacity-100 before:top-0 before:left-0 before:z-[-1] before:rounded before:transition-[width] before:duration-300"
      >
        Get A Quote
      </Link>
      <Link
        href=""
        className="text-base leading-[clamp(2.875rem,5.5vw,3.5rem)] no-underline font-bold text-center m-0 text-primary min-w-[9.375rem] px-6 bg-transparent rounded z-[1] inline-block box-border transition-[background-color,color] duration-300 hover:bg-primary hover:text-white"
      >
        Our Services
      </Link>
    </div>
  );
};

export default Content;
