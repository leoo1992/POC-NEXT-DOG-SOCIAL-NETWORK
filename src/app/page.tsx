import photosGet from "@/actions/photos-get";
import Feed from "@/components/UX/Feed";

export default async function Home() {

  const data = await photosGet();

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
