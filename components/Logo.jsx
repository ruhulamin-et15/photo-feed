import Image from "next/image";
import Link from "next/link";

export default function Logo({ lang }) {
  return (
    <Link href={`/${lang}`}>
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"
        alt="Lws_logo"
        width={165}
        height={53.27}
      />
    </Link>
  );
}
