'use client'
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // Use this if you're using the App Router

interface BackButtonProps {
	destinationRoute: string; // The route to navigate to
}

const BackButton: React.FC<BackButtonProps> = ({ destinationRoute }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(destinationRoute); // Navigate to the specified route
	};

	return (
		<button
			onClick={handleClick}
			className="bg-[#2CAA83] hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
		>
			<ArrowLeft />
		</button>
	);
};

export default BackButton;
