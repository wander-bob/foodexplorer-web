import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PiCaretLeft, PiReceipt } from "react-icons/pi"

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { ItemsControl } from "../../components/ItemsControl";
import { SideBar } from "../../components/SideBar";
import { Container, ImageWrapper, Content, ContentWrapper, IngredientsWrapper, Ingredient } from "./styles";

import defaultImg from "../../assets/default.png"; 

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { priceFormatter } from "../../utils/priceFormatter";
import { api } from "../../services/api";

export function Details(){
  const navigate = useNavigate();
  const location = useLocation();
  const dishData = location.state;
  const { addCartItem, getTotalCartItems } = useCart();
  const totalOnCart = getTotalCartItems(dishData.id);
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const [items, setItems] = useState(totalOnCart > 1 ? totalOnCart : 1);
  const { user } = useAuth();
  const alternativeProfile = user.role === 'manager' ? true :  false;
  const dishImage = dishData.image ? `${api.defaults.baseURL}/files/${dishData.image}` : defaultImg;
  const formattedPrice = priceFormatter(dishData.price);
  function handleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }
  function handlePreviousPage(){ 
    navigate(-1)
  }
  function handleEdit(){
    const { id, image, price, title, description, ingredients} = dishData;
    const data =  { id, image, price, title, description, ingredients};
    navigate(`/dish/${data.id}/edit`, {state: data})
  }
  function handleCardItems(data){
    setItems(data);
  }
  function handleUpdateCart(){
    const {id, price, image, title } = dishData;
    const updatedItems = items - totalOnCart;
    addCartItem({id, price, image, title, quantity: updatedItems})
  }
  return(
    <Container>
      <Header menuOpen={isMenuOpen} handleMenu={handleMenu} alternativeProfile={alternativeProfile}/>
      <SideBar isMenuOpen={isMenuOpen} alternativeProfile={alternativeProfile} />
      <Main>
        <button onClick={handlePreviousPage}><PiCaretLeft />voltar</button>
        <Content>
          <ImageWrapper>
            <img src={dishImage} alt="Dish image" />
          </ImageWrapper>
          <ContentWrapper>
          <h2>{dishData.title}</h2>
          <p>{!dishData.description.length > 0 ? "Esse prato ainda não tem uma descrição." : dishData.description}</p>
          <IngredientsWrapper>
            {dishData.ingredients.length > 0 
              ? dishData.ingredients.map((ingredient, index)=>{
                return (<Ingredient key={`${index}-${ingredient}`}>{ingredient}</Ingredient>)
              })
              :<p>Nenhum ingrediente foi adicionado.</p>
            }
          </IngredientsWrapper>
            {
              alternativeProfile ? 
                <Button content="Editar prato" onClick={handleEdit}/>
              :
              <ItemsControl quantity={dishData.quantity} handleItems={handleCardItems}>
                <button onClick={() => handleUpdateCart(dishData)}><PiReceipt />incluir - {formattedPrice}</button>
              </ItemsControl>
            }
          </ContentWrapper>
        </Content>
      </Main>
      <Footer/>
    </Container>
  )
}