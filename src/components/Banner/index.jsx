import { useEffect, useState } from "react";

import { Container, Content } from "./styles";
import bannerMobile from "../../assets/banner_mobile.png";
import bannerDesktop from "../../assets/banner_desktop.png";
export function Banner(){
  const [img, setImage] = useState(bannerMobile);
  function handleBannerImg(){
    let availWidth = window.screen.availWidth;
    const banner = availWidth <= 1023 ?  bannerMobile : bannerDesktop;
    setImage(banner);
  }
  useEffect(()=>{
    handleBannerImg()
    window.addEventListener("resize", ()=>{
        handleBannerImg()
    })
  },[img])
  return(
    <Container>
      <img src={img} alt="Food flying" />
      <Content>
        <h3>Sabores inigualáveis</h3>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </Content>
    </Container>
  )
}