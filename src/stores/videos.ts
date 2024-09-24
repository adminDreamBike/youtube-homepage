import { Item } from "@/lib/types";
import { create } from "zustand";

interface VideoState {
  kind: string;
  etag: string;
  items: Item[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
interface VideoStoreState {
  video: VideoState;
  filteredeVideo?: VideoState;
}

interface Actions {
  setVideos: (video) => void;
  getVideoById: (id: string) => Item;
  setFilteredVideos: (filteredVideos) => void;
}

const INITIAL_STATE: VideoStoreState = {
  video: {
    kind: "",
    etag: "",
    items: [],
    nextPageToken: "",
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0,
    },
  },
};

export const useVideoStore = create<VideoStoreState & Actions>((set, get) => ({
  video: INITIAL_STATE.video,
  setVideos: (video) => set(() => ({ video })),
  getVideoById(id: string) {
    const { video } = get();

    const filteredVideo = video.items.find((item) => item.id === id);

    return filteredVideo;
  },
  filteredVideos: {},
  setFilteredVideos: (filteredeVideo) => set(() => ({ filteredeVideo })),
}));
