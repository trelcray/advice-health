"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Search } from "lucide-react";

import { UseAppDispatch } from "@/hooks/use-app-selector";
import { onOpen } from "@/redux/states/edit-modal.slice";
import { onOpen as onOpenView } from "@/redux/states/view-modal.slice";

export type IAppointmentsProps = {
  id: string;
  patientName: string;
  appointmentDateStart: string;
  appointmentDateEnd: string;
  doctorName: string;
  amountCharged: number;
  status: "Pendente" | "Agendado" | "Concluído" | "Cancelado";
};

export const columns: ColumnDef<IAppointmentsProps>[] = [
  {
    accessorKey: "id",
    header: "Código",
  },
  {
    accessorKey: "patientName",
    header: "Paciente",
  },
  {
    accessorKey: "appointmentDateStart",
    header: "Data de Agendamento Inicial",
  },
  {
    accessorKey: "appointmentDateEnd",
    header: "Data de Agendamento Final",
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
      const dispatch = UseAppDispatch();
      return (
        <div className="flex gap-x-1">
          <Edit
            className="h-5 w-5 cursor-pointer text-yellow-500"
            onClick={() => dispatch(onOpen())}
          />
          <Search
            className="h-5 w-5 cursor-pointer"
            onClick={() => dispatch(onOpenView())}
          />
        </div>
      );
    },
  },
];
