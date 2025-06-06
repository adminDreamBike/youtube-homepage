/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getCategories } from "@/lib/utils/utils";
import { useVideoActions } from "@/stores/videos";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

export const Filter = () => {
  const { setVideosByCategory } = useVideoActions();

  const [category] = useState<Array<any>>(getCategories());
  const [activeButton] = useState<string>("0");

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
        onClick={() => setVideosByCategory("all")}
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
            onClick={(event) => setVideosByCategory(event.currentTarget.value)}
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
