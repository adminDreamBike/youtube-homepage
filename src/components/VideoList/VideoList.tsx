/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useVideoActions, useFilteredVideos } from "@/stores/videos";
import { Video } from "../Video/Video";
import { useVideos } from "@/lib/queries/video";
import { useEffect } from "react";
import { StyledContainerVideos } from "./VideoList.styled";
import { IVideo } from "@/lib/types";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { BsCameraVideoOff } from "react-icons/bs";
import { Filter } from "../Filter/Filter";

export const VideoList = ({ url, q }: IVideo) => {
  const { setVideos } = useVideoActions();
  const filteredVideos = useFilteredVideos();

  const { videos, isLoading, isError, error, isSuccess } = useVideos({
    url: url,
    q: q,
  });

  useEffect(() => {
    if (isSuccess) {
      setVideos(videos?.data);
    }
  }, [setVideos, isSuccess, videos?.data]);

  if (isLoading) return <Spinner size="xl" alignSelf="center" />;

  return (
    <Flex flexDirection="column" gap="12px">
      {videos && <Filter />}
      <StyledContainerVideos>
        {isError && (
          <Text fontSize="2xl" color={"color.red"}>
            Error {error?.message}{" "}
          </Text>
        )}
        {filteredVideos?.length === 0 && !isError ? (
          <Flex alignItems="center">
            <Text fontSize="2xl" marginRight="14px" color="#ff9999">
              No videos found for this category
            </Text>
            <BsCameraVideoOff fontSize="30px" color="#ff9999" />
            🥲
          </Flex>
        ) : (
          filteredVideos?.map((item: any) => {
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
