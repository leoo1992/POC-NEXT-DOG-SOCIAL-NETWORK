"use client";

import { useFormState } from "react-dom";
import Input from "@/components/UX/Input";
import ErrorMessage from "../Helper/error-message";
import FormButton from "@/components/Login/form-button";
import styles from "./login-form.module.css";
import passReset from "@/actions/pass-reset";

export default function LoginFormResetar({
  keyToken,
  login,
}: Readonly<{
  keyToken: string;
  login: string;
}>) {
  const [state, action] = useFormState(passReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input
        type="password"
        label="Nova Senha"
        name="password"
        placeholder="Informe sua nova senha "
      />
      <input type="hidden" value={login} name="login" disabled hidden />
      <input type="hidden" value={keyToken} name="key" disabled hidden />
      <ErrorMessage error={state.error} />

      <FormButton text="Resetar Senha" loading="Resetando..." />
    </form>
  );
}
