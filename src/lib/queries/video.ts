import { useQuery } from "@tanstack/react-query";
import { fetchVideo } from "@/lib/api/video";

export const useVideos = ({ url, q }) => {
  const { data, refetch, isLoading, isFetching, isError } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => await fetchVideo({ url, q }),
  });

  return { videos: data, refetch, isLoading, isFetching, isError };
};
