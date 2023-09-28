"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ClipboardCheck, Edit, Trash } from "lucide-react";

import { UseAppDispatch } from "@/hooks/use-app-selector";
import {
  IReminderProps,
  deleteReminder,
} from "@/redux/features/helpers/reminder.slice";

export const columns: ColumnDef<IReminderProps>[] = [
  {
    accessorKey: "id",
    header: "Código",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const dispatch = UseAppDispatch();
      const { id } = row.original;

      const handleDelete = (id: number) => {
        dispatch(deleteReminder(id));
      };
      return (
        <div className="flex gap-x-1">
          <Edit className="h-5 w-5 text-yellow-500" />
          <Trash
            className="h-5 w-5 cursor-pointer text-rose-500"
            onClick={() => handleDelete(id)}
          />
          <ClipboardCheck className="h-5 w-5 text-orange-500" />
        </div>
      );
    },
  },
];
