import Link from "next/link";

const CustomDropDown = () => {
  return (
    <div className="fixed top-[100px] inset-x-0 mx-auto w-[90%] sm:w-[90%] md:w-[90%] bg-white shadow-lg border-none rounded-2xl z-50 lg:hidden xl:hidden">
      <div className="w-full py-8 px-6">
        <div className="flex flex-col items-center gap-6">
          <button className="text-xl hover:text-orange-500 cursor-pointer focus:bg-transparent focus:text-orange-500 px-0">
            <Link href="/">Home</Link>
          </button>
          <button className="text-xl hover:text-orange-500 cursor-pointer focus:bg-transparent focus:text-orange-500 px-0">
            <Link href="/about">About</Link>
          </button>
          <button className="text-xl hover:text-orange-500 cursor-pointer focus:bg-transparent focus:text-orange-500 px-0">
            <Link href="/services">Services</Link>
          </button>
          <button className="text-xl hover:text-orange-500 cursor-pointer focus:bg-transparent focus:text-orange-500 px-0">
            <Link href="/pricing">Pricing</Link>
          </button>
          <button className="text-xl hover:text-orange-500 cursor-pointer focus:bg-transparent focus:text-orange-500 px-0">
            <Link href="/portfolio">Portfolio</Link>
          </button>
          <button className="text-xl hover:text-orange-500 cursor-pointer focus:bg-transparent focus:text-orange-500 px-0">
            <Link href="/contact-us">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;
