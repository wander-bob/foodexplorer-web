import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";
export const Container = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: ${theme.colors.light._100};
  ${theme.fonts.poppins._100_medium};
`;