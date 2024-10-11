"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiX, HiOutlineMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { menu } from "@/data/menu";

const Navbar = () => {
  const currentPage = usePathname();
  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto px-4 xl:px-0 py-4 flex justify-between items-center">
      {/* Logo and Name */}
      <div className="flex items-center gap-2">
        <Image width={50} height={50} src="/logo.png" alt="logo" priority />
        <span className="text-white text-lg font-semibold">Faizan Anjum</span>
      </div>

      {/* Mobile menu toggle */}
      <HiOutlineMenuAlt3
        size={30}
        className="cursor-pointer lg:hidden"
        onClick={() => setShow((prev) => !prev)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed lg:hidden bg-gray-800 top-0 right-0 w-full h-screen transition-transform duration-300 ${
          show ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center`}
      >
        <HiX
          size={30}
          className="text-white absolute top-7 right-7 cursor-pointer"
          onClick={() => setShow(false)}
        />
        {menu.map((items, i) => (
          <Link
            key={i}
            href={items.url}
            className={`text-gray-200 hover:text-white text-2xl my-4 ${currentPage === items.url ? "active" : ""}`}
          >
            {items.label}
          </Link>
        ))}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10 top_nav">
        {menu.map((items, i) => (
          <Link
            key={i}
            href={items.url}
            className={`text-white ${currentPage === items.url ? "active" : ""}`}
          >
            {items.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
