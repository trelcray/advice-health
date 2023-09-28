"use client";

import { useState } from "react";

import { addMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Info } from "@/components/ui/info";
import doctors from "@/mocks/doctors.json";

export default function Scheduling() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const startTime = 8 * 60; // 8:00 in minutes
  const endTime = 18 * 60; // 18:00 in minutes
  const interval = 30; // Interval in minutes

  const appointmentSlots = [];
  for (let time = startTime; time < endTime; time += interval) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const timeStr = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    appointmentSlots.push(timeStr);
  }

  const currentDate = new Date();
  const desiredDate = addMonths(currentDate, 1);
  const formattedDate = format(desiredDate, "dd/MMM yyyy", { locale: ptBR });

  return (
    <div
      className="mx-2 flex w-full flex-col items-center justify-around gap-10
      lg:flex-row lg:items-baseline"
    >
      <div className="flex w-full max-w-md flex-col items-center gap-y-10">
        <div
          className="flex h-80 w-full flex-col gap-y-2 overflow-y-auto 
          rounded-lg bg-gray-200 px-4 py-2"
        >
          <h4 className="font-semibold">Quadro de médicos</h4>
          <div className="flex flex-col gap-y-2">
            {doctors.map((doctor, i) => (
              <div
                key={i}
                className="flex w-full items-center gap-x-1 rounded-lg"
              >
                <Info
                  title={doctor.title}
                  subtitle={doctor.subtitle}
                  imageUrl={doctor.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <div className="flex w-full flex-col gap-y-5 lg:w-1/2">
        <h2 className="text-lg capitalize">{formattedDate}</h2>
        <div
          className="flex h-[90vh] w-full flex-col gap-2 overflow-y-auto 
          pr-2"
        >
          {appointmentSlots.map((slot, i) => (
            <Card key={i} timeSlot={slot} />
          ))}
        </div>
      </div>
    </div>
  );
}
