import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  > label { 
    color: ${theme.colors.light._400};
  }
  > textarea {
    color: ${theme.colors.light._100};
    background-color: ${theme.colors.dark._800};
    padding: 1.4rem;
    border-radius: 0.8rem;
    resize: none;
    min-height: 17.2rem;
  }
`;