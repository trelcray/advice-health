import { Appointment, columns } from "@/components/columns/appointment";
import { Content } from "@/components/ui/content";
import { DataTable } from "@/components/ui/data-table";
import data from "@/mocks/appointments.json";

export default function Appointment() {
  return (
    <div className="flex flex-col w-full px-2 justify-between">
      <DataTable 
      columns={columns} 
      data={data as Appointment[]} 
      rowName="patientName" />
      <div className="flex gap-2 justify-center md:justify-between flex-wrap">
        <Content title="Total de Agendamentos" value="150" />
        <Content title="Total de Atendimentos" value="148" />
        <Content title="Total Pendente" value="2" />
        <Content title="Total Faturado" value="12.000" />
      </div>
    </div>
  )

}
