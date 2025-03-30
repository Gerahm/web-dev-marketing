import Image from "next/image";
import Link from "next/link";

const Logo = ({ logo }: { logo: string }) => {
  return (
    <Link href="/" className="cs-logo" aria-label="back to home">
          <Image src={logo} alt="logo" width={210} height={29} className="w-auto h-auto" />
        </Link> 
  );
};

export default Logo;
