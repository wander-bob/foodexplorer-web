import { FiSearch as SearchIcon} from "react-icons/fi";
import { Container, InputWrapper } from "./styles";

export function Input({id, title, value, placeholder, type, onChange, required, autoFocus}){
  return(
    <Container >
      {title ? <label htmlFor={id}>{title}</label> : "" }
      <InputWrapper>
        {type === "search" ? <SearchIcon size={20} /> : "" }
        <input autoFocus={autoFocus} id={id} type={type ?? "text" } 
          required={required ?? required}
          placeholder={placeholder} onChange={onChange} 
          value={value}
        />
      </InputWrapper>
    </Container>
  )
}