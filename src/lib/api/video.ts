import axios, { AxiosError } from "axios";
import { TypeVideo } from "../types";

export const fetchVideo = async ({
  url,
  q,
  type = "video",
}: {
  url: string;
  q?: string;
  type?: TypeVideo;
}) => {
  const withStatistics = q ? "snippet" : "id, statistics, snippet";
  try {
    const response = axios.get(url, {
      params: {
        key: "AIzaSyBrIu3zYBXZb4gJMdPmywCS-hFA1ESy590",
        part: withStatistics,
        chart: "mostPopular",
        maxResults: 25,
        q: q,
        type: type,
      },
    });
    return response;
  } catch (error) {
    throw error as AxiosError;
  }
};
