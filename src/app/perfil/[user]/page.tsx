
export default async function PerfilUserPage({
  params,
}: Readonly<{
    params: { user: string };
}>) {
  return (
    <main>
      <h1 className="title">{params.user}</h1>
    </main>
  );
}
