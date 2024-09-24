"use client";

import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import {
  Flex,
  Link,
  Text,
  Image,
  IconButton,
  Button,
  Badge,
  Skeleton,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import NextLink from "next/link";
import { useVideoStore } from "@/stores/videos";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { TiArrowForward } from "react-icons/ti";
import { RxDotsHorizontal } from "react-icons/rx";
import { Video } from "@/components/Video/Video";
import { useMediaQuery } from "@chakra-ui/react";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("id") || "";
  const { getVideoById, video } = useVideoStore();
  const videoById = getVideoById(videoId);
  const snippetVideo = videoById?.snippet;
  const statisticsVideo = videoById?.statistics;
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <Suspense fallback={<Skeleton />}>
      <Flex flexDirection={isLargerThan1000 ? "row" : "column"}>
        <Flex
          justifyContent="center"
          flexDirection="column"
          padding="10px 20px"
          w={{ base: "500px", md: "700px", lg: "1000px" }}
          margin="0 auto"
        >
          <VideoPlayer videoId={videoId} title={snippetVideo?.title || ""} />
          <Text fontWeight="bold" fontSize="x-large" margin="12px 0">
            {snippetVideo?.title || ""}
          </Text>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Flex flexDirection="row" gap="12px">
              <Link
                as={NextLink}
                href="https://www.youtube.com/@cbssportsgolazo"
              >
                <Image
                  src="https://yt3.ggpht.com/EKBT19BrrkDkhoxOjenonvDxIf0s4wDljOnCzPos7z3qAbmwA_cgNCDY_a1i_K_3dhH1BWmknQ=s240-c-k-c0x00ffffff-no-rj"
                  alt="image channel"
                  borderRadius="full"
                  boxSize="45px"
                />
              </Link>
              <Flex flexDirection="column">
                <Text>{snippetVideo?.channelTitle}</Text>
                <Text fontSize="8px">5 K Suscriptores</Text>
              </Flex>
            </Flex>
            <Flex gap="10px">
              <Button variant="solid" color="black" background="#f2f2f2">
                Unirme
              </Button>
              <Button color="white" background="black">
                Suscribirme
              </Button>
            </Flex>
            <Flex
              flexGrow="0.2"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                rightIcon={<LuThumbsUp />}
                aria-label="thumbs up"
                size="sm"
              >
                {videoById?.statistics.likeCount}
              </Button>
              <Button
                leftIcon={<LuThumbsDown />}
                aria-label="thumbs down"
                size="sm"
              />
              <IconButton as={TiArrowForward} aria-label="share">
                Compartir
              </IconButton>
              <IconButton
                aria-label="more options button"
                as={RxDotsHorizontal}
                isRound={true}
              />
            </Flex>
          </Flex>
          <Badge
            whiteSpace="pre-wrap"
            color="black"
            background="#f2f2f2"
            borderRadius="5%"
            marginTop="20px"
            padding="10px"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {statisticsVideo?.viewCount || ""} visualizaciones <br />
            {snippetVideo?.description}
          </Badge>
        </Flex>
        <Flex flexDirection="column" padding="10px 20px" gap="12px">
          {video?.items.map((item) => {
            return (
              <Video
                key={self.crypto.randomUUID()}
                video={item}
                isSuggested={true}
              />
            );
          })}
        </Flex>
      </Flex>
    </Suspense>
  );
}
