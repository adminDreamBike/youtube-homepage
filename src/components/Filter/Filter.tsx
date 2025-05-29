/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getCategories } from "@/lib/utils/utils";
import { useVideoActions, useFilteredVideos } from "@/stores/videos";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export const Filter = () => {
  const filteredVideos = useFilteredVideos();
  const {setFilteredVideos} = useVideoActions();

  const [category, setCategory] = useState<Array<any>>([]);
  const [activeButton, setActiveButton] = useState<string>("0");

  useEffect(() => {
    setCategory(getCategories());
  }, []);

  const handleFilterVideo = (categoryId: string) => {
    const newVideo = {
      ...filteredVideos,
      items: [
        filteredVideos.items.find((item: any) => item.snippet.categoryId === categoryId),
      ],
    };
    setActiveButton(categoryId);
    setFilteredVideos(newVideo);
  };

  const handleClearFilters = () => {
    setFilteredVideos(filteredVideos);
    setActiveButton("0");
  };

  return (
    <ButtonGroup
      spacing="4"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="12px 0"
    >
      <Button
        className={activeButton === "0" ? "bg-black text-white" : ""}
        onClick={handleClearFilters}
        height="30px"
      >
        All
      </Button>
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
