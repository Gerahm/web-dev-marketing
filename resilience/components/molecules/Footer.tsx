import Image from "next/image";

const Footer = () => {
  return (
    <footer id="cs-footer-269">
      <div className=" flex flex-col">
        {/* Logo Group */}
        <div className="absolute cs-logo-group">
          <a href="/" aria-label="go back to home" className="cs-logo">
            <Image
              className="cs-logo-img light"
              aria-hidden="true"
              loading="lazy"
              src="https://csimg.nyc3.digitaloceanspaces.com/Footer/logo-light.svg"
              alt="logo"
              width={240}
              height={32}
            />
          </a>
          <p className="cs-text ">
            Etiam nulla ultrices consequat, posuere nulla. Ac iaculis lorem
            phasellus ultrices adipiscing viverra sit ut quam. In diam mattis
            elementum diam at sed ultricies.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="absolute flex flex-col md:flex-row justify-between ">
          {/* Links */}
          <ul className="cs-nav">
            <li className="cs-nav-li">
              <span className="cs-header">Sitemap</span>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="/">
                Home
              </a>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="/about">
                About
              </a>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="cs-nav-li">
              <a className="cs-nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <ul className="cs-contact">
            <li className="cs-nav-li">
              <span className="cs-header">Contact</span>
            </li>
            <li className="cs-contact-li">
              <a className="cs-contact-link" href="tel:(123) 456-7890">
                (123) 456-7890
              </a>
            </li>
            <li className="cs-contact-li">
              <a className="cs-contact-link" href="mailto:info@codestitch.com">
                info@codestitch.com
              </a>
            </li>
            {/* Social Media */}
            <li className="cs-contact-li cs-social-group">
              <div className="cs-social">
                {[
                  {
                    icon: "google",
                    label: "visit google profile",
                    src: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Social/google.svg",
                  },
                  {
                    icon: "facebook",
                    label: "visit facebook profile",
                    src: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Social/Facebook.svg",
                  },
                  {
                    icon: "instagram",
                    label: "visit instagram profile",
                    src: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Social/instagram.svg",
                  },
                ].map((social) => (
                  <a
                    key={social.icon}
                    className="cs-social-link"
                    aria-label={social.label}
                    href=""
                  >
                    <Image
                      className="cs-social-img"
                      aria-hidden="true"
                      loading="lazy"
                      src={social.src}
                      alt={social.icon}
                      width={11}
                      height={11}
                    />
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
