"use client";
import items from "@/app/utils/sidebar.items";
import SidebarItem from "./item";

type Props = {
  sidebarOpen: boolean;
};

export default function Sidebar({ sidebarOpen }: Props) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed xl:static z-30 xl:flex xl:flex-shrink-0 w-64 border-r border-gray-300 overflow-y-auto min-h-app_height max-h-app_height duration-200 transition-width ${
          sidebarOpen === true ? "" : "-translate-x-full xl:-translate-x-0"
        } `}
      >
        <div className="flex relative flex-col flex-1 px-2 py-4 bg-white min-h-app_height">
          <div className="flex flex-col flex-1">
            <div className="flex-1">
              <ul className="pb-2">
                {/* Sidebar Items */}
                {items.map((item, index) => (
                  <SidebarItem item={item} key={index} />
                ))}
                {/* End Sidebar Items */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </>
  );
}
