import React from "react";
import SideNav from "../ui/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNav />
      <div className="flex flex-col w-full h-full">{children}</div>
    </>
  );
}
