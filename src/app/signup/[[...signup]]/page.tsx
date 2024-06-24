"use client";
import React, { useState } from "react";
import Step from "../components/Step";
import { Avatar, LinkButton, OAuthSocialButton } from "@/src/subframe";
import Link from "next/link";
import MyTextField from "../../components/MyTextField";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  let [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-default-background">
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-wrap items-start mobile:flex-col mobile:flex-wrap mobile:gap-0">
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 pt-12 pr-12 pb-12 pl-12">
          <div className="flex w-full max-w-[448px] flex-col items-center justify-center gap-8">
            {/* Add here */}
            <div className="mx-auto w-full max-w-md rounded-lg bg-white">
              <SignUp />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-center gap-12 bg-[#151718] pt-12 pr-12 pb-12 pl-12">
          <div className="flex h-full w-full max-w-[448px] grow shrink-0 basis-0 flex-col items-center justify-center gap-8">
            <Avatar
              size="x-large"
              image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
            >
              HW
            </Avatar>
            <div className="flex w-full flex-col items-center gap-6">
              <span className="text-heading-3 font-heading-3 text-slate-300 text-center">
                &quot;This is the shit!&quot;
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-body-bold font-body-bold text-slate-300">
                  Isaac Yanez
                </span>
                <span className="text-body font-body text-slate-300">–</span>
                <span className="text-body font-body text-slate-300">
                  Founder, Voxy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
