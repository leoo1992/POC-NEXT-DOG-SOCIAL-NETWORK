"use client";

import photosGet, { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";
import { useEffect, useRef, useState } from "react";

export default function Feed({
  photos,
  user = 0,
}: {
  photos: { data: Photo[] | null | [] } | undefined | null;
  user?: 0 | string | undefined;
}) {
  const photoArray = photos?.data || [];
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(photoArray);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [infinite, setInfinite] = useState<boolean>(!(photoArray.length < 6));
  const fetching = useRef<boolean>(false);

  function InfiniteScroll() {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (page === 1) return;

    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 6, user },
        { cache: "no-store" }
      );
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);

        if (data.length < 6) setInfinite(false);
      }
    }

    getPagePhotos(page);
  }, [page]);

  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", InfiniteScroll);
      window.addEventListener("whell", InfiniteScroll);
    } else {
      window.removeEventListener("scroll", InfiniteScroll);
      window.removeEventListener("whell", InfiniteScroll);
    }
    return () => {
      window.removeEventListener("scroll", InfiniteScroll);
      window.removeEventListener("whell", InfiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      {loading && (
        <p style={{ textAlign: "center", padding: "5px" }}>Carregando...</p>
      )}
    </div>
  );
}
