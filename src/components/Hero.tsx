"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<motion.section
			id="hero"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="relative bg-white min-h-[90vh] flex items-center justify-center px-10"
		>
			{/* Left Content - Text shifted slightly to the right */}
			<div className="max-w-2xl text-left mr-200"> {/* Increased margin-left */}
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="text-sm uppercase font-semibold text-gray-500"
				>
					Medical And Health
				</motion.h2>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="text-6xl font-bold text-black leading-tight mt-2"
				>
					A professional and friendly care provider.
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					className="text-gray-600 mt-4 text-lg"
				>
					Excepteur sint occaecat cupidatat non proident sunt officia.
				</motion.p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="mt-6 px-6 py-3 bg-[#2CAA83] text-white rounded-full hover:bg-green-600 transition flex items-center gap-2"
				>
					More <span>→</span>
				</motion.button>
			</div>

			{/* Decorative Background Pattern */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ duration: 1.5 }}
				className="absolute top-0 left-0 w-full h-full -z-10"
			>
				<Image src="/background-pattern.png" alt="Background Design" layout="fill" objectFit="cover" />
			</motion.div>

			{/* Decorative Green Circle with Beating Effect - Moved Down & Left */}
			<motion.div
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.1, 1] }} // Pulsating effect
				transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
				className="absolute top-[40%] left-[65%] w-[420px] h-[420px] bg-[#2CAA83] rounded-full flex items-center justify-center"
			>
				{/* Overlapping Image - Moved with the Circle */}
				<Image 
					src="/doctor.png" // Change this to your actual image
					alt="Doctor"
					width={250}
					height={250}
					className="relative z-10 object-cover"
				/>
			</motion.div>
		</motion.section>
	);
}
