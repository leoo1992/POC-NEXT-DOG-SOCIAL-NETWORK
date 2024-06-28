"use client";

import login from "@/actions/login";
import { useFormStatus } from "react-dom";
import Button from "@/components/UX/Button";
import Input from "@/components/UX/Input";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          Entrando...
        </Button>
      ) : (
        <Button>
          Entrar
        </Button>
      )}
    </>
  );
}

export default function LoginForm() {
  return (
    <form action={login}>
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
      <FormButton />
    </form>
  );
}
