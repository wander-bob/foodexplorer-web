import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  > label{ 
    ${theme.fonts.roboto._300_regular_small};
    color: ${theme.colors.light._400};
    transition: color .3s ease-in-out;
    &.text-error { 
      color: red;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 1.4rem 1.6rem;
  display: flex;
  gap: 1.4rem;
  background-color: ${theme.colors.dark._900};
  border-radius: .8rem;
  > svg {
    stroke: ${theme.colors.light._400};
  }
  > input {
    width: 100%;
    ${theme.fonts.roboto._300_regular_small};
    &::placeholder {
      color: ${theme.colors.light._500};
      ${theme.fonts.roboto._300_regular_small};
    }
  }
`;