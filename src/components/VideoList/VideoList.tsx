"use client";

import { useVideoStore } from "@/stores/videos";
import { Video } from "../Video/Video";
import { useVideos } from "@/lib/queries/video";
import { useEffect } from "react";
import { StyledContainerVideos } from "./VideoList.styled";
import { IVideo } from "@/lib/types";
import { Text } from "@chakra-ui/react";

export const VideoList = ({ url, q }: IVideo) => {
  const { video, setVideos, filteredeVideo } = useVideoStore();
  const { videos, isLoading, isError } = useVideos({
    url: url,
    q: q,
  });

  useEffect(() => {
    if (videos) {
      setVideos(videos.data);
    }
  }, [setVideos, videos]);

  const currentVideos = filteredeVideo ? filteredeVideo : video;

  return (
    <StyledContainerVideos>
      {isError && <Text fontSize="2xl">Error loading the videos</Text>}
      {!currentVideos.items[0] ? (
        <Text fontSize="2xl">There is not videos to show 🥲🎥</Text>
      ) : (
        currentVideos?.items?.map((item) => {
          return (
            <Video
              key={self.crypto.randomUUID()}
              video={item}
              isLoading={isLoading}
            />
          );
        })
      )}
    </StyledContainerVideos>
  );
};
