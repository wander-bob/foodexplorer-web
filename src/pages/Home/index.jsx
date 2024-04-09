import { useEffect, useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Banner } from "../../components/Banner";
import { DishList } from "../../components/DishList";
import { DishListEmpty } from "../../components/DishListEmpty";
import { SideBar } from "../../components/SideBar";
import { Container, Content } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Home(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [ dish, setDish] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const { user, signOut } = useAuth();
  const alternativeProfile = user.role === 'manager' ? true : false;

  function handleMenu(){
    setMenuOpen(!menuOpen);
  }
  function handleSearch(char){
    let [dishName,] = char.split(/ingredients\:\s?/)
    if(dishName){
      dishName = dishName.replace(/\s?ing.+/, "")
      setDish(dishName);
    }else{
      setDish("");
    }
    const [,ingredientList] = char.split(/ingredientes\:\s?/)
    if(ingredientList){
      setIngredients(ingredientList);
    }else{
      setIngredients([])
    }
  }
  useEffect(()=>{
    async function getDishes(){
      try{
        const result = await api.get(`/dishes?name=${dish}&ingredients=${ingredients}`);
        setData(result.data.categories);
      }catch(error){
        const {message} = error.response.data;
        if(message.includes("Sessão expirada")){
          signOut();
        }
      }
    }
    getDishes();
  },[dish, ingredients])
  return(
    <Container>
      <Content>
        <Header 
          menuOpen={menuOpen}
          alternativeProfile={alternativeProfile}
          handleMenu={handleMenu}
          handleSearch={handleSearch}
        />
        <SideBar isMenuOpen={menuOpen} alternativeProfile={alternativeProfile}/>
        <Main>
          <Banner />
          { data?.length > 0 ?
            data?.map((category)=>{
              return (
                <DishList key={category.id} id={category.id}
                alternativeProfile={alternativeProfile} title={category.label} data={category.dishes} />
              )
            }):<DishListEmpty />
          }
        </Main>
        <Footer />
      </Content>
    </Container>
  )
}