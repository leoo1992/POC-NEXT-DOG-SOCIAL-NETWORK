"use client";

import userPost from "@/actions/user-post";
import { useFormState } from "react-dom";
import Input from "@/components/UX/Input";
import ErrorMessage from "../Helper/error-message";
import { useEffect } from "react";
import FormButton from "@/components/Login/form-button";

export default function LoginFormCriar() {
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
        type="email"
        label="E-mail"
        name="email"
        placeholder="Seu melhor e-mail "
      />
      <Input
        type="text"
        label="Usuário"
        name="username"
        placeholder="Seu nome de usuário"
      />
      <Input
        type="password"
        label="Senha"
        name="password"
        placeholder="Crie sua senha"
      />
      <ErrorMessage error={state.error} />
      <FormButton text="Cadastrar" loading="Cadastrando..." />
    </form>
  );
}
