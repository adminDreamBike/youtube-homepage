import styled, { css } from "styled-components";

export const StyledSideBar = styled.div(() => [
  css`
    background-color: red !important;
    > div {
      width: 30vh;
    }
  `,
]);
