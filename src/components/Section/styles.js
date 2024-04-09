import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  > h2 { 
    ${theme.fonts.roboto._300_regular_small};
    color: ${theme.colors.light._400};
    margin-bottom: 1.6rem;
  }
`
export const ItemsWrapper = styled.div`
  min-height: 4.8rem;
  padding: 0.8rem;
  background: ${theme.colors.dark._800};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.6rem;
  flex-wrap: wrap;
`;