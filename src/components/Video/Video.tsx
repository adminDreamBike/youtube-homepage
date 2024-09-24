"use client";

import {
  Flex,
  Link,
  Text,
  Image,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Item } from "@/lib/types";
import { Suspense } from "react";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";

export const Video = ({
  video,
  isLoading,
  isSuggested = false,
}: {
  video: Item;
  isLoading?: boolean;
  isSuggested?: boolean;
}) => {
  const { id, snippet, statistics } = video || {};

  return (
    <Flex
      flexDirection={isSuggested ? "row" : "column"}
      width={{ base: "500px", md: "460px" }}
    >
      <Suspense fallback={<Skeleton isLoaded={!isLoading} />}>
        <VideoPlayer
          videoId={typeof id === "string" ? id : id?.videoId}
          title={snippet?.title}
        />
      </Suspense>

      <Flex flexDirection="row" gap="12px" marginTop="12px">
        {!isSuggested && (
          <SkeletonCircle size="10" isLoaded={!isLoading}>
            <Link as={NextLink} href="https://www.youtube.com/@cbssportsgolazo">
              <Image
                src="https://yt3.ggpht.com/EKBT19BrrkDkhoxOjenonvDxIf0s4wDljOnCzPos7z3qAbmwA_cgNCDY_a1i_K_3dhH1BWmknQ=s240-c-k-c0x00ffffff-no-rj"
                alt="image channel"
                borderRadius="full"
                boxSize="45px"
              />
            </Link>
          </SkeletonCircle>
        )}

        <Flex flexDirection="column">
          <Link as={NextLink} href={`/watch?id=${id}&title=${snippet?.title}`}>
            <Text fontWeight="bold">{snippet?.title}</Text>
          </Link>
          <Text color="#aaaaaa">{snippet?.channelTitle}</Text>
          <Flex flexDirection="row" color="#aaaaaa">
            {statistics && (
              <Text marginRight="5px">{statistics?.viewCount} Views </Text>
            )}
            <Text marginLeft="5px">{snippet?.publishedAt.toString()}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
