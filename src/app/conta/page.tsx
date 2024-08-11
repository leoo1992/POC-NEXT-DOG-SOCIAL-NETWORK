import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Minha conta",
};

export default function ContaPage() {
  return (
    <main>
      <h1 className="title">conta</h1>
    </main>
  );
}
