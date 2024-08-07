"use client";

import userPost from "@/actions/user-post";
import { useFormState } from "react-dom";
import Input from "@/components/UX/Input";
import ErrorMessage from "../Helper/error-message";
import { useEffect } from "react";
import FormButton from "@/components/Login/form-button";

export default function LoginFormEsqueceu() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) {
      window.location.href = "/conta";
    }
  }, [state.ok]);

  return (
    <form action={action}>
      <Input
        type="text"
        label="E-mail / Usuário"
        name="login"
        placeholder="Informe e-mail ou usuário "
      />
      <ErrorMessage error={state.error} />
      <FormButton text="Enviar e-mail" loading="Enviando..." />
    </form>
  );
}
