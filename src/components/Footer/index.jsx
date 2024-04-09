import { Logo } from "../Logo";
import { Container } from "./styles";

export function Footer(){
  return(
    <Container>
      <Logo />
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}