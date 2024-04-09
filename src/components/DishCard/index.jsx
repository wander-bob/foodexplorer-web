import { PiHeartStraight as Heart, PiHeartStraightFill as HeartFill, PiPencilSimple as Edit } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { Button } from "../Button";
import { ItemsControl } from "../ItemsControl";
import { Container, Content } from "./styles";
import defaultImg from "../../assets/default.png"; 

import { useCart } from "../../hooks/cart";
import {priceFormatter} from "../../utils/priceFormatter";
import { api } from "../../services/api";

export function DishCard({id, image, price, name, description, ingredients, categoryId, alternativeProfile}){
  const { addCartItem, getTotalCartItems } = useCart();
  const totalOnCart = getTotalCartItems(id);
  const dishImage = image ? `${api.defaults.baseURL}/files/${image}` : defaultImg;
  const [favorite, setFavorite] = useState(false);
  const [items, setItems] = useState(totalOnCart > 1 ? totalOnCart : 1);
  const navigate = useNavigate();
  const formattedPrice = priceFormatter(price);
  function handleFavorite(){
    setFavorite(!favorite);
  }
  function handleCardItems(data){
    setItems(data);
  }
  function handleUpdateCart(){
    const updatedItems = items - totalOnCart;
    addCartItem({id, price, image, name, quantity: updatedItems})
  }
  function handleDetails(){
    const data =  { id, image, price, name, description, ingredients, quantity: items};
    navigate(`/dish/${data.id}/details`, {state: data})
  }
  function handleEdit(){
    const data =  { id, image, price, name, description, ingredients, categoryId};
    navigate(`/dish/${data.id}/edit`, {state: data})
  }
  useEffect(()=>{
  },[])
  return(
      <Container id={id} key={id}>
        <Content>
          {
            alternativeProfile ? 
            <button onClick={handleEdit} ><Edit /></button> 
            : 
            <button onClick={handleFavorite}>{favorite ? <HeartFill/> : <Heart/>}</button>
          }
          <img src={dishImage} alt="imagem de um prato" />
          <button onClick={()=> handleDetails(id)}>{typeof name === "string" ? <><span>{name}</span><span>{`>`}</span></>: "Nome do prato >"}</button>
          <p>{!description.length > 0 ? "Esse prato ainda não tem uma descrição." : description}</p>
          <span>{price ? formattedPrice : "R$ 25,00"}</span>
        </Content>
        {!alternativeProfile ?
          <ItemsControl handleItems={handleCardItems} quantity={items}>
            <Button content="incluir" onClick={handleUpdateCart}/>
          </ItemsControl>
         : ""}
      </Container>
  )
}