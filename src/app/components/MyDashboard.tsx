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
