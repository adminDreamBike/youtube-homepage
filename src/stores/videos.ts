/* eslint-disable @typescript-eslint/no-explicit-any */
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
  filteredVideos?: any;
}

interface Actions {
  setVideos: (video: VideoState) => void;
  getVideoById: (id: string) => Item | undefined;
  setFilteredVideos: (filteredVideos: any) => void;
}

export interface VideoStore {
  video: VideoState;
  filteredVideos?: any;
  actions: Actions;
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
  filteredVideos: undefined,
};

const useVideoStore = create<VideoStore>((set, get) => ({
  video: INITIAL_STATE.video,
  filteredVideos: INITIAL_STATE.filteredVideos,
  actions: {
    setVideos: (video) => set(() => ({ video })),
    getVideoById: (id) => get().video.items.find((item) => item.id === id),
    setFilteredVideos: (filteredVideos) => set({ filteredVideos }),
  },
}));

export const useFilteredVideos = () =>
  useVideoStore((state) => state.filteredVideos);
export const useVideoActions = () => useVideoStore((state) => state.actions);
