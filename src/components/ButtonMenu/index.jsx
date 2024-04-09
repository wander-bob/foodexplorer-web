import { Container } from "./styles";

export function ButtonMenu({isMenuOpen, onClick}){
  return(
    <Container className={isMenuOpen && "open"} type="button" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
    </Container>
  )
}