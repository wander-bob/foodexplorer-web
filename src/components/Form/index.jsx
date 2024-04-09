import { Container } from "./styles";

export function Form({title, children}){
  return(
    <Container>
      {title ? <legend>{title}</legend> : ""}
      <fieldset>
        {children}
      </fieldset>
    </Container>
  )
}