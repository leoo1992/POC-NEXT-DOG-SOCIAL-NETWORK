"use server";

import { PASSWORD_RESET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { redirect } from "next/navigation";

export default async function passReset(state: {}, formData: FormData) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const login = formData.get("login") as string | null;
  const key = formData.get("key") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!login || !key || !password) {
      throw new Error("Preencha todos os campos");
    }

    if (password.length < 6) {
      throw new Error("A senha deve ter mais de 6 digitos");
    }

    const { url } = PASSWORD_RESET(),
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
    if (!response.ok) throw new Error("Não autorizado");
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect("/login");
}
