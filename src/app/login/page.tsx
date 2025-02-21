"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackButton from "@/components/backButton";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter(); // Use Next.js router for navigation

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Logging in with:", { email, password });
	};

	return (
		<div id="login" className="flex items-center justify-center min-h-screen bg-gray-100 relative">
			{/* Beating Back Button */}
			<motion.button
				initial={{ scale: 1 }}
				animate={{
					scale: [1, 1.2, 1],
					transition: { repeat: Infinity, duration: 1.2 },
				}}
				onClick={() => router.push("/")}
				className="absolute top-6 left-6 bg-[#2CAA83] text-white px-6 py-6 rounded-full shadow-md hover:bg-green-800 transition duration-300"
			>
				<BackButton route="./" />
			</motion.button>

			{/* Login Form */}
			<div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
					Login
				</h2>
				<form onSubmit={handleLogin} className="space-y-4">
					{/* Email Field */}
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					{/* Password Field */}
					<div>
						<label className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					{/* Login Button */}
					<button
						type="submit"
						className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-lg transition duration-300"
					>
						Login
					</button>
				</form>

				{/* Forgot Password */}
				<div className="text-center mt-4">
					<a href="#" className="text-sm text-green-700 hover:underline">
						Forgot Password?
					</a>
				</div>
			</div>
		</div>
	);
}
