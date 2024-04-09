import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  > span { 
    color: ${theme.colors.light._400};
  }
  > label {
    cursor: pointer;
    border-radius: 0.8rem;
    padding: 1.2rem 2.4rem;
    background-color: ${theme.colors.dark._800};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    ${theme.fonts.poppins._100_medium};
    > svg {
      ${theme.icon_sizes.small_24x24};
      fill: ${theme.colors.light._100};
    }
    > input {
      display: none;
    }
  }
`;