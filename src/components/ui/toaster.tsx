"use client";

import { CheckCircle, XCircle } from "lucide-react";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { UseToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = UseToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        isError = false,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="flex gap-1">
                  {!isError ? (
                    <CheckCircle
                      size={20}
                      className="mt-[0.05rem] text-emerald-500"
                    />
                  ) : (
                    <XCircle size={20} className="mt-[0.05rem] text-rose-500" />
                  )}
                  <p className="font-semibold">{title}</p>
                </ToastTitle>
              )}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
