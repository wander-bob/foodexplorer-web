import { useNavigate } from "react-router-dom";
import { PiReceipt as ReceiptIcon } from "react-icons/pi";

import { Container } from "./styles";
export function ButtonReceipts({dishItems, alternativeProfile}){
  const navigate = useNavigate();

  function handleNavigate(){
    if(alternativeProfile){
      return navigate("/new")
    }
    return navigate("/cart")
  }
  return (
    <Container className={alternativeProfile ? "admin-view" : ""} onClick={handleNavigate}>
      {!alternativeProfile ? <ReceiptIcon size={28} /> : ""}
      {!alternativeProfile ? <span>Pedidos</span> : <span>Novo Prato</span>}
      {!alternativeProfile ? <span><div>(</div>{dishItems}<div>)</div></span>:""}
    </Container>
  )
}