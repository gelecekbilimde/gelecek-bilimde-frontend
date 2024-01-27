"use client";

import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const links = [
  {
    id: 1,
    name: "Ana Sayfa",
    path: "/",
  },
  {
    id: 2,
    name: "Yazılar",
    path: "/posts",
  },
  {
    id: 3,
    name: "Video İçerikler",
    path: "/videos",
  },
  {
    id: 4,
    name: "Podcastler",
    path: "/podcasts",
  },
];

export default function Header(): JSX.Element {
  return (
    <header className="flex h-20 w-full items-center justify-between">
      <Image src="/images/logo.png" alt="logo" width={200} height={42} />
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link href={link.path} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "!text-black data-[active]:border-b-2 border-primary hover:border-b-2 !rounded-none",
                    )}>
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="flex gap-x-5">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
          <SearchIcon className="h-4 w-4 text-slate-600" />
        </button>
        <div className="flex items-center justify-center gap-x-2">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src="/images/avatar.png" alt="@user" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="pt-0.5 font-bold leading-4">Ad Soyad</span>
            <span className="text-xs text-slate-400">@uid4679512441</span>
          </div>
        </div>
      </div>
    </header>
  );
}
