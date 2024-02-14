import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo-dark.svg" width={80} height={40} alt="Logo" />
    </Link>
  );
};
export default Logo;
