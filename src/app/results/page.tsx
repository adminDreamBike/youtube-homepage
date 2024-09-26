"use client";

import { VideoList } from "@/components/VideoList/VideoList";
import { Flex, Skeleton } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const q_param = searchParams.get("q") || "";
  const URL_SEARCH_VIDEOS = "https://www.googleapis.com/youtube/v3/search";

  return (
    <Suspense fallback={<Skeleton height="40px" fadeDuration={4} />}>
      <Flex flexDirection="column" gap="20px" marginTop="20px">
        <VideoList url={URL_SEARCH_VIDEOS} q={q_param} type="video" />
      </Flex>
    </Suspense>
  );
}
