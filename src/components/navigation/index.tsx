"use client";

import Navbar from "@/components/navigation/navbar";
import Sidebar from "@/components/navigation/sidebar";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;
