import { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";

export default function Feed({photos}:{photos: Photo[] | undefined }) {
    return (
      <div>
            <FeedPhotos photos={photos}/>
      </div>
    )
  }
  