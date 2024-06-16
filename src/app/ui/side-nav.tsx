import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
import VoxyLogo from "../../../public/V-removebg-preview.png";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col  sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <div className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
          <Image src={VoxyLogo} alt="Voxy Logo" />
        </div>
        <TooltipProvider>
          <NavLinks />
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
  );
}
