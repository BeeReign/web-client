"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaChevronDown } from "react-icons/fa6";
import DropdownItem from "../dropdownItem";

type Props = {
  item: {
    id: string;
    name: string;
    icon: IconType;
    path: string;
    childrens?: { id: string; name: string; path: string }[];
  };
};

export default function SidebarItem({ item }: Props) {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);

  const handleClick = (value: string) => {
    if (value == path) {
      setPath("");
      return;
    }
    setPath(value);
  };

  /* item with childrens  */
  if (item.childrens) {
    return (
      <li className="mt-1">
        <button
          onClick={() => handleClick(`${item.path}`)}
          className="hover:bg-gray-100 w-full px-2 py-[6px] flex items-center justify-between rounded"
        >
          <div className="flex">
            <div className="w-5 h-5 rounded-lg text-center grid place-items-center">
              <item.icon className="text-gray-400 w-5 h-5" />
            </div>
            <span className="ml-2 text-gray-700 capitalize text-sm">
              {item.name}
            </span>
          </div>
          <div>
            <FaChevronDown
              className={`text-gray-400 w-4 h-4 ${
                path.startsWith(`${item.path}`) ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>
        {path.startsWith(`${item.path}`) ? (
          <div className="mt-2 ml-[17px] pl-2.5 border-l">
            {item.childrens?.map((child, index) => (
              <DropdownItem
                key={index}
                item={child}
                currentPath={String(pathname)}
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </li>
    );
  }
  /* End item with childrens  */

  /* Default, without items */
  return (
    <li className={`${item.id != "home" ? "mt-1" : ""}`}>
      <Link
        href={`${item.path}`}
        className={`${
          pathname == item.path ? "bg-gray-100" : "hover:bg-gray-100"
        } px-2 py-[6px] flex items-center rounded`}
      >
        <div className="w-5 h-5 rounded-lg text-center grid place-items-center">
          <item.icon className="text-gray-400 w-5 h-5" />
        </div>
        <span className="ml-2 text-gray-700 capitalize text-sm">
          {item.name}
        </span>
      </Link>
    </li>
  );
  /* End Default, without items */
}
