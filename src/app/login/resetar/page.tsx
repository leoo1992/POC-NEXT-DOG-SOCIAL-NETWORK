import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete sua senha",
}

export default async function ResetarPage() {
  return (
    <main>
      <h1 className="title">Resetar</h1>
    </main>
  );
}
