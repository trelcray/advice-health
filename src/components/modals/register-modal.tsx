"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Modal } from "@/components/ui/modal";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  nome: z.string().min(3).nonempty(),
  email: z.string().email().nonempty(),
  telefone: z.string().email().nonempty(),
  cpf: z.string().min(11).nonempty(),
  sexo: z.string().nonempty(),
  dataNascimento: z.coerce.date(),
  cep: z.string().nonempty(),
  logadouro: z.string().nonempty(),
  cidade: z.string().nonempty(),
  bairo: z.string().nonempty(),
  uf: z.string().nonempty(),
  medico: z.string().nonempty(),
  dataAgendamento: z.coerce.date(),
  metodoPagamento: z.string().nonempty(),
  valor: z.number(),
});

export const RegisterModal = ({ children }: { children: React.ReactNode }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      bairo: "",
      cep: "",
      cidade: "",
      cpf: "",
      dataAgendamento: new Date(),
      logadouro: "",
      medico: "",
      metodoPagamento: "",
      sexo: "",
      uf: "",
      valor: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(values));
  };

  const content = (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-2 flex flex-col gap-y-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <fieldset className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="email"
                    {...field}
                  />
                </fieldset>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="nome">Nome</FormLabel>
              <FormControl>
                <fieldset className="relative">
                  <Input id="nome" type="text" placeholder="nome" {...field} />
                </fieldset>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="telefone">telefone</FormLabel>
              <FormControl>
                <fieldset className="relative">
                  <Input
                    id="telefone"
                    type="telefone"
                    placeholder="telefone"
                    {...field}
                  />
                </fieldset>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Agendar</Button>
      </form>
    </Form>
  );
  return (
    <Modal title="Agendar Consulta" label="Agendar" content={content}>
      {children}
    </Modal>
  );
};
