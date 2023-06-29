"use client";
import Image from "next/image";
import { MutableRefObject } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiUserCircle, HiBars3 } from "react-icons/hi2";

type Props = {
  sidebarOpen: boolean;
  onSidebarChange: () => void;
  sidebar: MutableRefObject<any>;
};

export default function Header({
  sidebarOpen,
  onSidebarChange,
  sidebar,
}: Props) {
  return (
    <>
      <header className="w-full flex flex-row items-center justify-between border-b border-gray-300 relative top-0 bg-white px-4 py-3">
        <ul className="w-28">
          <li>
            <Image
              src="/logo.png"
              width="165"
              height="45"
              alt="BeeReign logo"
              priority
            />
          </li>
        </ul>
        <ul className="flex 2xl:max-w-xs overflow-hidden items-center">
          <button>
            <div className="hidden xl:flex xl:items-center">
              <div className="w-7 h-7 rounded-full bg-slate-300 grid">
                <span className="self-center">J</span>
              </div>
              <p className="ml-1.5 text-sm font-semibold capitalize">
                {"Jhon Doe"}
              </p>
              <FaChevronDown className="ml-1.5 w-3 h-3" />
            </div>
          </button>
          <button
            ref={sidebar}
            className="text-gray-600 xl:hidden"
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            onClick={(e) => {
              e.stopPropagation();
              onSidebarChange();
            }}
          >
            <HiBars3 className="w-8 h-8" />
          </button>
        </ul>
      </header>
    </>
  );
}
