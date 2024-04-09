import styled from "styled-components";
import { theme } from "../../styles/theme"
export const Container = styled.div`
  min-height: 12rem;
  
  min-width: 100%;
  position: relative;
  display: flex;
  background: ${theme.colors.gradient._200};
  border-radius: 0.4rem;
  margin-bottom: 6.2rem;
  > img{
    position: absolute;
    bottom: 0;
    left: -2.4rem;
    ${theme.image_sizes.banner_mobile_191x149};
  }
  @media(${theme.screens.medium}){
    min-height: 20rem;
    > img {
      left: -4.4rem;
      ${theme.image_sizes.banner_tablet_360x280};
    }
  }
  @media(${theme.screens.large}){
    min-height: 26rem;
    border-radius: 0.8rem;
    > img { 
      left: -7.2rem;
      bottom: -1.4rem;
      ${theme.image_sizes.banner_desktop_632x406};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: absolute;
  right: 1.4rem;
  bottom: 2.2rem;
  > h3 {
    white-space: nowrap;
    font-size: 1.8rem;
    line-height: 140%;
   }
   > p {
    font-size: 1.2rem;
    line-height: 140%;
    max-width: 20rem;
    color: ${theme.colors.light._200};
   }
   @media(${theme.screens.medium}){
    right: 3.2rem;
    bottom: 5.6rem;
    gap: 0.8rem;
    > h3 {
      font-size: 2.4rem;
    }
    > p {
      max-width: 28rem;
      font-size: 1.6rem;
      color: ${theme.colors.light._300};
    }
   }
   @media(${theme.screens.large}){
    right: 2.8rem;
    bottom: 7.2rem;
    > h3 {
      font-size: 2.8rem;
    }
    > p {
      font-size: 1.8rem;
      max-width: 32rem;
    }
   }
   @media(${theme.screens.extra_large}){
    right: 20rem;
    bottom: 8rem;
    > h3 {
      ${theme.fonts.poppins._500_medium};
    }
    > p {
      ${theme.fonts.roboto._300_regular_small};
      max-width: 100%;
    }
   }
`;