import React from "react";
import Link from "next/link";

const TAB_MENUS = ["about", "services", "contacts"] as const;

const TAB_OBJECTS = {
  about: "About Us",
  services: "Services",
  contacts: "Contacts",
} as const;

interface TabProps {
  text: keyof typeof TAB_OBJECTS;
}

const Tabs = ({ text }: TabProps) => {
  return (
    <li>
      <Link href={`/${text}`}>
        <p className="hover:underline">{TAB_OBJECTS[text]}</p>
      </Link>
    </li>
  );
};

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-main-light sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <h1>{"Hominy's Website"}</h1>
            </Link>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-textBlack-default">
              {TAB_MENUS.map((tab) => (
                <Tabs key={tab} text={tab} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
