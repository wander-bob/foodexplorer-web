import { PiUploadSimple as Upload } from "react-icons/pi"; 

import { Container } from "./styles";
export function InputFile({title, onChange}){
  return(
    <Container >
      <span>{title ?? ""}</span>
      <label htmlFor="file">
        <Upload />
        Selecione uma imagem
        <input type="file" id="file" onChange={onChange} />
      </label>
    </Container>
  )
}