import { PiX as X, PiCheck as OK, PiCaretLeft } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Header } from "../../components/Header"; 
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { ItemsControl } from "../../components/ItemsControl";
import { SideBar } from "../../components/SideBar";
import { Container, ItemsContainer, ItemsWrapper, ButtonsWrapper } from "./styles";
import defaultImg from "../../assets/default.png"; 

import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Cart(){
  const {cartItems, addCartItem, removeCartItem, clearCart} = useCart();
  const [items, setItems] = useState(1);
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const alternativeProfile = user.role === 'manager' ? true : false;
  function handleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }
  function handlePreviousPage(){
    navigate(-1);
  }
  function handleCardItems(data){
    setItems(data);
  }
  function handleUpdateCart(currentCartItem){
    const {id, price, image, title, quantity } = currentCartItem;
    const updatedItems = items - currentCartItem.quantity;
    addCartItem({id, price, image, title, quantity: updatedItems})
  }
  return(
    <Container>
      <Header menuOpen={isMenuOpen} handleMenu={handleMenu} alternativeProfile={alternativeProfile}/>
      <SideBar isMenuOpen={isMenuOpen} alternativeProfile={alternativeProfile} />
      <Main>
        <button onClick={handlePreviousPage}><PiCaretLeft />voltar</button>
        <ItemsContainer>
          {cartItems.length > 0 ?
            cartItems.map((item)=> (
              <ItemsWrapper key={item.id}>
                <div>
                  <img src={item.image ? `${api.defaults.baseURL}/files/${item.image}` : defaultImg} alt="imagem de um prato" />
                  <span>{item.title}</span>
                </div>
                <div>
                  <ItemsControl  handleItems={handleCardItems} quantity={item.quantity} />
                  <button title="adicionar items" onClick={() => handleUpdateCart(item)}><OK /></button>
                  <button title="remover items" onClick={()=> removeCartItem(item.id)}><X /></button>
                </div>
              </ItemsWrapper>
            ))
            : <div>Nenhum item adicionado</div>
          }
          {cartItems.length > 0 ?
          <ButtonsWrapper>
            <button onClick={()=>clearCart()}>Limpar</button> 
            <button onClick={()=>alert("Pedido realizado!")}>Finalizar</button> 
          </ButtonsWrapper>         
        : ""}
        </ItemsContainer>
      </Main>
      <Footer />
    </Container>
  )
}