import { AspectRatio } from "@chakra-ui/react";

export const VideoPlayer = ({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) => {
  return (
    <AspectRatio ratio={2 / 1} width={{ base: "500px", md: "460px" }}>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        loading="lazy"
      />
    </AspectRatio>
  );
};
