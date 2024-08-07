"use client";

import login from "@/actions/login";
import { useFormState } from "react-dom";
import Input from "@/components/UX/Input";
import ErrorMessage from "../Helper/error-message";
import { useEffect } from "react";
import FormButton from "@/components/Login/form-button";
import Link from "next/link";
import styles from "./login-form.module.css";

export default function LoginForm() {
  const [state, action] = useFormState(login, {
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
    <>
      <form action={action}>
        <Input
          type="text"
          label="Usuário"
          name="username"
          placeholder="Usuário"
        />
        <Input
          type="password"
          label="Senha"
          name="password"
          placeholder="Senha"
        />
        <ErrorMessage error={state.error} />
        <FormButton text="Entrar" loading="Entrando..." />
      </form>
      <Link className={styles.perdeu} href="/login/esqueceu">
        Esqueceu sua senha ?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
