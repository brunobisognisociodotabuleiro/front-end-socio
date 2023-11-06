'use client'
import React from "react"
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { useScroll } from "@/hooks/useScroll";

export default function Header() {
  const isScrolled = useScroll();
  return (
    <header className="fixed top-10 z-50 flex w-full 
      items-center justify-between px-4 py-4 lg:px-10 lg:py-16 transition-all">
        <div className="flex items-center space-x-2 md:space-x-8">
          <Logo/>
          <NavLinks/>
       </div>
        <UserProfile/>
    </header>
  );
};