import React from "react";
import { LinkButton } from "@/subframe/components/LinkButton";
import { TextField } from "@/subframe/components/TextField";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import VoxyLogo from "../../../public/V-removebg-preview.png";
import Image from "next/image";
import MyTextField from "./MyTextField";
import { OAuthSocialButton } from "@/subframe/components/OAuthSocialButton";
import { Avatar } from "@/subframe/components/Avatar";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-default-background">
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-wrap items-start mobile:flex-col mobile:flex-wrap mobile:gap-0">
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 pt-12 pr-12 pb-12 pl-12">
          <Image src={VoxyLogo} alt="Voxy Logo" width={100} height={100} />
          <div className="flex w-full max-w-[448px] flex-col items-center justify-center gap-8">
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Sign up to start your journey
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1">
                <span className="text-body font-body text-subtext-color">
                  By signing up you agree to the
                </span>
                <LinkButton variant="brand" size="medium" icon={null}>
                  Terms of Service
                </LinkButton>
                <span className="text-body font-body text-subtext-color">
                  and
                </span>
                <LinkButton variant="brand" size="medium" icon={null}>
                  Privacy Policy
                </LinkButton>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-2">
              <OAuthSocialButton
                className="h-10 w-full flex-none"
                logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
              >
                Sign in with Google
              </OAuthSocialButton>
              <OAuthSocialButton
                className="h-10 w-full flex-none"
                logo="https://res.cloudinary.com/subframe/image/upload/v1711417564/shared/zhcrzoah8kty6cup8zud.png"
              >
                Sign in with Slack
              </OAuthSocialButton>
              <OAuthSocialButton
                className="h-10 w-full flex-none"
                logo="https://res.cloudinary.com/subframe/image/upload/v1711417561/shared/kplo8lv2zjit3brqmadv.png"
              >
                Sign in with Apple
              </OAuthSocialButton>
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="flex h-px w-full grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
              <span className="text-body font-body text-subtext-color">
                or continue with email
              </span>
              <div className="flex h-px w-full grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <MyTextField field="Email" />
              <Link
                className="h-10 items-center flex justify-center rounded-xl w-full flex-none bg-[#DB4A2B] hover:bg-black hover:border-[#DB4A2B] border-[#DB4A2B] active:bg-black "
                href="/dashboard"
              >
                Continue
              </Link>
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <span className="text-body font-body text-subtext-color">
                Already have an account?
              </span>
              <LinkButton variant="brand" icon={null}>
                Sign In
              </LinkButton>
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
