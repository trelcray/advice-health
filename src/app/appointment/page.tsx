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
        <Content title="Total de Agendamentos" value="150" />
        <Content title="Total de Atendimentos" value="148" />
        <Content title="Total Pendente" value="2" />
        <Content title="Total Faturado" value="12.000" />
      </div>
    </div>
  );
}
