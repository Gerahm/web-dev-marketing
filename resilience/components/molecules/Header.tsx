import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/molecules/NavigationHeader";
const Header = () => {
  return (
    <header className="w-full box-border px-4 bg-white shadow-[0_8px_24px_rgba(149,157,165,0.2)] fixed z-[10000]">
      <div className="w-full max-w-[80rem] mx-auto flex justify-flex-end items-center gap-6">
        {/* <!--Nav Logo--> */}
        <Link
          href=""
          className="w-[18.4%] max-w-[21.875rem] h-[4.0625rem] mr-auto ml-0 p-0 flex justify-center items-center z-100"
          aria-label="back to home"
        >
          <Image
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg"
            alt="logo"
            width="210"
            height="29"
            aria-hidden="true"
            decoding="async"
          />
        </Link>
        {/* <!--Navigation List--> */}
        <nav
          role="navigation"
          className="w-full m-0 p-0 flex justify-end items-center [gap:clamp(1.25rem,2.6vw,2.25rem)]"
        >
          {/* <!--Mobile Nav Toggle--> */}
          <button aria-label="mobile menu toggle">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          {/* <!-- We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are--> */}
          <div className="  list-none py-8 flex-none justify-end">
            <NavigationHeader />
          </div>
        </nav>
        {/* <a href="" >Contact Us</a> */}
        {/* <!--Dark Mode toggle, uncomment button code if you want to enable a dark mode toggle-->
        <!-- <button id="dark-mode-toggle" aria-label="dark mode toggle">
            <svg class="cs-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"/></svg>
            <img class="cs-sun" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg" decoding="async" alt="moon" width="15" height="15">
        </button> --> */}
      </div>
    </header>
  );
};

export default Header;
