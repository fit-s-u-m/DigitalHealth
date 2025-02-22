"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import BackButton from "@/components/backButton"; // Your existing BackButton component

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter(); // Next.js router for navigation

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Logging in with:", { email, password });
		router.push("/patients");
	};

	return (
		<div className="flex min-h-screen w-full items-center justify-center relative">
			{/* Left Side - Background Image with Smooth Fade Effect */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="hidden md:block w-1/3 relative"
			>
				<motion.img
					src="/assets/logindoc.jpg" // Replace with your actual image
					alt="Login Background"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2 }}
					className="w-[600] h-[500px] object-cover rounded-l-xl"
				/>

				{/* Gradient Overlay for Smooth Transition */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-transparent to-transparent"
				/>
			</motion.div>

			{/* Right Side - Compact Login Form */}
			<div className="flex justify-center items-center w-full max-w-lg p-6">
				<Card className="w-full max-w-md p-8 shadow-xl border border-gray-200 mr-10">
					<CardHeader>
						<CardTitle className="text-2xl text-center text-gray-800">
							Login
						</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleLogin} className="space-y-6">
							{/* Email Field */}
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Email
								</label>
								<Input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="mt-1"
								/>
							</div>

							{/* Password Field */}
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Password
								</label>
								<Input
									type="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="mt-1"
								/>
							</div>

							{/* Remember Me & Forgot Password */}
							<div className="flex justify-between items-center text-sm">
								<label className="flex items-center gap-2">
									<input type="checkbox" className="rounded-md" />
									Remember me
								</label>
								<a href="#" className="text-green-700 hover:underline">
									Forgot password?
								</a>
							</div>

							{/* Login Button */}
							<Button
								type="submit"
								className="w-full bg-[#2CAA83] hover:bg-green-700 text-white py-2"
							>
								Login
							</Button>
						</form>

						{/* Register Link */}
						{/* <div className="text-center mt-4">
							<p className="text-sm">
								Don’t have an account?{" "}
								<a href="#" className="text-green-700 hover:underline">
									Register Now
								</a>
							</p>
						</div> */}
					</CardContent>
				</Card>
			</div>

			{/* Your Custom Back Button Component */}
			<div className="absolute top-6 left-6">
				<BackButton destinationRoute="/" />
			</div>
		</div>
	);
}
