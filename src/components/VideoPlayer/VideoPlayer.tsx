import { AspectRatio, Box } from "@chakra-ui/react";

export const VideoPlayer = ({
  videoId,
  title,
  width = '-webkit-fill-available',
}: {
  videoId: string;
  title: string;
  width?: string;
}) => {
  return (
    <AspectRatio ratio={2 / 1} width={width}>
      <Box
        as="iframe"
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        loading="lazy"
       
      />
    </AspectRatio>
  );
};
