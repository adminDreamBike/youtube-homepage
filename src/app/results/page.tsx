"use client";

import { Filter } from "@/components/Filter/Filter";
import { VideoList } from "@/components/VideoList/VideoList";
import { Flex } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const q_param = searchParams.get("q") || "";
  const URL_SEARCH_VIDEOS = "https://www.googleapis.com/youtube/v3/search";

  return (
    <Flex flexDirection="column" gap="20px">
      <Filter />
      <VideoList url={URL_SEARCH_VIDEOS} q={q_param} type="video" />
    </Flex>
  );
}
