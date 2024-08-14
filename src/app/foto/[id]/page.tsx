import photoGet from "@/actions/photo-get";

export default async function FotoIdPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  const { data } = await photoGet(params.id);

  if (!data) return null;
  return (
    <section className="container mainContainer">
      <h1 className="title">{data.photo?.title}</h1>
    </section>
  );
}
