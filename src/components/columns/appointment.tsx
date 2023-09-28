"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Search } from "lucide-react";

export type Appointment = {
  id: string;
  patientName: string;
  appointmentDate: string;
  doctorName: string;
  amountCharged: number;
  status: "Pendente" | "Agendado" | "Concluido" | "Cancelado";
};

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "id",
    header: "Código",
  },
  {
    accessorKey: "patientName",
    header: "Paciente",
  },
  {
    accessorKey: "appointmentDate",
    header: "Data de Agendamento",
  },
  {
    accessorKey: "doctorName",
    header: "Médico",
  },
  {
    accessorKey: "amountCharged",
    header: "Valor Cobrado",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amountCharged"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      return <span>{formatted}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Ações",
    cell: () => {
      return (
        <div className="flex gap-x-1">
          <Edit className="h-5 w-5 cursor-not-allowed text-yellow-500" />
          <Search className="h-5 w-5 cursor-not-allowed" />
        </div>
      );
    },
  },
];
