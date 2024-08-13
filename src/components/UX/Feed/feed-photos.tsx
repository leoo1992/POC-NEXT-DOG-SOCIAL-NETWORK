import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

export default function FeedPhotos({
  photos,
}: {
  photos: Photo[] | undefined;
}) {
  const photoArray = Array.isArray(photos) ? photos : [];

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photoArray?.map((photo: Photo, i) => {
        return (
          <li className={styles.photo} key={photo?.id + i}>
            <Link href={`/foto/${photo.id}`} scroll={false}>
              <Image
                src={photo.src}
                width={1500}
                height={1500}
                alt={photo.title}
                sizes="80vw"
              />
              <span className={styles.visualizacao}>{photo.acessos}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
