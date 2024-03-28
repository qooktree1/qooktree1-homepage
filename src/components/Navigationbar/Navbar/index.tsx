"use client";

import ThemeSwitch from "@/components/Navigationbar/ThemeSwitch";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <header className="h-[56px] bg-main-100 dark:bg-main-black w-full flex justify-between items-center fixed top-0 backdrop-blur-sm dark:backdrop-blur-sm">
      {/* Logo Section */}
      <Link href="/">Logo</Link>

      {/* Navbar Section */}

      <div>
        <Link href="/">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/career">Career</Link>
      </div>

      <span>
        <button>
          <ThemeSwitch />
        </button>
      </span>
    </header>
  );
}
