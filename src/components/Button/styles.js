import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.button`
  width: 100%;
  min-height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.tomato._100};
  border-radius: .5rem;
  ${theme.fonts.poppins._100_medium};
`;