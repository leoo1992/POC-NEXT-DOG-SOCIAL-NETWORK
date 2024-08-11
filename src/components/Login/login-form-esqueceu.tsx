"use client";

import passLost from "@/actions/pass-lost";
import { useFormState } from "react-dom";
import Input from "@/components/UX/Input";
import ErrorMessage from "../Helper/error-message";
import FormButton from "../UX/Button/form-button";
import styles from "./login-form.module.css";
import { useEffect, useState } from "react";

export default function LoginFormEsqueceu() {
  const [state, action] = useFormState(passLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = useState("");
  useEffect(() => {
  setUrl(window.location.href.replace("esqueceu", "resetar"));  

  }, [])

  return (
    <form action={action} className={styles.form}>
      <Input
        type="text"
        label="E-mail / Usuário"
        name="login"
        placeholder="Informe e-mail ou usuário "
      />
      <input
        type="hidden"
        name="url"
        value={url}
        disabled
        hidden
      />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: "#4c1" }}>Email enviado.</p>
      ) : (
        <FormButton text="Enviar e-mail" loading="Enviado..." />
      )}
    </form>
  );
}
