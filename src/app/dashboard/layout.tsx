"use client";
import React from "react";
import SideNav from "../ui/side-nav";
import Header from "../ui/Header";
import { UserProvider } from "../context/UserContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SideNav />
        <div className="sm:ml-14">
          <Header />
          <main className="grid bg-[#242627] rounded-3xl flex-1 items-start gap-4 p-8 sm:px-6 sm:p-12 md:gap-8 lg:grid-cols-2 xl:grid-cols-1">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              {children}
            </div>
          </main>
        </div>
      </div>
    </UserProvider>
  );
}
