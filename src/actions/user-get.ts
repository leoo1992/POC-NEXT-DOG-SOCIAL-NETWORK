"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";
//import { cache } from "react";

type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function userGet() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  try {
    const token = cookies().get("Authtoken")?.value;

    if (!token) throw new Error("Token não encontardo");
    const { url } = USER_GET(),
      response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },

        next: {
          revalidate: 60,
        },
      });
    if (!response.ok) throw new Error("Erro ao buscar usuário");

    const data = (await response.json()) as User;

    return { data: data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

// const userGetCache = cache(userGet);
// export default userGetCache;
