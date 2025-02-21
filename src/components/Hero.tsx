"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

export default function Hero() {
	return (
		<motion.section
			id="hero"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="relative bg-white min-h-[90vh] flex items-center justify-center px-10"
		>
			<Container className="flex flex-col md:flex-row items-center justify-between">
				{/* Left Content - Text shifted slightly to the right */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
					className="max-w-2xl text-left"
				>
					<p className="text-sm uppercase font-semibold text-gray-500">
						Medical And Health
					</p>
					<h1 className="text-6xl font-bold text-black leading-tight mt-2">
						A professional and friendly care provider.
					</h1>
					<p className="text-gray-600 mt-4 text-lg">
						Excepteur sint occaecat cupidatat non proident sunt officia.
					</p>
					<Button variant="default" className="mt-6 bg-[#2CAA83] hover:bg-[#239971]">
						More 
					</Button>
				</motion.div>

				{/* Decorative Green Circle with Beating Effect */}
				<motion.div
					initial={{ scale: 1 }}
					animate={{ scale: [1, 1.1, 1] }} // Pulsating effect
					transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
					className="relative"
				>
					{/* Overlapping Image - Moves with the Circle */}
					<Image
						src="/assets/doc1.png" // Change this to your actual image
						alt="Doctor"
						width={300}
						height={300}
						className="relative z-10 object-cover drop-shadow-lg"
					/>
					{/* Green Circle Background */}
					<motion.div
						className="absolute top-[50%] left-[90%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#2CAA83] rounded-full"
					/>
				</motion.div>
			</Container>
		</motion.section>
	);
}
