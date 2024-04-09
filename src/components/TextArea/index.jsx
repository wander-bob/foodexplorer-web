import { Container } from "./styles";

export function TextArea({id,title, placeholder, onChange, value}){
  return(
    <Container onChange={onChange} >
      <label htmlFor={id}>{title}</label>
      <textarea id={id} placeholder={placeholder} value={value}></textarea>
    </Container>
  )
}