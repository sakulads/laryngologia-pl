import React, { FC, useState } from "react";
// import headerNavLinks from "@/lib/headernavLinks";
import { useTheme } from "next-themes";
import Link from "next/link";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Klinika", page: "klinika" },
  { label: "Zabiegi", page: "zabiegi" },
  { label: "Zespol", page: "zespol" },
  { label: "Cennik", page: "cennik" },
  { label: "Raty", page: "raty" },
  { label: "Znieczulenie", page: "znieczulenie" },
  { label: "Kontakt", page: "kontakt" },
];

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navBar, setNavBar] = useState(false);
  return (
    <header className="top-0 mx-auto w-full max-w-screen-2xl border-stone-600 px-4 py-4 dark:border-b dark:border-stone-600 sm:px-14">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center  justify-between py-2">
            <div className="lg:block lg:py-4">
              <h2 className="text-2xl font-bold">
                <Link href="/">LARYNGOLOGIA</Link>
              </h2>
            </div>
            <div className="lg:hidden">
              <button
                aria-label="menu"
                role="button"
                onClick={() => setNavBar(!navBar)}
              >
                {navBar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 justify-self-center  pb-3 lg:mt-0 lg:block lg:justify-center lg:pb-0 ${
              navBar ? "flex" : "hidden "
            }`}
          >
            <div className="mx-auto flex flex-col items-center justify-center space-y-4 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    href={item.page}
                    key={idx}
                    className={
                      "flex font-montserrat text-3xl font-medium hover:text-emerald-400 dark:text-blue-400 lg:inline-flex lg:text-xl"
                    }
                    onClick={() => setNavBar(!navBar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  role="button"
                  aria-label="light"
                  onClick={() => setTheme("light")}
                  className="rounded-xl bg-slate-200 p-2"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  aria-label="dark"
                  role="button"
                  onClick={() => setTheme("dark")}
                  className="rounded-xl bg-slate-300 p-2"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// {
/* <div className="text-gray-normal flex items-center font-medium leading-5">
  <div className="hidden lg:block">
    {headerNavLinks.map(
      (link: any): JSX.Element => (
        <Link
          key={link.title}
          href={link.href}
          className="text-gray-light hover:text-green-light p-2 font-medium sm:p-4"
        >
          {link.title}
        </Link>
      ),
    )}
  </div>
  <button className="hover:bg-blue-dark hidden h-12 max-h-screen w-36 rounded-xl border-0 bg-emerald-400 text-white shadow-md transition-all hover:text-white lg:block">
    Umów wizytę
  </button>
  {/* <MobileNav /> */
// </div>;
