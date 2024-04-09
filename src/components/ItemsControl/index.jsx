import { PiPlusBold as Plus, PiMinusBold as Minus } from "react-icons/pi";
import { useEffect, useState } from "react";
import { Container, Controls } from "./styles";

export function ItemsControl({handleItems, children, quantity}){
  const [items, setItems] = useState(quantity);
  const formatedItems = items < 10 ? `0${items}`:`${items}`;
  
  function handleAdd(){
    if(items < 99){
      setItems(items + 1);
    }
  }
  function handleRemove(){
    if(items > 1){
      setItems(items - 1);
    }
  }
  useEffect(()=>{
    handleItems(items);
  },[items])
  return(
    <Container>
      <Controls>
        <button onClick={handleRemove}><Minus/></button>
        <span>{items ? formatedItems : "01"}</span>
        <button onClick={handleAdd}><Plus/></button>
      </Controls>
      { children }
    </Container>
  )
}