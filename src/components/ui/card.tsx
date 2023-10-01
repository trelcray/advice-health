"use client";

import { useDispatch } from "react-redux";

import { ClipboardCheck, Edit, Trash, UserPlus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { onOpen } from "@/redux/states/register-modal.slice";

interface ICardProps {
  timeSlot: string;
}

export const Card: React.FC<ICardProps> = ({ timeSlot }) => {
  const dispatch = useDispatch();

  const appointments = [
    {
      patientName: "Mayk Brito",
      description: "Consulta",
      time: "09:30",
    },
  ];

  return (
    <div className="flex w-full rounded-xl bg-gray-200 px-2">
      {appointments.map((appointment, i) => (
        <div
          key={i}
          className="mx-2 flex h-16 w-full items-center justify-between gap-x-4"
        >
          <span>{timeSlot}</span>
          {appointment.time === timeSlot ? (
            <>
              <div className="flex w-full items-center gap-x-1">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/maykbrito.png"
                    alt="avatar image"
                  />
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
            <UserPlus
              className="cursor-pointer text-blue-700"
              onClick={() => dispatch(onOpen())}
            />
          )}
        </div>
      ))}
    </div>
  );
};
