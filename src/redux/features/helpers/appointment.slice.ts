import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addHours, addMinutes, startOfDay } from "date-fns";

export type IAppointmentProps = {
  id?: string;
  nome: string;
  cpf: string;
  genero: string;
  dataNascimento: Date;
  cep: string;
  email: string;
  telefone: string;
  logradouro: string;
  cidade: string;
  bairro: string;
  uf: string;
  medico: string;
  title: string;
  start: Date;
  end: Date;
  metodoPagamento: string;
  valor: string;
};

interface IAppointmentState {
  appointments: IAppointmentProps[];
}

const currentDate = new Date();

const initialState: IAppointmentState = {
  appointments: [
    {
      id: "ASlk23#ZX",
      nome: "Antonio da Silva",
      cpf: "123.456.789-09",
      genero: "Masculino",
      dataNascimento: new Date(2000, 4, 29),
      cep: "90040-000",
      logradouro: "Avenida João Pessoa",
      cidade: "Porto Alegre",
      bairro: "Centro Histórico",
      uf: "RS",
      email: "antoniodasilva@gmail.com",
      telefone: "(55) 99989-9889",
      medico: "12niasA",
      title: "Consulta com o dr. Marcus Filho",
      start: addHours(startOfDay(currentDate), 8),
      end: addMinutes(addHours(startOfDay(currentDate), 8), 30),
      metodoPagamento: "dinheiro",
      valor: "120",
    },
    {
      id: "ASlk23#ZX",
      nome: "Antonio da Silva",
      cpf: "123.456.789-09",
      genero: "Masculino",
      dataNascimento: new Date(2000, 4, 29),
      cep: "90040-000",
      logradouro: "Avenida João Pessoa",
      cidade: "Porto Alegre",
      bairro: "Centro Histórico",
      uf: "RS",
      email: "antoniodasilva@gmail.com",
      telefone: "(55) 99989-9889",
      medico: "12niasA",
      title: "Cirurgia com o dr. Marcus Filho",
      start: addHours(startOfDay(currentDate), 10),
      end: addHours(startOfDay(currentDate), 12),
      metodoPagamento: "dinheiro",
      valor: "120",
    },
    {
      id: "ASlk23#ZX",
      nome: "Antonio da Silva",
      cpf: "123.456.789-09",
      genero: "Masculino",
      dataNascimento: new Date(2000, 4, 29),
      cep: "90040-000",
      logradouro: "Avenida João Pessoa",
      cidade: "Porto Alegre",
      bairro: "Centro Histórico",
      uf: "RS",
      email: "antoniodasilva@gmail.com",
      telefone: "(55) 99989-9889",
      medico: "NVn34aA",
      title: "Consulta com o dr. Antunies Gonzalez",
      start: addHours(startOfDay(currentDate), 10),
      end: addMinutes(addHours(startOfDay(currentDate), 10), 30),
      metodoPagamento: "dinheiro",
      valor: "120",
    },
  ],
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<IAppointmentProps>) => {
      state.appointments = [...state.appointments, action.payload];
    },
    updateAppointment: (state, action: PayloadAction<IAppointmentProps>) => {
      const {
        id,
        cpf,
        nome,
        bairro,
        cep,
        cidade,
        dataNascimento,
        email,
        genero,
        logradouro,
        metodoPagamento,
        telefone,
        uf,
        valor,
        title,
        medico,
        start,
        end,
      } = action.payload;
      const appointmentFound = state.appointments.find(
        (appointment) => appointment.id === id
      );
      if (appointmentFound) {
        appointmentFound.cpf = cpf;
        appointmentFound.nome = nome;
        appointmentFound.genero = genero;
        appointmentFound.dataNascimento = dataNascimento;
        appointmentFound.cep = cep;
        appointmentFound.cidade = cidade;
        appointmentFound.bairro = bairro;
        appointmentFound.logradouro = logradouro;
        appointmentFound.uf = uf;
        appointmentFound.title = title;
        appointmentFound.medico = medico;
        appointmentFound.start = start;
        appointmentFound.end = end;
        appointmentFound.metodoPagamento = metodoPagamento;
        appointmentFound.telefone = telefone;
        appointmentFound.email = email;
        appointmentFound.valor = valor;
      }
    },
    deleteAppointment: (state, action: PayloadAction<string>) => {
      const appointmentFound = state.appointments.find(
        (appointment) => appointment.id === action.payload
      );
      if (appointmentFound) {
        state.appointments.splice(
          state.appointments.indexOf(appointmentFound),
          1
        );
      }
    },
  },
});

export const { addAppointment, updateAppointment, deleteAppointment } =
  appointmentSlice.actions;

export default appointmentSlice.reducer;
