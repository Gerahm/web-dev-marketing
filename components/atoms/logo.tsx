import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="back to home">
      <Image
        src="/images/Logo.png"
        alt="Logo"
        width="199"
        height="68"
        aria-hidden="true"
        decoding="async"
      />
    </Link>
  );
}
