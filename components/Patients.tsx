'use client'

import { patientsQuery } from "@/queries/patients";
import { PatientResponceType, PatientType } from "@/types/type";
import { useSuspenseQuery } from "@apollo/client";

export default function Patients() {
	const { data } = useSuspenseQuery<PatientResponceType>(patientsQuery);
	console.log(data)
	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{data?.patients?.map((patient: PatientType, index: number) => (
					<div key={index} className="p-4 border rounded-md shadow">
						ID: {patient.id} <br />
						First Name: {patient.first_name} <br />
						Middle Name: {patient.middle_name} <br />
						Last Name: {patient.last_name} <br />
						National Id: {patient.national_id} <br />
						Address : {patient.address} <br />
						Age: {patient.age} <br />
						Emergency contacts : {patient.emergency_contact} <br />
						record id : {patient.record_id} <br />
					</div>
				))}
			</div>
		</div>
	)
}
