"use client";

import login from "@/actions/login";
import { useFormStatus, useFormState } from "react-dom";
import Button from "@/components/UX/Button";
import Input from "@/components/UX/Input";
import ErrorMessage from "../Helper/error-message";

function FormButton() {
  const { pending } = useFormStatus();
  
  return (
    <>
      {pending ? (
        <Button disabled>Entrando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  return (
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
      <FormButton />
    </form>
  );
}
