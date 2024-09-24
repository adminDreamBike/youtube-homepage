"use client";

import { getCategories } from "@/lib/utils/utils";
import { useVideoStore } from "@/stores/videos";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Filter = () => {
  const videos = useVideoStore((state) => state.video);
  const setFilteredVideos = useVideoStore((state) => state.setFilteredVideos);

  const [category, setCategory] = useState<any>();
  const [activeButton, setActiveButton] = useState<any>();

  useEffect(() => {
    setCategory(getCategories());
  }, []);

  const handleFilterVideo = (categoryId: string) => {
    const newVideo = {
      ...videos,
      items: [
        videos.items.find((item) => item.snippet.categoryId === categoryId),
      ],
    };
    setActiveButton(categoryId);
    setFilteredVideos(newVideo);
  };

  return (
    <ButtonGroup
      spacing="4"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="12px 0"
    >
      {category?.map((item) => {
        const keyItem = Object.keys(item).toString();
        return (
          <Button
            value={Object.keys(item)}
            key={keyItem}
            onClick={(event) => handleFilterVideo(event.currentTarget.value)}
            height="30px"
            className={activeButton === keyItem ? "bg-black text-white" : ""}
          >
            {Object.values(item)}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
