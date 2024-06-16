import React from "react";
import HomeIcon from "./HomeIcon";
import ChatSessionIcon from "./ChatSessionIcon";
import { Settings } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Chat Session",
    href: "/dashboard/chat",
    icon: ChatSessionIcon,
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Tooltip>
            <TooltipTrigger className="text-white" asChild>
              <Link
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-[#2f4435] md:h-8 md:w-8"
              >
                <LinkIcon />
                <span className="sr-only">{link.name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.name}</TooltipContent>
          </Tooltip>
        );
      })}
    </>
  );
}
