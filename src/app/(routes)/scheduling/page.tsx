"use client";

import { useState } from "react";

import { ShieldQuestion } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { FullCalendar } from "@/components/ui/full-calendar";
import { Info } from "@/components/ui/info";
import { UseAppSelector } from "@/hooks/use-app-selector";
import doctors from "@/mocks/doctors.json";

export default function Scheduling() {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const { appointments } = UseAppSelector((state) => state.appointment);

  const filteredAppointments = appointments.filter((appointment) => {
    return selectedDoctor && appointment.medico === selectedDoctor;
  });

  const toggleDoctorSelection = (doctorId: string) => {
    if (selectedDoctor === doctorId) {
      return setSelectedDoctor("");
    }
    setSelectedDoctor(doctorId);
  };

  return (
    <div
      className="mx-2 flex w-full flex-col items-center justify-around gap-10
      lg:flex-row"
    >
      <div className="flex w-full max-w-md flex-col items-center gap-y-10">
        <div
          className="flex h-80 w-full flex-col gap-y-2 overflow-y-auto 
          rounded-lg bg-gray-200 px-4 py-2"
        >
          <h4 className="font-semibold">Quadro de médicos</h4>
          <div className="flex flex-col gap-y-2">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex w-full items-center gap-x-1 rounded-lg"
                onClick={() => toggleDoctorSelection(doctor.id)}
              >
                <Info
                  title={doctor.name}
                  subtitle={doctor.role}
                  imageUrl={doctor.imageUrl}
                  selected={selectedDoctor}
                  id={doctor.id}
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
      <div className="flex w-full justify-center gap-y-5 lg:w-1/2">
        {selectedDoctor && date ? (
          <FullCalendar initialDate={date} events={filteredAppointments} />
        ) : (
          <div
            className="flex flex-col items-center justify-center gap-y-4 
            text-center"
          >
            <ShieldQuestion size={60} className="text-amber-500" />
            <p className="max-w-xs text-xl">
              Selecione um Médico e uma data para agendar uma consulta!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
