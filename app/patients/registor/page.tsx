"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import BackButton from "@/components/backButton";

const formSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: "First name must be at least 2 characters." }),
	middleName: z
		.string()
		.min(2, { message: "Middle name must be at least 2 characters." }),
	lastName: z
		.string()
		.min(2, { message: "Last name must be at least 2 characters." }),
	age: z
		.number({ invalid_type_error: "Age must be a number" })
		.gt(0, { message: "Age must be greater than zero" }),
	nationalId: z
		.string()
		.min(5, { message: "National ID must be at least 5 characters." }),
	recordId: z
		.string()
		.min(5, { message: "Record ID must be at least 5 characters." }),
	sex: z.string().nonempty({ message: "Sex of the patient can't be empty." }),
	phoneNumber: z
		.string()
		.min(10, { message: "Phone number must be at least 10 digits long" })
		.max(15, { message: "Phone number cannot exceed 15 digits" })
		.regex(/^[0-9]+$/, { message: "Phone number can only contain digits" }),
});

export default function Register() {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			middleName: "",
			lastName: "",
			age: 1,
			nationalId: "",
			recordId: "",
			sex: "",
			phoneNumber: "",
		},
	});

	const onSubmit = (value: any) => {
		console.log("Form Submitted Successfully:", value);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="relative h-screen flex items-center justify-center bg-gray-100"
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

			{/* Form Container */}
			<div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
				<h2 className="text-2xl font-bold mb-4 text-center">
					Register Patient
				</h2>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="First name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="middleName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Middle Name</FormLabel>
									<FormControl>
										<Input placeholder="Middle name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="Last name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="nationalId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>National ID</FormLabel>
									<FormControl>
										<Input placeholder="National ID" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="sex"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sex</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select a Sex" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="F">Female</SelectItem>
													<SelectItem value="M">Male</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="age"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Age</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Age"
											value={field.value}
											onChange={(e) =>
												field.onChange(Number(e.target.value))
											}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="recordId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Record ID</FormLabel>
									<FormControl>
										<Input placeholder="Record ID" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phoneNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="Phone Number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="w-full bg-[#2CAA83] hover:bg-green-700 text-white py-2"
						>
							Submit
						</Button>
					</form>
				</Form>
				<div className="absolute top-6 left-6">
					<BackButton destinationRoute="/patients" />
				</div>
			</div>
		</motion.div>
	);
}
