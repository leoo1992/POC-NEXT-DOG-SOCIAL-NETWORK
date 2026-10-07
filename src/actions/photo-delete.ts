"use server";
import { PHOTO_DELETE } from "@/functions/api";
import apiError from "@/functions/api-error";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoDelete(id: string) {
  const token = (await cookies()).get("Authtoken")?.value;
  try {
    if (!token )
      throw new Error("Token inválido");
    const { url } = PHOTO_DELETE(id);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) throw new Error("Erro ao deletar a foto.");
  } catch (error: unknown) {
    return apiError(error);
  }
  updateTag("photos");
  redirect("/conta");
}
