import { Container } from "./styled";
export function ButtonLink({content, destination}){
  return(
    <Container to={destination}>
      {content}
    </Container>
  )
}