"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer id="contact" className="bg-[#2caa83] text-white py-30">
			<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-center md:text-left">
				{/* Brand Section */}
				<div>
					<div className="flex items-center justify-center md:justify-start space-x-2">
						<Image
							src="/logo.png" // Replace with actual logo path
							alt="Logo"
							width={40}
							height={40}
						/>
						<h3 className="text-lg font-bold">Name</h3>
					</div>
					<p className="text-sm mt-3">
						Learn how our digital health platform enhances accessibility
						and improves patient care.
					</p>
					<div className="flex justify-center md:justify-start space-x-4 mt-4">
						<span className="cursor-pointer bg-blue-500 w-6 h-6 flex items-center justify-center rounded-full text-white">
							F
						</span>
						<span className="cursor-pointer bg-purple-500 w-6 h-6 flex items-center justify-center rounded-full text-white">
							I
						</span>
						<span className="cursor-pointer bg-red-500 w-6 h-6 flex items-center justify-center rounded-full text-white">
							Y
						</span>
					</div>
				</div>

				{/* Departments */}
				<div>
					<h4 className="font-semibold text-lg">Departments</h4>
					<ul className="text-sm mt-3 space-y-2">
						<li>Family Medicine</li>
						<li>Women&apos;s Health</li>
						<li>Optician</li>
						<li>Pediatrics</li>
						<li>Dermatology</li>
					</ul>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="font-semibold text-lg">Quick Links</h4>
					<ul className="text-sm mt-3 space-y-2">
						<li>Our Doctors</li>
						<li>Appointment</li>
						<li>Blog Post</li>
						<li>Shop Product</li>
						<li>Contact Us</li>
					</ul>
				</div>

				{/* Blog Post */}
				<div>
					<h4 className="font-semibold text-lg">Blog Post</h4>
					<ul className="text-sm mt-3 space-y-3">
						<li>
							<p className="text-xs text-gray-300">22.05.2019</p>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in
								culpa.
							</p>
						</li>
						<li>
							<p className="text-xs text-gray-300">22.05.2019</p>
							<p>
								Excepteur sint occaecat cupidatat non proident, sunt in
								culpa.
							</p>
						</li>
					</ul>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="text-center text-sm mt-12 border-t border-white pt-4">
				&copy; 2025 Digital Health Platform. All Rights Reserved.
			</div>
		</footer>
	);
}
