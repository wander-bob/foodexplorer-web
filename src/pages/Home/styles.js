import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-height: 100vh;
`;
export const Content = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 11.4rem auto 7.8rem;
  > main {
    > button {
      display: inline;
      padding: 1rem;
      margin-top: 3.6rem;
      text-align: left;
      width: 100%;
      font-size: 2.4rem;
      font-weight: 300;
      border-bottom: 1px solid ${theme.colors.dark._1000};
    }
  }
`;