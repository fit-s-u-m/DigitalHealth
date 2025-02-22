"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Send } from "lucide-react"; // Importing icons from Lucide

export default function Footer() {
	return (
		<footer id="contact" className="bg-[#2CAA83] text-white py-16">
			<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 px-6 text-center md:text-left">
				{/* Brand Section */}
				<Card className="bg-transparent shadow-none">
					<CardContent className="space-y-4">
						<div className="flex items-center justify-center md:justify-start space-x-2">
							<Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
							<h3 className="text-lg font-bold">Digital Health</h3>
						</div>
						<p className="text-sm">
							Enhancing healthcare accessibility & improving patient
							care.
						</p>
						<div className="flex justify-center md:justify-start space-x-3 mt-2">
							<Button
								size="icon"
								className="bg-blue-600 hover:bg-blue-700 text-white"
							>
								<Facebook className="w-5 h-5" />
							</Button>
							<Button
								size="icon"
								className="bg-blue-400 hover:bg-blue-500 text-white"
							>
								<Send className="w-5 h-5" /> {/* Telegram Icon */}
							</Button>
							<Button
								size="icon"
								className="bg-sky-500 hover:bg-sky-600 text-white"
							>
								<Twitter className="w-5 h-5" />
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Departments */}
				<Card className="bg-transparent shadow-none">
					<CardContent className="space-y-3">
						<h4 className="font-semibold text-lg">Departments</h4>
						<ul className="text-sm space-y-2">
							<li>Family Medicine</li>
							<li>Women&apos;s Health</li>
							<li>Optician</li>
							<li>Pediatrics</li>
							<li>Dermatology</li>
						</ul>
					</CardContent>
				</Card>

				{/* Quick Links */}
				<Card className="bg-transparent shadow-none">
					<CardContent className="space-y-3">
						<h4 className="font-semibold text-lg">Quick Links</h4>
						<ul className="text-sm space-y-2">
							<li>Our Doctors</li>
							<li>Appointment</li>
							<li>Blog Post</li>
							<li>Shop Product</li>
							<li>Contact Us</li>
						</ul>
					</CardContent>
				</Card>

				{/* Blog Posts */}
				<Card className="bg-transparent shadow-none">
					<CardContent className="space-y-3">
						<h4 className="font-semibold text-lg">Blog Post</h4>
						<ul className="text-sm space-y-3">
							<li>
								<p className="text-xs text-gray-300">22.05.2019</p>
								<p>Excepteur sint occaecat cupidatat non proident.</p>
							</li>
							<li>
								<p className="text-xs text-gray-300">22.05.2019</p>
								<p>Excepteur sint occaecat cupidatat non proident.</p>
							</li>
						</ul>
					</CardContent>
				</Card>
			</div>

			{/* Footer Bottom */}
			<Separator className="mt-12 mx-auto max-w-5xl bg-white/50" />
			<div className="text-center text-sm mt-6 text-gray-200">
				&copy; 2025 Digital Health Platform. All Rights Reserved.
			</div>
		</footer>
	);
}
