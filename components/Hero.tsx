"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<motion.section
			id="hero"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="relative bg-white min-h-[100vh] flex items-center px-10 md:px-20"
		>
			{/* Left Content */}
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3 }}
				className="max-w-lg ml-[10%]"
			>
				<p className="text-lg uppercase font-semibold text-gray-500">
					Empowering Healthcare
				</p>
				<h1 className="text-5xl font-bold text-black leading-tight mt-2">
					<span className="text-[#2CAA83]">AI-Driven</span> Medical
					Solutions
				</h1>
				<p className="text-gray-600 mt-4 text-lg">
					Streamline patient care with automated record management,
					seamless patient registration, and real-time healthcare
					analytics. Our AI-powered platform enhances efficiency, reduces
					paperwork, and provides valuable insights to healthcare
					providers.
				</p>

				<Button className="mt-6 px-6 py-3 bg-[#2CAA83] text-white text-lg rounded-lg hover:bg-green-800 transition">
					Get Started
				</Button>
			</motion.div>

			{/* Right Content - Doctor Image with Green Circle */}
			<motion.div
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.1, 1] }}
				transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
				className="relative w-[50%] flex justify-center ml-[5%]"
			>
				{/* Floating Green Circle */}
				<motion.div className="absolute top-[10%] right-10 w-[350px] h-[350px] md:w-[420px] md:h-[420px] bg-[#2CAA83] rounded-full -z-10" />

				{/* Doctor Image */}
				<Image
					src="/assets/doc.png" // Change this to your actual image
					alt="Doctor"
					width={350}
					height={400}
					className="relative z-10 object-cover drop-shadow-lg"
				/>

				{/* Floating Info Cards */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="absolute top-10 left-[-40px] bg-white shadow-lg p-4 rounded-lg flex items-center gap-2"
				>
					<Image
						src="/assets/doctor.png"
						alt="icon"
						width={24}
						height={24}
					/>
					<p className="text-sm font-semibold text-gray-800">
						patient Information all in one in one place
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					className="absolute bottom-10 right-[-30px] bg-white shadow-lg p-4 rounded-lg flex items-center gap-2"
				>
					<Image
						src="/assets/team.png"
						alt="icon"
						width={24}
						height={24}
					/>
					<p className="text-sm font-semibold text-gray-800">
						Digitize Using AI
					</p>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
