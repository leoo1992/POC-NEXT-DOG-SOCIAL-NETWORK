
export default async function PerfilUserPage({
  params,
}: Readonly<{
    params: { user: string };
}>) {
  return (
    <section>
      <h1 className="title">{params.user}</h1>
    </section>
  );
}
