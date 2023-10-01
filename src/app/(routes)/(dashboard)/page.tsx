"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { columns } from "@/components/columns/reminder";
import { Calendar } from "@/components/ui/calendar";
import { Content } from "@/components/ui/content";
import { DataTable } from "@/components/ui/data-table";
import { Info } from "@/components/ui/info";
import { Input } from "@/components/ui/input";
import { UseAppSelector } from "@/hooks/use-app-selector";
import schedules from "@/mocks/schedules.json";

export default function Home() {
  const { reminders } = UseAppSelector((state) => state.reminder);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div
      className="flex w-full flex-col items-center justify-around gap-10 px-2
      lg:flex-row"
    >
      <div className="flex w-full flex-col gap-y-10">
        <div className="relative flex w-full">
          <Input type="search" placeholder="buscar" />
          <Search
            className="pointer-events-none absolute right-1 top-1/2 
            -translate-y-1/2"
          />
        </div>
        <div
          className="flex flex-col items-center gap-x-5 gap-y-10 lg:flex-row 
          lg:items-end"
        >
          <div className="flex w-full flex-col items-center gap-4">
            <h2
              className="text-left text-2xl font-bold uppercase 
              text-blue-700 lg:w-full"
            >
              Dashboard
            </h2>
            <Content
              title="Faturamento"
              isPrice
              value={2000}
              className="h-48 justify-center pb-12 text-emerald-500 lg:h-64"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-y-4">
            <Content
              title="Pacientes agendados"
              value={20}
              className="text-orange-500"
            />
            <Content
              title="Pacientes atendidos"
              value={5}
              className="text-cyan-600"
            />
          </div>
        </div>
        <div className="w-full space-y-4">
          <h3 className="w-full text-start text-lg font-semibold">
            Quadro de aviso/lembrete
          </h3>
          <DataTable columns={columns} data={reminders} />
        </div>
      </div>

      <div className="flex w-full max-w-md flex-col items-center gap-y-24">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div
          className="flex h-80 w-full flex-col gap-y-2 overflow-y-auto 
          rounded-lg bg-gray-200 px-4 py-2"
        >
          <h4 className="font-semibold">Agendamentos do dia</h4>
          <div className="flex flex-col gap-y-2">
            {schedules.map((schedule, i) => (
              <div
                key={i}
                className="flex w-full items-center gap-x-1 rounded-lg"
              >
                <Info
                  title={schedule.title}
                  subtitle={schedule.subtitle}
                  imageUrl={schedule.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
