"use server";

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function login(state: {}, formData: FormData) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !password) throw new Error("Preencha todos os campos");
    const { url } = TOKEN_POST(),
      response = await fetch(url, {
        method: "POST",
        body: formData,
      });

    if (!response.ok) throw new Error("Senha ou usuário inválidos");

    const data = await response.json();
    
    cookies().set("Authtoken", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
