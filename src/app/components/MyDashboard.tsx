"use client";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import VoxyLogo from "../../../public/V-removebg-preview.png";
import Image from "next/image";
import ChatComponent from "./ChatComponent";
import Dashboard from "./Dashboard/Dashboard";
import SessionComponent from "./Session/SessionComponent";
import { SessionType } from "../../types/index";

let mockData: SessionType[] = [
  {
    id: "1",
    grade: "90",
    description: "Session 1",
    createdAt: "2021-09-10T10:00:00.000Z",
    updatedAt: "2021-09-10T10:00:00.000Z",
  },
  {
    id: "2",
    grade: "80",
    description: "Session 2",
    createdAt: "2021-09-10T10:00:00.000Z",
    updatedAt: "2021-09-10T10:00:00.000Z",
  },
  {
    id: "3",
    grade: "70",
    description: "Session 3",
    createdAt: "2021-09-10T10:00:00.000Z",
    updatedAt: "2021-09-10T10:00:00.000Z",
  },
];

export function MyDashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [activeSession, setActiveSession] = useState<SessionType[] | undefined>(
    []
  );
  const [activeSessionId, setActiveSessionId] = useState<string>("");

  const handleSetActiveSession = (id: string) => {
    const session = mockData.find(
      (session) => session.id === id
    ) as SessionType;
    setActiveSession([session]);
    setActiveSessionId(id);
    setActiveComponent("session");
  };

  const renderActiveComponent = () => {
    if (activeComponent === "dashboard") {
      return (
        <Dashboard
          handleActiveSession={handleSetActiveSession}
          data={mockData}
        />
      );
    } else if (activeComponent === "chat") {
      return <ChatComponent />;
    } else if (activeComponent === "session") {
      return <SessionComponent />;
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col  sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <div className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
            <Image src={VoxyLogo} alt="Voxy Logo" />
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-white" asChild>
                <Link
                  href=""
                  onClick={() => setActiveComponent("dashboard")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-[#2f4435] md:h-8 md:w-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#51ba69"
                      fillRule="evenodd"
                      d="M12.5 12.618c.307-.275.5-.674.5-1.118V6.977a1.5 1.5 0 0 0-.585-1.189l-3.5-2.692a1.5 1.5 0 0 0-1.83 0l-3.5 2.692A1.5 1.5 0 0 0 3 6.978V11.5A1.496 1.496 0 0 0 4.493 13H5V9.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V13h.507c.381-.002.73-.146.993-.382m2-1.118a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V6.977A3 3 0 0 1 2.67 4.6l3.5-2.692a3 3 0 0 1 3.66 0l3.5 2.692a3 3 0 0 1 1.17 2.378zm-5-2A.5.5 0 0 0 9 9H7a.5.5 0 0 0-.5.5V13h3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="text-white" asChild>
                <Link
                  href=""
                  onClick={() => setActiveComponent("chat")}
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-[#3a304e]  text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#8e55ea"
                      fillRule="evenodd"
                      d="M9.5 7V3.5a1.5 1.5 0 1 0-3 0V7a1.5 1.5 0 1 0 3 0M8 .5a3 3 0 0 0-3 3V7a3 3 0 0 0 6 0V3.5a3 3 0 0 0-3-3m.75 12.454A6 6 0 0 0 14 7v-.25a.75.75 0 0 0-1.5 0V7a4.5 4.5 0 1 1-9 0v-.25a.75.75 0 0 0-1.5 0V7c0 3.06 2.29 5.585 5.25 5.954v1.796a.75.75 0 0 0 1.5 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Chat Session</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Chat Session</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-white" asChild>
                <Link
                  href=""
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-[#4b3929]"
                >
                  <Settings className="h-5 w-5 text-[#e68a1e]" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Image
                    src="/placeholder-user.jpg"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="grid bg-[#242627] rounded-3xl flex-1 items-start gap-4 p-8 sm:px-6 sm:p-12 md:gap-8 lg:grid-cols-2 xl:grid-cols-1">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            {renderActiveComponent()}
          </div>
        </main>
      </div>
    </div>
  );
}
