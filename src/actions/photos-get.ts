"use server";

export type Photo = {
    id: number;
    author:string;
    title: string;
    date: string;
    src: string;
    peso: string;
    idade: string;
    acessos: string;
    total_comments: string;
}


export default async function photosGet() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const url =
      "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0",
    response = await fetch(url, { method: "GET" }),
    data = await response.json() as Photo[];

  return data;
}
