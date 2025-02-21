"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
	return (
		<motion.section
			id="features"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
			className="bg-gray-100 py-28 min-h-[100vh] flex items-center"
		>
			<div className="max-w-6xl mx-auto text-center px-6">
				{/* Section Heading */}
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="text-3xl font-bold text-[#2CAA83]"
				>
					Our Features
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
					className="text-gray-600 mt-3 max-w-2xl mx-auto"
				>
					Revolutionizing healthcare administration with AI-powered automation.
				</motion.p>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-30 mt-20">
					{[1, 2, 3].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-white p-20 rounded-xl shadow-lg text-center transition-all hover:shadow-2xl duration-300"
						>
							<h3 className="mt-10  font-semibold text-xl text-[#2CAA83]">
								Feature {item}
							</h3>
							<p className="text-gray-600 mt-4">
								AI-driven technology improves efficiency and reduces errors.
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
