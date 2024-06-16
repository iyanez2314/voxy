"use client";
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
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Chat Session",
    href: "/dashboard/chat",
    icon: ChatSessionIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Tooltip>
            <TooltipTrigger className="text-white" asChild>
              <Link
                href={link.href}
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  {
                    "bg-[#242627]": pathname === link.href,
                  }
                )}
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
