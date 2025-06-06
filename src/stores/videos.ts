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
interface Actions {
  setVideos: (video: VideoState) => void;
  getVideoById: (id: string) => Item | undefined;
  setSelectedCategoryId: (selectedCategoryId: string) => void;
  setVideosByCategory: (categoryId: string) => void;
  clearFilters: () => void;
}

export interface VideoStore {
  video: VideoState;
  filteredVideosByCategory?: any;
  filteredVideos?: any;
  selectedCategoryId: string | null;
  actions: Actions;
}

const INITIAL_STATE = {
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
  filteredVideosByCategory: undefined,
};

const useVideoStore = create<VideoStore>((set, get) => ({
  video: INITIAL_STATE.video,
  filteredVideosByCategory: null,
  selectedCategoryId: "all",
  actions: {
    setVideos: (video) => set(() => ({ video })),
    getVideoById: (id) => get().video.items.find((item) => item.id === id),
    setSelectedCategoryId: (categoryId) =>
      set({ selectedCategoryId: categoryId }),
    setVideosByCategory: (categoryId) => {
      const { video } = get();
      if (categoryId === "all") {
        set({
          filteredVideosByCategory: video.items,
          selectedCategoryId: categoryId,
        });
        return;
      }
      const filteredVideos = video.items.filter(
        (item) => item.snippet.categoryId === categoryId
      );
      set({
        filteredVideosByCategory: filteredVideos,
        selectedCategoryId: categoryId,
      });
    },
    clearFilters: () =>
      set({ filteredVideos: null, selectedCategoryId: "all" }),
  },
}));

export const useFilteredVideos = () =>
  useVideoStore((state) => {
    if (!state.selectedCategoryId || state.selectedCategoryId === "all") {
      return state.video.items;
    }
    return state.filteredVideosByCategory;
  });
export const useSelectedCategoryId = () =>
  useVideoStore((state) => state.selectedCategoryId);
export const useVideoActions = () => useVideoStore((state) => state.actions);
export const useVideos = () => useVideoStore((state) => state.video);
