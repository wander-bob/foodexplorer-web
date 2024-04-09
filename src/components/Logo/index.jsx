import {PiHexagonFill as LogoIcon} from "react-icons/pi";

import { Container, LogoWrapper } from "./styles";

export function Logo({alternativeProfile, className}){
  return(
    <Container className={className??""}>
      <LogoWrapper >
        <LogoIcon />
        <h2>food explorer</h2>
      </LogoWrapper>
      {alternativeProfile ? <small>admin</small> : ""}
    </Container>
  )
}