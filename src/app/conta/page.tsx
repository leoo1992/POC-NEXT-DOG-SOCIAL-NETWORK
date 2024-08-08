import userGet from "@/actions/user-get";

export default async function ContaPage()
{
  const { data } = await userGet();

  return (
    <main>
      <h1 className="title">Conta: {data?.email}</h1>
    </main>
  );
}
