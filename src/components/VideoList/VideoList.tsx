/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useVideoActions,
  useFilteredVideos,
  useChannelIds,
} from "@/stores/videos";
import { Video } from "../Video/Video";
import { useVideos } from "@/lib/queries/video";
import { useEffect } from "react";
import { StyledContainerVideos } from "./VideoList.styled";
import { IVideo } from "@/lib/types";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { BsCameraVideoOff } from "react-icons/bs";
import { Filter } from "../Filter/Filter";
import { useChannel } from "@/lib/queries/channel";

export const VideoList = ({ url, q }: IVideo) => {
  const { setVideos, getChannelId } = useVideoActions();
  const filteredVideos = useFilteredVideos();
  const channelIds = useChannelIds();

  const { videos, isLoading, isError, error, isSuccess } = useVideos({
    url: url,
    q: q,
  });
  const { channels = {}} = useChannel({ channelId: channelIds });

  const data = {
    channels: [{ ...channels }],
    videos: [{ ...filteredVideos }],
  };

  console.log("videoWithChannels", data);

  useEffect(() => {
    if (isSuccess) {
      setVideos(videos?.data);
    }
  }, [setVideos, isSuccess, videos?.data]);

  useEffect(() => {
    if (isSuccess) {
      getChannelId();
    }
  }, [isSuccess, getChannelId]);

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
          filteredVideos?.map((item: any, index: number) => {

            return (
              <Video
                key={self.crypto.randomUUID()}
                video={item}
                isLoading={isLoading}
                channels={channels[index]}
              />
            );
          })
        )}                
      </StyledContainerVideos>
    </Flex>
  );
};
