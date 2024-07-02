"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGlobalUserContext } from "../../context/GlobaUserContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Page() {
  const { dbUser } = useGlobalUserContext();
  const usersSessionCount = dbUser?.session_count;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleModalOpen = () => {
    console.log("Opening chat modal");
    if (usersSessionCount === 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[68dvh] dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <div className="text-center space-y-4">
          <MicIcon className="mx-auto h-12 w-12 text-gray-500 dark:text-gray-400" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Speak to your AI Assistant
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Get instant answers, schedule appointments, and more with our
            voice-powered AI assistant.
          </p>
          <Button
            onClick={handleModalOpen}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
          >
            <PhoneIcon className="mr-2 h-4 w-4" />
            Start Call
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute top-0 z-10 flex items-center justify-center w-full min-h-[68dvh] bg-transparent rounded-xl">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Configure Your AI</h2>
            <p className="mb-3 text-slate-500">
              Answer a few questions to get started with your AI assistant.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium"
                >
                  How Many Years of Sales Experience{" "}
                  <span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="bg-slate-300 w-4 h-4  rounded-full">
                          i
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            If you have months of experience, enter the number
                            of months.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </label>
                <Input id="name" placeholder="2" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium"
                >
                  How do you want this AI to act? (Friendly, Professional, etc.)
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    >
                      Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showActivityBar}
                      onCheckedChange={setShowActivityBar}
                      disabled
                    >
                      Activity Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      Panel
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium"
                >
                  Tell us a bit about yourself
                </label>
                <Textarea
                  id="message"
                  rows={3}
                  placeholder="Enter your message"
                />
              </div>
              <Button type="submit" className="w-full text-white">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function MicIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
