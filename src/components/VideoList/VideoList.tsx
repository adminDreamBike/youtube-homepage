"use client";

import { useVideoStore } from "@/stores/videos";
import { Video } from "../Video/Video";
import { useVideos } from "@/lib/queries/video";
import { useEffect } from "react";
import { StyledContainerVideos } from "./VideoList.styled";
import { IVideo } from "@/lib/types";
import { Flex, Text } from "@chakra-ui/react";
import { BsCameraVideoOff } from "react-icons/bs";
import { Filter } from "../Filter/Filter";

export const VideoList = ({ url, q }: IVideo) => {
  const { video, setVideos, filteredeVideo } = useVideoStore();
  const { videos, isLoading, isError, error, refetch } = useVideos({
    url: url,
    q: q,
  });

  useEffect(() => {
    if (videos) {
      setVideos(videos.data);
    }
  }, [setVideos, videos]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const currentVideos = filteredeVideo ? filteredeVideo : video;

  return (
    <Flex flexDirection="column" gap="12px">
      {videos && <Filter />}
      <StyledContainerVideos>
        {isError && <Text fontSize="2xl">Error {error?.message} </Text>}
        {!currentVideos.items[0] ? (
          <Flex alignItems="center">
            <Text fontSize="2xl" marginRight="14px" color="#ff9999">
              There is not videos to show
            </Text>
            <BsCameraVideoOff fontSize="30px" color="#ff9999" />
            🥲
          </Flex>
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
    </Flex>
  );
};
