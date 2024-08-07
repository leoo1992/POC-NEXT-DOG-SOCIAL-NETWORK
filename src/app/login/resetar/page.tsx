import LoginFormResetar from "@/components/Login/login-form-resetar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete sua senha",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({
  searchParams,
}: Readonly<ResetarSearchParams>) {
  console.log(searchParams);

  return (
    <div className="animeLeft">
      <h1 className="title">Resetar senha</h1>
      <LoginFormResetar keyToken={searchParams.key} login={searchParams.login } />
    </div>
  );
}
