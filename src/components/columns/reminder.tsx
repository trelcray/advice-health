"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

import { UseAppDispatch } from "@/hooks/use-app-selector";
import { UseToast } from "@/hooks/use-toast";
import {
  IReminderProps,
  deleteReminder,
} from "@/redux/features/helpers/reminder.slice";
import { onOpen } from "@/redux/states/reminder-modal.slice";
import { setReminderId } from "@/redux/states/state.slice";

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
      const { toast } = UseToast();
      const { id } = row.original;

      const handleDelete = (id: number) => {
        dispatch(deleteReminder(id));
        toast({ title: "Deletado com sucesso!" });
      };

      const handleEdit = (id: number) => {
        dispatch(setReminderId(id));
        dispatch(onOpen());
      };
      return (
        <div className="flex gap-x-1">
          <Edit
            className="h-5 w-5 cursor-pointer text-yellow-500"
            onClick={() => handleEdit(id)}
          />
          <Trash
            className="h-5 w-5 cursor-pointer text-rose-500"
            onClick={() => handleDelete(id)}
          />
        </div>
      );
    },
  },
];
