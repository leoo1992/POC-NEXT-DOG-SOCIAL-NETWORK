import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar conta",
  description: "Recupere sua senha",
}

export default async function EsqueceuPage()
{
  return (
    <main>
      <h1 className="title">Esqueceu</h1>
    </main>
  );
}
