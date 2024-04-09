import { Container, ItemsWrapper } from "./styles";

export function Section({title, children, id}){
  return(
    <Container id={id} >
      <h2>{title}</h2>
      <ItemsWrapper>
        {children}
      </ItemsWrapper>
    </Container>
  )
}