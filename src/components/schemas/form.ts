import * as z from "zod";

import { cep, cpf, isCpfValid, phoneNumber } from "@/utils/validations";

export const formSchema = z.object({
  id: z.string().optional(),
  nome: z
    .string()
    .min(3, "Deve conter ao menos 3 digítos")
    .nonempty("Informe o nome"),
  cpf: z
    .string()
    .min(11, "Deve conter ao menos 11 digítos")
    .nonempty("Informe o cpf")
    .regex(cpf, "cpf inválido")
    .refine((value) => isCpfValid(value), { message: "cpf inválido" }),
  genero: z.string().nonempty("Informe o genero"),
  dataNascimento: z.custom(
    (value) => {
      if (typeof value === "string") {
        return value;
      }
      if (value instanceof Date) {
        return value.toISOString();
      }
    },
    { message: "Data inválida" }
  ),
  cep: z.string().nonempty("Informe o cep").regex(cep, "cep inválido"),
  email: z.string().email("Email inválido").nonempty("Informe o email"),
  telefone: z
    .string()
    .nonempty("Informe o telefone")
    .regex(phoneNumber, "Telefone inválido"),
  logradouro: z.string().nonempty("informe o logradouro"),
  cidade: z.string().nonempty("Informe a cidade"),
  bairro: z.string().nonempty("Informe o bairro"),
  uf: z.string().nonempty("Informe o uf"),
  medico: z.string().nonempty("Informe o médico"),
  title: z.string().nonempty("Informe o título"),
  start: z.custom(
    (value) => {
      if (typeof value === "string") {
        return value;
      }
      if (value instanceof Date) {
        return value.toISOString();
      }
    },
    { message: "Data inválida" }
  ),
  end: z.custom(
    (value) => {
      if (typeof value === "string") {
        return value;
      }
      if (value instanceof Date) {
        return value.toISOString();
      }
    },
    { message: "Data inválida" }
  ),
  metodoPagamento: z.string().nonempty("Informe metodo de pagamento"),
  valor: z
    .string()
    .nonempty("Informe o valor da consulta")
    .regex(/\d+/g, "Valor inválido"),
});
