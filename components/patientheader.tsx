"use client";

import { useRouter } from "next/navigation";
import { Search, UserPlus, LogOut } from "lucide-react"; // Importing Lucide Icons
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PatientHeader() {
	const router = useRouter();

	function handleAddPatient() {
		router.push("/patients/registor");
	}

	function handleLogout() {
		// ✅ Redirect to home page after logout
		router.push("/");
	}

	return (
		<div className="bg-white shadow-lg rounded-xl p-5 mx-4 my-3">
			<div className="flex justify-between items-center">
				{/* Title */}
				<h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
					Patients
				</h1>

				{/* Search Bar */}
				<div className="relative w-72">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
					<Input
						type="text"
						placeholder="Search patients..."
						className="pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-100 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
					/>
				</div>

				{/* Buttons - Add Patient & Logout */}
				<div className="flex gap-3">
					{/* Add Patient Button */}
					<Button
						onClick={handleAddPatient}
						className="flex items-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:from-green-600 hover:to-green-800"
					>
						<UserPlus className="w-5 h-5" /> Add Patient
					</Button>

					{/* Logout Button */}
					<Button
						onClick={handleLogout}
						variant="outline"
						className="flex items-center gap-2 px-5 py-2 border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition"
					>
						<LogOut className="w-5 h-5" /> Logout
					</Button>
				</div>
			</div>

			{/* Patient Count Card */}
			<Card className="mt-5 p-4 bg-gray-100 rounded-lg shadow-sm max-w-xs">
				<h2 className="text-gray-600 text-sm">Total Patients</h2>
				<p className="text-3xl font-bold text-gray-900">1,234</p>
			</Card>
		</div>
	);
}
