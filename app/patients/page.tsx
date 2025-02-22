"use client";

import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/datatable";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react"; // Icons
import PatientHeader from "@/components/patientheader";
import { motion } from "framer-motion";
import { useSuspenseQuery } from "@apollo/client";
import { PatientResponceType,PatientType } from "@/types/type";
import {patientsQuery} from "@/queries/patients"

const columns: ColumnDef<(typeof PatientType )[number]>[] = [
	{
		accessorKey: "id",
		header: "Patient ID",
		cell: (info) => <span className="font-medium">{info.getValue()}</span>,
	},
	{
		accessorKey: "first_name",
		header: "First Name",
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: "middle_name",
		header: "Middle Name",
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: "last_name",
		header: "Last Name",
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: "age",
		header: "Age",
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: "national_id",
		header: "National Id",
		cell: (info) => info.getValue(),
	},
	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const router = useRouter();
			return (
				<div className="flex space-x-3">
					{/* View Button */}
					<Button
						variant="ghost"
						size="icon"
						onClick={() =>{localStorage.setItem("row",JSON.stringify(row));router.push("/profile")}}
					>
						<Eye className="w-5 h-5 text-blue-600 hover:text-blue-800" />
					</Button>

					{/* Edit Button */}
					<Button
						variant="ghost"
						size="icon"
						onClick={() =>{localStorage.setItem("row",JSON.stringify(row));router.push("/edit")}}
					>
						<Pencil className="w-5 h-5 text-green-600 hover:text-green-800" />
					</Button>
				</div>
			);
		},
	},
];

export default function Patients() {
	const router = useRouter();
    const { data } = useSuspenseQuery<PatientResponceType>(patientsQuery );
	return (
		<div className="relative min-h-screen container mx-auto pt-4">
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 0.2 }}
				transition={{ duration: 1 }}
				className="absolute -left-20 top-0 w-[250px] md:w-[400px] rotate-[-360deg]"
			>
				<img src="/assets/pattern.svg" alt="Pattern" className="w-full" />
			</motion.div>

			<motion.div
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 0.2 }}
				transition={{ duration: 1 }}
				className="absolute -right-20 bottom-0 w-[250px] md:w-[400px] rotate-[30deg]"
			>
				<img src="/assets/pattern.svg" alt="Pattern" className="w-full" />
			</motion.div>

			{/* Header & Table Content */}
			<PatientHeader />
			<div className="mt-10">
				<DataTable
					columns={columns}
					data={data.patients}
					onRowClick={(row) =>{router.push(`/patients/${row.original.id}`)}} 
				/>
			</div>
		</div>
	);
}
