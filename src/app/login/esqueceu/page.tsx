import LoginFormEsqueceu from "@/components/Login/login-form-esqueceu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar conta",
  description: "Recupere sua senha",
}

// export const dynamic = 'force-dynamic';

export default async function EsqueceuPage()
{
  return (
    <div className="animeLeft">
      <h1 className="title">Esqueceu a senha?</h1>
      <LoginFormEsqueceu/>
    </div>
  );
}
