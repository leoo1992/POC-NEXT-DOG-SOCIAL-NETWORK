"use server";

import { PASSWORD_LOST } from "@/functions/api";
import apiError from "@/functions/api-error";

export default async function passLost(state: {}, formData: FormData) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const login = formData.get("login") as string | null;
   
  const urlEsqueceu = formData.get("url") as string | null;

  try {
    if (!login) {
      throw new Error("Preencha todos os campos");
    }

    const { url } = PASSWORD_LOST(),
      response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({login: login, url: urlEsqueceu}),
      });
    if (!response.ok) throw new Error("Email ou usuário não cadastrado");

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
