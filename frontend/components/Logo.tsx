// components/Logo.tsx
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/N.svg"
      alt="ACME Logo"
      width={20}
      height={20}
      priority
    />
  );
}
