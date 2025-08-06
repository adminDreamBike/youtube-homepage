import { AxiosError } from "axios";
import { TypeVideo } from "../types";
import apiClient from "./apiClient";

export const getVideo = async ({
  url,
  q,
  type = "video",
}: {
  url: string;
  q?: string;
  type?: TypeVideo;
}) => {
  const withStatistics = q ? "snippet" : "id, statistics, snippet";
  const params = {
    key: "AIzaSyBrIu3zYBXZb4gJMdPmywCS-hFA1ESy590",
    part: withStatistics,
    chart: "mostPopular",
    maxResults: 25,
    q: q,
    type: type,
  };
  
  try {
    const response = apiClient.get(url, {
      params: params,
    });
    return response;
  } catch (error) {
    throw error as AxiosError;
  }
};
