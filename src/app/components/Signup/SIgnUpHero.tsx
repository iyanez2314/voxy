"use client";
import React from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import Image from "next/image";
import UiScreenShot from "@/public/ui-screenshot.png";

export function SignUpHero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Voice AI.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={UiScreenShot}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
