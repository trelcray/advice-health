"use client";

import { useCallback, useEffect } from "react";
import { ErrorOption, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Modal } from "@/components/ui/modal";
import { UseAppDispatch, UseAppSelector } from "@/hooks/use-app-selector";
import { UseToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import doctors from "@/mocks/doctors.json";
import uf from "@/mocks/uf.json";
import { onClose } from "@/redux/states/edit-modal.slice";
import { viaCepAPI } from "@/services/api";
import {
  normalizeCep,
  normalizeCpf,
  normalizeNumbers,
  normalizePhoneNumber,
} from "@/utils/mask";

import { formSchema } from "../schemas/form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: string;
}

export const EditModal = () => {
  const dispatch = UseAppDispatch();
  const { isOpen } = UseAppSelector((state) => state.editModal);

  const { toast } = UseToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "Paciente 1",
      cpf: "123.456.789-09",
      genero: "Masculino",
      cep: "90040-000",
      email: "johndoe@gmail.com",
      bairro: "Centro Histórico",
      telefone: "(55) 99989-9989",
      cidade: "Porto Alegre",
      logradouro: "Avenida João Pessoa",
      medico: "Marcus Filho",
      title: "Consulta com o dr. Marcus Filho",
      metodoPagamento: "Dinheiro",
      uf: "RS",
      valor: "120",
      end: "2023-10-01T13:00",
      start: "2023-10-01T12:00",
      dataNascimento: "2023-02-10",
    },
  });

  const phoneValue = form.watch("telefone");
  const value = form.watch("valor");
  const cepValue = form.watch("cep");
  const cpfValue = form.watch("cpf");

  const onSubmit = () => {
    dispatch(onClose());
    toast({ title: "Editado com sucesso!" });
  };

  const fetchData = useCallback(async () => {
    try {
      if (cepValue.length === 9) {
        const response = await viaCepAPI.get<ViaCepResponse>(
          `${cepValue}/json`
        );
        const { erro, logradouro, bairro, localidade, uf } = response.data;

        if (erro) {
          throw new Error("CEP Inválido");
        }

        form.clearErrors("cep");
        form.setValue("logradouro", logradouro);
        form.setValue("bairro", bairro);
        form.setValue("cidade", localidade);
        form.setValue("uf", uf);
      }
    } catch (error) {
      form.setError("cep", error as ErrorOption);
    }
  }, [cepValue, form]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    form.setValue("telefone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, form]);

  useEffect(() => {
    form.setValue("valor", normalizeNumbers(value));
  }, [value, form]);

  useEffect(() => {
    form.setValue("cep", normalizeCep(cepValue));
  }, [cepValue, form]);

  useEffect(() => {
    form.setValue("cpf", normalizeCpf(cpfValue));
  }, [cpfValue, form]);

  return (
    <Modal
      title="Editar Consulta"
      isOpen={isOpen}
      onClose={() => dispatch(onClose())}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-2 flex flex-col gap-y-4"
        >
          <fieldset className="grid gap-2 sm:grid-cols-2">
            <legend className="mb-2 text-lg font-semibold">Paciente</legend>
            <hr className="col-span-2" />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="cpf"
                        type="text"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="cpf">cpf</FormLabel>
                    </div>
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
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="nome"
                        type="text"
                        isError={form.formState.errors}
                        placeholder=" "
                        {...field}
                      />
                      <FormLabel htmlFor="nome">Nome</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genero"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        className={cn("w-full", {
                          "border-rose-500 text-rose-500":
                            form.formState.errors.genero,
                        })}
                      >
                        <SelectValue placeholder="gênero" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Masculino">Masculino</SelectItem>
                        <SelectItem value="Feminino">Feminino</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dataNascimento"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="dataNascimento"
                        type="date"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="dataNascimento">
                        data de nascimento
                      </FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset className="grid gap-2 sm:grid-cols-2">
            <legend className="mb-2 text-lg font-semibold">Endereço</legend>
            <hr className="col-span-2" />
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="cep"
                        type="text"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="cep">cep</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logradouro"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="logradouro"
                        type="text"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="logradouro">logradouro</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cidade"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="cidade"
                        type="text"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="cidade">cidade</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bairro"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="bairro"
                        type="text"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="bairro">bairro</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="uf"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={form.getValues("uf")}
                    >
                      <SelectTrigger
                        className={cn("w-full", {
                          "border-rose-500 text-rose-500":
                            form.formState.errors.uf,
                        })}
                      >
                        <SelectValue placeholder="uf" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72 overflow-y-auto">
                        {uf.map((uf, i) => (
                          <SelectItem key={i} value={uf.sigla}>
                            {uf.sigla}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset className="grid gap-2 sm:grid-cols-2">
            <legend className="mb-2 text-lg font-semibold">Contato</legend>
            <hr className="col-span-2" />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="email">email</FormLabel>
                    </div>
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
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="telefone">telefone</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset className="grid gap-2 sm:grid-cols-2">
            <legend className="mb-2 text-lg font-semibold">
              Dados do Agendamento
            </legend>
            <hr className="col-span-2" />
            <FormField
              control={form.control}
              name="medico"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        className={cn("w-full", {
                          "border-rose-500 text-rose-500":
                            form.formState.errors.medico,
                        })}
                      >
                        <SelectValue placeholder="médicos" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="title"
                        type="title"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="title">título</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="start"
                        type="datetime-local"
                        placeholder=" "
                        lang="pt-BR"
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="start">data inicial</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="end"
                        type="datetime-local"
                        placeholder=" "
                        lang="pt-BR"
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="end">data final</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset className="grid gap-2 sm:grid-cols-2">
            <legend className="mb-2 text-lg font-semibold">Pagemento</legend>
            <hr className="col-span-2" />
            <FormField
              control={form.control}
              name="metodoPagamento"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        className={cn("w-full", {
                          "border-rose-500 text-rose-500":
                            form.formState.errors.metodoPagamento,
                        })}
                      >
                        <SelectValue placeholder="forma de pagamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Dinheiro">Dinheiro</SelectItem>
                        <SelectItem value="Cartão">Cartão</SelectItem>
                        <SelectItem value="Boleto">Boleto</SelectItem>
                        <SelectItem value="Pix">Pix</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="valor"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="valor"
                        type="text"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="valor">Valor</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <Button type="submit">Agendar</Button>
        </form>
      </Form>
    </Modal>
  );
};
