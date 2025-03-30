import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-[clamp(3.75rem,7.82vw,6.25rem)] px-4">
      <div className="w-full max-w-[34.375rem] md:max-w-[80rem] mx-auto flex flex-wrap justify-start items-start gap-x-[clamp(4.25rem,10%,6.25rem)]">
        {/* Logo Group */}
        <div className="w-full md:w-auto md:mr-auto relative">
          <Link
            href="/"
            className="block w-[clamp(13.125rem,8vw,15rem)] h-auto mb-[clamp(1.75rem,4.17vw,2.75rem)]"
          >
            <Image
              src="https://csimg.nyc3.digitaloceanspaces.com/Footer/logo-light.svg"
              alt="Company Logo"
              width={240}
              height={80}
              className="w-full h-auto"
            />
          </Link>
          <p className="text-[clamp(0.875rem,2.5vw,1rem)] leading-normal mb-8 md:mb-0 max-w-[33.75rem] md:max-w-[19.0625rem] text-white md:w-[80%]">
            Etiam nulla ultrices consequat, posuere nulla. Ac iaculis lorem
            phasellus ultrices adipiscing viverra sit ut quam. In diam mattis
            elementum diam at sed ultricies.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-[clamp(0.5rem,1.2vw,0.75rem)]">
          <span className="block text-base font-bold mb-3.5 text-white">
            Navigation
          </span>
          <ul className="p-0 m-0">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item} className="list-none mb-2 last:mb-0">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-base text-white no-underline relative hover:after:w-full after:content-[''] after:w-0 after:h-0.5 after:bg-current after:absolute after:block after:bottom-[-2px] after:left-0 after:transition-[width] after:duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="mt-[clamp(0.5rem,1.2vw,0.75rem)]">
          <span className="block text-base font-bold mb-3.5 text-white">
            Contact
          </span>
          <ul className="p-0 m-0 flex flex-col self-stretch">
            <li className="list-none mb-5">
              <address className="text-base text-white not-italic">
                123 Street Name
                <br />
                City, ST 12345
              </address>
            </li>
            <li className="list-none mb-2">
              <a
                href="tel:555-555-5555"
                className="text-base text-white no-underline hover:underline"
              >
                (555) 555-5555
              </a>
            </li>
            <li className="list-none">
              <a
                href="mailto:info@company.com"
                className="text-base text-white no-underline hover:underline"
              >
                info@company.com
              </a>
            </li>
          </ul>
          {/* Social Links */}
          <div className="mt-5 ml-auto">
            <div className="inline-flex justify-start gap-3">
              {["Facebook", "google", "instagram"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`}
                  className="w-6 h-6 bg-[#4e4b66] hover:bg-primary rounded-full flex justify-center items-center relative z-[1] transition-transform hover:-translate-y-[3px] duration-300"
                  aria-label={platform}
                >
                  <Image
                    src={`https://csimg.nyc3.digitaloceanspaces.com/Social/${platform}.svg`}
                    alt={`${platform} icon`}
                    width={13}
                    height={13}
                    className="h-[0.8125rem] w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
