import LoginCriarForm from "@/components/Login/login-form-criar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta",
}

export default async function NovoPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
}
