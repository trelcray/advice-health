"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Modal } from "@/components/ui/modal";
import { UseAppDispatch, UseAppSelector } from "@/hooks/use-app-selector";
import { UseToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { updateReminder } from "@/redux/features/helpers/reminder.slice";
import { onClose } from "@/redux/states/reminder-modal.slice";

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

const formSchema = z.object({
  description: z
    .string()
    .min(10, "Deve conter ao menos 10 digítos")
    .nonempty("Informe a descrição"),
  status: z.enum(["Pendente", "Agendado", "Cancelado", "Concluído"], {
    required_error: "Informe o status",
  }),
});

export const ReminderModal = () => {
  const [description, setDescription] = useState("");

  const { toast } = UseToast();
  const dispatch = UseAppDispatch();
  const { isOpen } = UseAppSelector((state) => state.reminderModal);
  const { reminders } = UseAppSelector((state) => state.reminder);
  const { reminderId } = UseAppSelector((state) => state.states);

  const data = reminders.find((task) => task.id === reminderId);
  const dataDescription = data?.description ?? "Não informado";
  const status = data?.status ?? "Pendente";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description,
      status,
    },
  });

  useEffect(() => {
    setDescription(dataDescription);
    form.setValue("description", description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, reminderId]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    dispatch(onClose());
    dispatch(
      updateReminder({
        id: reminderId,
        description: values.description,
        status: values.status,
      })
    );
    toast({ title: "Atualizado com sucesso!" });
  };

  return (
    <Modal
      title="Editar Aviso"
      isOpen={isOpen}
      onClose={() => dispatch(onClose())}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-2 flex flex-col gap-y-4"
        >
          <fieldset className="grid gap-2 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="description"
                        type="text"
                        placeholder=" "
                        isError={form.formState.errors}
                        {...field}
                      />
                      <FormLabel htmlFor="description">descrição</FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={status}
                    >
                      <SelectTrigger
                        className={cn("w-full", {
                          "border-rose-500 text-rose-500":
                            form.formState.errors.status,
                        })}
                      >
                        <SelectValue placeholder="status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Agendado">Agendado</SelectItem>
                        <SelectItem value="Cancelado">Cancelado</SelectItem>
                        <SelectItem value="Pendente">Pendente</SelectItem>
                        <SelectItem value="Concluído">Concluído</SelectItem>
                      </SelectContent>
                    </Select>
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
