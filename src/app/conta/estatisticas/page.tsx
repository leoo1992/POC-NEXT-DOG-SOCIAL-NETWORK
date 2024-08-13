import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estatisticas | Minha conta",
}

export default async function EstatisticasPage()
{
  return (
    <section>
      <h1 className="title">Estatisticas</h1>
    </section>
  );
}