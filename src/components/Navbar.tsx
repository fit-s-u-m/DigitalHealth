"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      {/* Left Section - Logo & Name */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">❤️ Name</span>
      </div>

      {/* Center Section - Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-700 hover:text-black transition">
          Home
        </Link>
        <Link href="/features" className="text-gray-700 hover:text-black transition">
          Features
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-black transition">
          Contact
        </Link>
      </div>

      {/* Right Section - Login Button */}
      <Link
        href="#"
        className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
      >
        Login
      </Link>
    </nav>
  );
}
