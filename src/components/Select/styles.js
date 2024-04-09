import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: grid;
  gap: 1.6rem;
  > label {
    color: ${theme.colors.light._400};
    ${theme.fonts.roboto._300_regular_small};
  }
`;

export const SelectWrapper = styled.div`  
  min-height: 4.8rem;
  border-radius: 0.8rem;
  position: relative;
  display: grid;
  background: ${theme.colors.dark._900};
  > svg {
    align-self: center;
    right: 1.6rem;
    position: absolute;
    pointer-events: none;
    ${theme.icon_sizes.small_24x24};
  }
`;

export const Select = styled.select`
  display: grid;
  align-items: center;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  border-radius: 0.8rem;
  background-color: ${theme.colors.dark._900};
  color: ${theme.colors.light._400};
`;

export const Option = styled.option`
  background-color: ${theme.colors.dark._900};
  &:first-child{
    pointer-events: none;
  }
  &:disabled{
    background-color: ${theme.colors.dark._800};
  }
  
`;