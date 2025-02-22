"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NavBar() {
	return (
		<nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center fixed w-full top-0 left-0 z-50">
			{/* Left Section - Logo & Name */}
			<div className="flex items-center gap-3">
				<Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
				<span className="text-2xl font-bold tracking-wide text-[#2CAA83]">
					Digital Flow 
				</span>
			</div>

			{/* Center Section - Navigation Links */}
			<div className="hidden md:flex space-x-12">
				<Link
					href="/#hero"
					className={cn(
						"text-lg font-semibold text-gray-900 hover:text-[#2CAA83] transition"
					)}
				>
					Home
				</Link>
				<Link
					href="/#features"
					className={cn(
						"text-lg font-semibold text-gray-900 hover:text-[#2CAA83] transition"
					)}
				>
					Features
				</Link>
				<Link
					href="/#contact"
					className={cn(
						"text-lg font-semibold text-gray-900 hover:text-[#2CAA83] transition"
					)}
				>
					Contact
				</Link>
			</div>

			{/* Right Section - Login Button */}
			<div>
				<Link href="/login">
					<Button className="bg-[#2CAA83] hover:bg-[#239971] text-white mr-10 px-10 py-6 rounded-sm">
						Login
					</Button>
				</Link>
			</div>
		</nav>
	);
}
