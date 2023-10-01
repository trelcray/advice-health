import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type IReminderProps = {
  id: number;
  description: string;
  status: "Pendente" | "Agendado" | "Concluído" | "Cancelado";
};

interface IReminderState {
  reminders: IReminderProps[];
}

const initialState: IReminderState = {
  reminders: [
    {
      id: 1,
      description: "Consulta as 15:00 horas",
      status: "Agendado",
    },
    {
      id: 2,
      description: "Cirurgia com o Dr. Marcus",
      status: "Cancelado",
    },
    {
      id: 3,
      description: "Laudo do paciente 1",
      status: "Concluído",
    },
    {
      id: 4,
      description: "Agendar consulta para paciente 2",
      status: "Pendente",
    },
    {
      id: 5,
      description: "Cirurgia de core",
      status: "Agendado",
    },
  ],
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    addReminder: (state, action: PayloadAction<IReminderProps>) => {
      state.reminders = [...state.reminders, action.payload];
    },
    updateReminder: (state, action: PayloadAction<IReminderProps>) => {
      const { id, description, status } = action.payload;
      const reminderFound = state.reminders.find(
        (reminder) => reminder.id === id
      );
      if (reminderFound) {
        reminderFound.description = description;
        reminderFound.status = status;
      }
    },
    deleteReminder: (state, action: PayloadAction<number>) => {
      const reminderFound = state.reminders.find(
        (reminder) => reminder.id === action.payload
      );
      if (reminderFound) {
        state.reminders.splice(state.reminders.indexOf(reminderFound), 1);
      }
    },
  },
});

export const { addReminder, updateReminder, deleteReminder } =
  reminderSlice.actions;

export default reminderSlice.reducer;
