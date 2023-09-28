"use client";

import { ClipboardCheck, Edit, Trash, UserPlus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RegisterModal } from "../modals/register-modal";

interface ICardProps {
  timeSlot: string;
}

export const Card: React.FC<ICardProps> = ({ timeSlot }) => {
  const appointments = [
    {
      patientName: "Mayk Brito",
      description: "Consulta",
      time: "09:30",
    },
  ];

  return (
    <div className="flex w-full rounded-xl bg-gray-200 px-2">
      <div className="mx-2 flex h-16 w-full items-center justify-between gap-x-4">
        <span>{timeSlot}</span>
        {appointments.map((appointment, i) =>
          appointment.time === timeSlot ? (
            <>
              <div key={i} className="flex w-full items-center gap-x-1">
                <Avatar>
                  <AvatarImage src="https://github.com/maykbrito.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <strong className="text-2xl">
                    {appointment.patientName}
                  </strong>
                  <p className="font-semibold">{appointment.description}</p>
                </div>
              </div>

              <div className="flex gap-x-1">
                <Edit className="h-6 w-6 text-yellow-500" />
                <Trash className="h-6 w-6 cursor-pointer text-rose-500" />
                <ClipboardCheck className="h-6 w-6 text-orange-500" />
              </div>
            </>
          ) : (
            <RegisterModal key={i}>
              <UserPlus className="cursor-pointer text-blue-700" />
            </RegisterModal>
          )
        )}
      </div>
    </div>
  );
};
