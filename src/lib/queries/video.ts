import { useQuery } from "@tanstack/react-query";
import { fetchVideo } from "@/lib/api/video";
import { IVideo } from "../types";

export const useVideos = ({ url, q }: IVideo) => {
  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => await fetchVideo({ url, q }),
  });

  return { videos: data, isLoading, isError, error, refetch, isSuccess };
};
