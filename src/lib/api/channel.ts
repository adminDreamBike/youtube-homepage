import axios, { AxiosError } from "axios";

export const searchChannel = async ({ channelId }: { channelId: string }) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          key: "AIzaSyBrIu3zYBXZb4gJMdPmywCS-hFA1ESy590",
          id: channelId,
          part: "snippet",
        },
      }
    );
    return response;
  } catch (error) {
    throw error as AxiosError;
  }
};
