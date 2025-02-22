"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/datatable";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react"; // Importing Lucide Icon

interface Patient {
  id: string;
  name: string;
}

const patients: Patient[] = [
  { id: "P-001", name: "John Doe" },
  { id: "P-002", name: "Jane Smith" },
  { id: "P-003", name: "Michael Johnson" },
  { id: "P-004", name: "Sarah Williams" },
];

// Table Columns
const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: "Patient ID",
    cell: ({ row }) => <span className="text-gray-700 font-medium">{row.original.id}</span>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span className="text-gray-900">{row.original.name}</span>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="sm"
        className="text-green-500 hover:text-green-600 transition-all"
        onClick={() => alert(`Editing ${row.original.name}`)}
      >
        <Pencil className="w-4 h-4" /> Edit
      </Button>
    ),
  },
];

export default function PatientTable() {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patients</h2>
      <DataTable columns={columns} data={patients} />
    </div>
  );
}
