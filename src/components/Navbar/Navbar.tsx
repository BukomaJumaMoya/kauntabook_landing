"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setIsScrolled(true);
      } else {
        setColor("#033A2D");
        setTextColor("#ffffff");
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-20 ease-in duration-300 ${
        isScrolled && "shadow-lg"
      }`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            style={{ color: `${textColor}` }}
            className="font-bold text-4xl "
            height={120}
            width={120}
            src="/images/logo/kb-logo.svg"
            alt="kb logo"
          />
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex  justify-end space-x-4"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <button
          type="button"
          // style={{ color: `${textColor}` }}
          className={`hidden sm:flex ${!isScrolled && "border"} ${
            isScrolled && "bg-green-90"
          } ${isScrolled && "text-white"} rounded-md px-7 py-3 uppercase`}
        >
          Get now
        </button>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {open ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
