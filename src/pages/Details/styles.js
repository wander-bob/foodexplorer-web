import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 11.4rem auto 7.8rem;
  > main {
    > button {
      display: flex;
      align-items: center;
      gap: .8rem;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 140%;
      > svg { 
        font-size: 3.2rem; 
      }
    }
  }
`;
export const Content = styled.div`
  padding-inline: 1.6rem;
  @media (${theme.screens.medium}){
    display: flex;
    gap: 3.2rem;
  }
`;
export const ImageWrapper = styled.div`
  margin-block: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    ${theme.image_sizes.medium_264x264};
  }
  @media(${theme.screens.medium}){
    > img { 
      ${theme.image_sizes.large_389x389};
    }
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  > h2 { 
    font-size: 2.8rem;
    font-weight: 500;
  }
  > p {
    text-align: center;
  }
  > div:last-child{
    margin-top: 2.4rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    > button:last-child{
      padding: 1.2rem 2.4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;
      background-color: ${theme.colors.tomato._100};
      color: ${theme.colors.light._100};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 160%;
      border-radius: .4rem;
      white-space: nowrap;
      > svg { 
        ${theme.icon_sizes.small_24x24};
      }
    }
  }
  > button:last-child{
    padding: 1.2rem 2.4rem;
  }
  @media (${theme.screens.medium}){
    margin-top: 4.4rem;
    align-items: start;
    > p {
      text-align: left;
    }
    > div:last-child{
      justify-content: start;
      > button:last-child{
        width: auto;
      }
    }
    > button:last-child{
      width: auto;
    }
  }
`;
export const IngredientsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 2.4rem;
  row-gap: 1.6rem;
  @media (${theme.screens.large}){
    display: flex;
    flex-direction: row;
    padding: 0;
  }
`;
export const Ingredient = styled.span`
  height: 3.2rem;
  padding: 0.4rem 0.8rem;
  display: inline-block;
  border-radius: 0.5rem;
  color: ${theme.colors.light._100};
  background: ${theme.colors.dark._1000};
  ${theme.fonts.poppins._100_medium};
  text-transform: lowercase;
  text-align: center;
  white-space: nowrap;
`;