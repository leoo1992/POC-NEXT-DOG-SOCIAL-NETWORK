"use client";

import userPost from "@/actions/user-post";
import { useFormState } from "react-dom";
import Input from "@/components/UX/Input";
import ErrorMessage from "../Helper/error-message";
import { useEffect } from "react";
import FormButton from "../UX/Button/form-button";
import styles from "./login-form.module.css";

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
    <form action={action} className={styles.form}>
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
