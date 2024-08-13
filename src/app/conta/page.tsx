import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/UX/Feed";
import { Metadata } from "next";
import Link from "next/link";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Minha conta",
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const photos = await photosGet({ user: user?.username });

  return (
    <section>
      {photos.data?.length ? (
        <Feed photos={photos} user={user?.username} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Sem fotos para mostrar, adicione uma foto.
          </p>
          <Link
            href={"/conta/postar"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}
