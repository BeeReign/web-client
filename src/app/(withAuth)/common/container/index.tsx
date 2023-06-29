"use client";
import Header from "../header";
import Sidebar from "../sidebar";
import { MutableRefObject, useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar: MutableRefObject<any> = useRef(null);
  // close on click outside
  // End close on click outside
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header
        sidebarOpen={sidebarOpen}
        onSidebarChange={() => setSidebarOpen(!sidebarOpen)}
        sidebar={sidebar}
      />
      <main className="bg-beereign_clear min-h-app_height max-h-app_height overflow-y-scroll xl:overflow-hidden">
        <div className="xl:flex overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} />
          <div className="w-full p-6 max-h-app_height overflow-y-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
