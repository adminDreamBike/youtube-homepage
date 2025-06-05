import { useQuery } from "@tanstack/react-query";
import { fetchVideo } from "@/lib/api/video";
import { IVideo } from "../types";

export const useVideos = ({ url, q }: IVideo) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["videos", "items", url, q],
    queryFn: () => fetchVideo({ url, q }),
  });

  return { videos: data, isLoading, isError, error, isSuccess };
};
