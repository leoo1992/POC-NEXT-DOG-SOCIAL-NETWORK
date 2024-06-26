export default async function FotoIdPage({params}:Readonly<{params:{id: number}}>) {
  return (
    <main>
      <h1 className="title">{params.id}</h1>
    </main>
  );
}