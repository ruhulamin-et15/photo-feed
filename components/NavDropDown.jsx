"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NavDropDown = ({ lang }) => {
  const [locale, setLocale] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (selectedLocale) => {
    const redirectUrl = pathname.replace(`/${locale}`, `/${selectedLocale}`);
    router.push(redirectUrl);
    setLocale(selectedLocale);
    setIsOpen(false);
  };
  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
        >
          <Image
            className="max-w-8"
            src={lang === "en" ? "/usa.png" : "/bd.png"}
            alt="bangla"
            width={32}
            height={32}
          />
          {lang === "bn" ? "Bangla" : "English"}
        </button>
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            <li
              onClick={() => handleChange("bn")}
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <Image
                className="max-w-8"
                src="/bd.png"
                alt="bangla"
                width={32}
                height={32}
              />
              Bangla
            </li>
            <li
              onClick={() => handleChange("en")}
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <Image
                className="max-w-8"
                src="/usa.png"
                alt="bangla"
                width={32}
                height={32}
              />
              English
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavDropDown;
