import { Container } from "./styles";

export function Button({content, onClick}){
  return(
    <Container onClick={onClick} type="button">
      {content}
    </Container>
  )
}