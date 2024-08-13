import { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";

export default function Feed({
  photos,
}: {
  photos: { data: Photo[] } | undefined;
}) {
  const photoArray = photos?.data || [];

  return (
    <div>
      <FeedPhotos photos={photoArray} />
    </div>
  );
}
