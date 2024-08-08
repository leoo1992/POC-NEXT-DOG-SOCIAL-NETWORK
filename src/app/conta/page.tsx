import { useUser } from "@/context/user-context";

export default async function ContaPage()
{
  const {user} = useUser();

  return (
    <main>
      <h1 className="title">Conta: {user?.nome}</h1>
    </main>
  );
}
