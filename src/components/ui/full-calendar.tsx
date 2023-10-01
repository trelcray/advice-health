"use client";

import { Calendar, Event, Views, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { format, getDay, parse, startOfWeek } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { UseAppDispatch } from "@/hooks/use-app-selector";
import { onOpen } from "@/redux/states/register-modal.slice";

interface IFullCalendarProps<T extends Event> {
  events: T[];
  initialDate: Date | undefined;
}

export function FullCalendar<T extends Event>({
  events,
  initialDate,
}: IFullCalendarProps<T>) {
  const dispatch = UseAppDispatch();

  const locales = {
    "pt-BR": ptBR,
  };

  const defaultMessages = {
    date: "Data",
    time: "Hora",
    event: "Evento",
    allDay: "Dia Todo",
    week: "Semana",
    work_week: "Eventos",
    day: "Dia",
    month: "Mês",
    previous: "Anterior",
    next: "Próximo",
    yesterday: "Ontem",
    tomorrow: "Amanhã",
    today: "Hoje",
    agenda: "Agenda",
    noEventsInRange: "Não há eventos no período.",
    showMore: function showMore(total: number) {
      return "+" + total + " mais";
    },
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  return (
    <Calendar
      culture="pt-BR"
      messages={defaultMessages}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultDate={initialDate}
      selectable
      defaultView="day"
      views={[Views.DAY, Views.WEEK, Views.MONTH]}
      onSelectSlot={() => dispatch(onOpen())}
      style={{ height: 660 }}
    />
  );
}
