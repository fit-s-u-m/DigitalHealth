"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation"; // Import Next.js Router
import { Button } from "@/components/ui/button";
export default function Features() {
	const router = useRouter(); // Initialize Router for navigation

	// Feature data including titles, descriptions, and links
	const features = [
		{
			title: "AI-Powered Patient Record Digitalization",
			description:
				"Transform handwritten and printed patient records into structured digital formats automatically.",
			link: "/digitalize", // Route for Digitalization Feature
			buttonlabel:"Digitalize"
		},
		{
			title: "Register Patients Manually",
			description:
				"Register patients with manual input for cases where automation is not possible.",
			link: "/patients/registor", // Route for Manual Registration
			buttonlabel:"Register Patient"
		},
		{
			title: "Healthcare Analytics & Reporting",
			description:
				"Utilize AI-driven data analytics for government and organizations to make informed healthcare decisions.",
			link: "/dashboard", // Route for Analytics
			buttonlabel:"View"
		},
	];

	return (
		<motion.section
			id="features"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
			className="relative py-28 min-h-[100vh] flex items-center bg-gray-50"
		>
			{/* Background Patterns */}
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 0.2 }}
				transition={{ duration: 1 }}
				className="absolute -left-20 top-0 w-[250px] md:w-[400px] rotate-[-20deg]"
			>
				<img src="/assets/pattern.svg" alt="Pattern" className="w-full" />
			</motion.div>

			<motion.div
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 0.2 }}
				transition={{ duration: 1 }}
				className="absolute -right-20 bottom-0 w-[250px] md:w-[400px] rotate-[20deg]"
			>
				<img src="/assets/pattern.svg" alt="Pattern" className="w-full" />
			</motion.div>

			<div className="max-w-6xl mx-auto text-center px-6 relative z-10">
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
					Revolutionizing healthcare administration with AI-powered
					automation.
				</motion.p>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-14 mt-16">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
						>
							{/* Clickable Card */}
							<Card
								onClick={() => router.push(feature.link)} // Navigate on click
								className="p-10 min-h-[320px] flex flex-col justify-between rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer hover:bg-gray-100"
							>
								<CardHeader>
									<CardTitle className="text-xl text-[#2CAA83] font-semibold">
										{feature.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">
										{feature.description}
									</p>
									<Button className="mt-6 px-6 py-3 bg-[#2CAA83] text-white text-lg rounded-lg hover:bg-green-800 transition">
									{feature.buttonlabel}
				</Button>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
