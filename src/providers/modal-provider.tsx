"use client";

import { EditModal } from "@/components/modals/edit-modal";
import { RegisterModal } from "@/components/modals/register-modal";
import { ReminderModal } from "@/components/modals/reminder-modal";
import { ViewModal } from "@/components/modals/view-modal";

export const ModalProvider = () => {
  return (
    <>
      <RegisterModal />
      <EditModal />
      <ReminderModal />
      <ViewModal />
    </>
  );
};
