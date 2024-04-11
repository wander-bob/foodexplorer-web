import { Container } from "./styles";

export function TextArea({id,title, placeholder, onChange, value}){
  return(
    <Container>
      <label htmlFor={id}>{title}</label>
      <textarea id={id} placeholder={placeholder} value={value} onChange={onChange}></textarea>
    </Container>
  )
}