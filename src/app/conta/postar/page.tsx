import ContaFormPostar from "@/components/Conta/conta-form-postar-foto";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postar | Minha conta",
};

export default async function PostarPage() {
  return <ContaFormPostar />;
}
