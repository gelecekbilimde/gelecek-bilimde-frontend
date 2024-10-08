"use client";

import "react-modern-drawer/dist/index.css";

import { useKmenu } from "kmenu";
import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";

import CategorySelectDrawer from "../drawers/category-select-drawer";
import { Navigations, NavigationsVariant } from "./navigations";
import ProfileDropdown from "./profile-dropdown";

export default function Header(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="flex h-20 w-full items-center justify-between">
        <CategorySelectDrawer />
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={200} height={42} />
        </Link>

        <nav className="hidden md:block">
          <Navigations variant={NavigationsVariant.Desktop} />
        </nav>

        <div className="hidden flex-row-reverse gap-x-5 md:flex md:flex-row">
          <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
            <SearchIcon className="size-4 text-slate-600" />
          </button>
          <ProfileDropdown />
        </div>
        <div className="flex md:hidden">
          <button className="mr-1 flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
            <SearchIcon className="size-4 text-slate-600" />
          </button>
          <button
            onClick={toggleDrawer}
            className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
            <MenuIcon className="size-4 text-slate-600" />
          </button>
        </div>
      </header>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="p-4">
        <div className="flex flex-col justify-between space-y-4">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={200} height={42} />
          </Link>
          <Navigations variant={NavigationsVariant.Mobile} />
          <div className="absolute bottom-3 left-0 flex w-full justify-center border-t border-slate-200 pt-3">
            <ProfileDropdown />
          </div>
        </div>
      </Drawer>
    </>
  );
}
