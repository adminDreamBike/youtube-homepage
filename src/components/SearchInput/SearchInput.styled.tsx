import styled, { css } from "styled-components";

export const StyledInputContainer = styled.div(() => [
  css`
    display: flex;
    flex-direction: row;
    width: 160px;
    input {
      width: 160px;
    }
    input ~ div {
      right: 0px;
    }
    @media (min-width: 670px) {
      input {
        width: 300px;
      }
    }
    @media (min-width: 1280px) {
      input {
        width: 500px;
      }
    }
  `,
]);
