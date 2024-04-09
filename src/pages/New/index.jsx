import { PiCaretLeft } from "react-icons/pi"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form"; 
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { Ingredient } from "../../components/Ingredient";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";

import { Container } from "./styles";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function New(){
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Refeições");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const { user } = useAuth();
  const alternativeProfile = user.role === 'manager' ? true : false;
  function handleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }
  
  function handleAddNewIngredient(){
    if(newIngredient && !ingredients.includes(newIngredient)){
      setIngredients((prevState) => [...prevState, newIngredient.toLocaleLowerCase()]);
      setNewIngredient("");
    }
  }
  function handleRemoveIngredient(itemToRemove){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !==itemToRemove))
  }
  function handlePriceInput(value){
    let newValue = new String(value);
    //Limpa qualquer não número
    newValue = value.replace(/([^0-9\,])/g,"");
    //Formata a exibição dos valores que serão exibidos no input
    newValue = newValue.replace(/(\d)/,"R$ $1");
    //Adiciona os números seguintes após o R$ e espaço,
    // e após dois números seguidos, adiciona uma vírgula
    // e os demais números após a vírgula
    newValue = newValue.replace(/(R\$\s\d)(\d)(\d{1,2})/,"$1$2,$3");
    // Limita o input para no máximo 99,99;
    newValue = newValue.replace(/(?<=^R\$\s\d{1,2}\,\d{2})(\d+)/,"");
    //Padroniza o valor para Float para ser inserido no price.
    const newPrice = Number(newValue.replace(/R\$\s/,"").replace(/\,/,"."));
    setPrice(newPrice);
    return newValue;
  }
  function handleDishImage(event){
    const file = event.target.files[0];
    const regex = /\.png|\.jp\w?g/;
    if(regex.exec(file.name) === null){
      event.target.value = '';
      return alert("Formato de imagem inválido. Tente PNG ou JPEG");
    }
    setImage(file)
  }
  async function handleSubmmit(){
    const dishData = {name, category, description, price, ingredients};
    try{
      const response = await api.post("/dishes", dishData);
      console.log(response)
      if(image && image.name !== ""){
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", image);
        const uploadResult = api.patch(`/dishes/${response.data.dish.id}`, fileUploadForm);
        console.log(uploadResult)
      }
      alert(response.data.message);
    }catch(error){
      return alert(error.response.data.message);
    }
  }
  function handlePreviousPage(){
    navigate(-1);
  }
  useEffect(()=>{
    async function handleCategories(){
      try{
        const result = await api.get(`/categories`);
        setCategories(result.data);
      }catch(error){
        const {message} = error.response.data;
        if(message.includes("Sessão expirada")){
          signOut();
        }
      }
    }
    handleCategories();
  },[])
  return(
    <Container>
      <Header menuOpen={isMenuOpen} handleMenu={handleMenu} alternativeProfile={alternativeProfile}/>
      <SideBar isMenuOpen={isMenuOpen} alternativeProfile={alternativeProfile} />
      <Main>
      <button onClick={handlePreviousPage}><PiCaretLeft />voltar</button>
      <h2>Novo prato</h2>
        <Form>
          <InputFile id="img" title="Imagem do prato" onChange={handleDishImage}/>
          <Input id="name" title="Nome" type="text" placeholder="Ex.: Salada Ceasar" onChange={(e)=> setName(e.target.value)} />
          <Select title="Categoria" optionsData={categories} onChange={(e)=> setCategory(e.target.value)}/>
          <Section title="Ingredientes" >
            {ingredients.length > 0 ?
              ingredients.map((ingredient, index)=> 
                <Ingredient key={`${index}-${ingredient}`} 
                  value={ingredient} 
                  onClick={()=>{handleRemoveIngredient(ingredient)}} 
                />
              ) : null
            }
            <Ingredient isNew value={newIngredient} onChange={(e)=> setNewIngredient(e.target.value)} onClick={handleAddNewIngredient} />            
          </Section>
          <Input 
            id="price" 
            title="Preço" 
            placeholder="R$ 00,00"
            onChange={(e) => {e.target.value = handlePriceInput(e.target.value)}}
          />
          <TextArea id="description" title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={(e)=> setDescription(e.target.value)}/>
          <Button  content="Salvar prato" onClick={handleSubmmit} />
        </Form>
      </Main>
      <Footer/>
    </Container>
  )
}