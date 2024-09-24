import { styled, css } from "styled-components";

export const StyledContainerVideos = styled.div(() => [
  css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px 24px;
    place-items: center;
    @media (min-width: 670px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
]);
