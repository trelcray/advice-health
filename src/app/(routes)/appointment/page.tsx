"use client";

import { IAppointmentsProps, columns } from "@/components/columns/appointments";
import { Content } from "@/components/ui/content";
import { DataTable } from "@/components/ui/data-table";
import data from "@/mocks/appointments.json";

export default function Appointment() {
  return (
    <div className="flex w-full flex-col justify-between px-2">
      <DataTable
        columns={columns}
        data={data as IAppointmentsProps[]}
        rowName="patientName"
      />
      <div className="flex flex-wrap justify-center gap-2 md:justify-between">
        <Content
          className="text-amber-500"
          title="Total de Agendamentos"
          value={150}
        />
        <Content
          className="text-blue-500"
          title="Total de Atendimentos"
          value={148}
        />
        <Content className="text-rose-500" title="Total Pendente" value={2} />
        <Content
          className="text-emerald-500"
          title="Total Faturado"
          isPrice
          value={12000}
        />
      </div>
    </div>
  );
}
