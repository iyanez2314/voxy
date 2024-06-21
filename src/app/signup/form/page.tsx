"use client";
import React, { useState } from "react";
import Step from "./components/Step";
import { Avatar, LinkButton, OAuthSocialButton } from "@/src/subframe";
import Link from "next/link";
import MyTextField from "../../components/MyTextField";

export default function Page() {
  let [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-default-background">
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-wrap items-start mobile:flex-col mobile:flex-wrap mobile:gap-0">
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 pt-12 pr-12 pb-12 pl-12">
          <div className="flex w-full max-w-[448px] flex-col items-center justify-center gap-8">
            {/* Add here */}
            <div className="mx-auto w-full max-w-md rounded-lg bg-white shadow-xl">
              <div className="flex justify-between rounded p-8">
                <Step step={1} currentStep={step} />
                <Step step={2} currentStep={step} />
                <Step step={3} currentStep={step} />
                <Step step={4} currentStep={step} />
              </div>

              {/* Dynamic content based on `step` */}
              <div className="space-y-2 px-8">
                {step === 1 && (
                  <>
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
                        Sign up with Google
                      </OAuthSocialButton>
                      <OAuthSocialButton
                        className="h-10 w-full flex-none"
                        logo="https://res.cloudinary.com/subframe/image/upload/v1711417564/shared/zhcrzoah8kty6cup8zud.png"
                      >
                        Sign up with Slack
                      </OAuthSocialButton>
                      <OAuthSocialButton
                        className="h-10 w-full flex-none"
                        logo="https://res.cloudinary.com/subframe/image/upload/v1711417561/shared/kplo8lv2zjit3brqmadv.png"
                      >
                        Sign up with Apple
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
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-body font-body text-subtext-color">
                          Already have an account?
                        </span>
                        <Link href="/signup">Sign In</Link>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <div className="flex w-full flex-col items-start justify-center gap-6">
                    <div className="w-full items-center flex justify-center">
                      <form className="flex items-center justify-center w-fit h-fit">
                        <label
                          htmlFor="file"
                          className="cursor-pointer bg-transparent p-8 rounded-full border-2 border-dashed border-gray-700"
                        >
                          <div className="flex flex-col items-center justify-center gap-1.5">
                            <svg
                              viewBox="0 0 640 512"
                              className="h-12 fill-[#DB4A2B] mb-5"
                            >
                              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                            </svg>
                            <p>Drag and Drop</p>
                            <p>or</p>
                          </div>
                          <input id="file" type="file" className="hidden" />
                        </label>
                      </form>
                    </div>

                    <MyTextField field="Email" />
                    <MyTextField field="Password" />
                    <MyTextField field="Confirm Password" />
                  </div>
                )}

                {step === 3 && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:items-center md:gap-8">
                    <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
                      <div className="text-center">
                        <h2 className="text-lg font-medium text-black">
                          Pro
                          <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                          <strong className="text-3xl font-bold text-black sm:text-4xl">
                            {" "}
                            15${" "}
                          </strong>

                          <span className="text-sm font-medium text-black">
                            /month
                          </span>
                        </p>
                      </div>

                      <ul className="mt-6 space-y-2 text-black">
                        <li className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          <span className="text-black">
                            {" "}
                            <span className="font-bold">UNLIMITED</span>{" "}
                            sessions{" "}
                          </span>
                        </li>

                        <li className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          <span className="text-black"> Session Feedback </span>
                        </li>

                        <li className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          <span className="text-black">
                            {" "}
                            Session Transcription{" "}
                          </span>
                        </li>

                        {/* <li className="flex items-center gap-1">
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-5 text-indigo-700"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M4.5 12.75l6 6 9-13.5"
                             />
                           </svg>
         
                           <span className="text-white"> Help center access </span>
                         </li>
         
                         <li className="flex items-center gap-1">
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-5 text-indigo-700"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M4.5 12.75l6 6 9-13.5"
                             />
                           </svg>
         
                           <span className="text-white"> Phone support </span>
                         </li>
         
                         <li className="flex items-center gap-1">
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-5 text-indigo-700"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M4.5 12.75l6 6 9-13.5"
                             />
                           </svg>
         
                           <span className="text-white"> Community access </span>
                         </li> */}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                      <div className="text-center">
                        <h2 className="text-lg font-medium text-black">
                          Starter
                          <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                          <strong className="text-3xl font-bold text-black sm:text-4xl">
                            {" "}
                            Free{" "}
                          </strong>
                        </p>
                      </div>

                      <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          <span className="text-black">
                            {" "}
                            10 Sessions a month{" "}
                          </span>
                        </li>
                        {/* 
                         <li className="flex items-center gap-1">
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-5 text-indigo-700"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M4.5 12.75l6 6 9-13.5"
                             />
                           </svg>
         
                           <span className="text-white"> 2GB of storage </span>
                         </li>
         
                         <li className="flex items-center gap-1">
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-5 text-indigo-700"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M4.5 12.75l6 6 9-13.5"
                             />
                           </svg>
         
                           <span className="text-white"> Email support </span>
                         </li>
         
                         <li className="flex items-center gap-1">
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-5 text-indigo-700"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M4.5 12.75l6 6 9-13.5"
                             />
                           </svg>
         
                           <span className="text-white"> Help center access </span>
                         </li> */}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-8 pb-8">
                <div className="mt-10 flex justify-between">
                  <button
                    onClick={() => setStep(step < 2 ? step : step - 1)}
                    className={`${
                      step === 1 ? "pointer-events-none opacity-50" : ""
                    } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(step > 4 ? step : step + 1)}
                    className={`${
                      step > 4 ? "pointer-events-none opacity-50" : ""
                    } bg duration-350 flex items-center justify-center rounded-full bg-[#DB4A2B] py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:opacity-75 active:bg-transparent active:border-[#DB4A2B] active:text-black `}
                  >
                    Continue
                  </button>
                </div>
              </div>
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
