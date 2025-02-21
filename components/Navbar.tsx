"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center fixed w-full top-0 left-0 z-50">
      {/* Left Section - Logo & Name */}
      <div className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="Logo" width={30} height={30} className="w-8 h-8" />
        <span className="text-xl font-bold">Name</span>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/#hero" className="text-gray-700 hover:text-black transition">
          Home
        </Link>
        <Link href="/#features" className="text-gray-700 hover:text-black transition">
          Features
        </Link>
        <Link href="/#contact" className="text-gray-700 hover:text-black transition">
          Contact
        </Link>
      </div>

      {/* Right Section - Login Button (Navigates to Login Page) */}
      <Link href="/login">
        <button className="bg-[#2CAA83] text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          Login
        </button>
      </Link>
    </nav>
  );
}
