import { useQuery } from "@tanstack/react-query";
import { getVideo } from "@/lib/api/video";
import { IVideo } from "../types";

export const useVideos = ({ url, q }: IVideo) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["videos", "items", url, q],
    queryFn: () => getVideo({ url, q }),
  });

  return { videos: data, isLoading, isError, error, isSuccess };
};
