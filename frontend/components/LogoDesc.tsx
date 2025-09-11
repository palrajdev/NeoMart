// components/Logo.tsx
import Image from "next/image";

export default function LogoDesc() {
  return (
    <Image
      src="/NeoMart.svg"
      alt="ACME Logo"
      width={100}
      height={100}
      priority
    />
  );
}
