import { PiPlus as Plus, PiX as X } from "react-icons/pi";
import { Container } from "./styles"
export function Ingredient({isNew, value, onClick, onChange}){
  return (
    <Container data-is-new={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder={value ? "" : "Adicionar"}
        onChange={onChange}
      />
      <button data-is-new={isNew} type="button" onClick={onClick}>
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  )
}