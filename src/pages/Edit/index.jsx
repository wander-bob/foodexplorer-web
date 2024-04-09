import { PiCaretLeft } from "react-icons/pi"
import { useLocation, useNavigate } from "react-router-dom";
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
import { priceFormatter } from "../../utils/priceFormatter";
import { api } from "../../services/api";


export function Edit(){
  const navigate = useNavigate();
  const location = useLocation();
  const dishData = location.state;
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const [image, setImage] = useState(dishData.image);
  const [name, setName] = useState(dishData.name);
  const [category, setCategory] = useState(dishData.category);
  const [price, setPrice] = useState(dishData.price);
  const [description, setDescription] = useState(dishData.description);
  const [ingredients, setIngredients] = useState(dishData.ingredients);
  const [newIngredient, setNewIngredient] = useState("");
  const { user } = useAuth();
  const priceFormatted = priceFormatter(price);
  const alternativeProfile = user.role === 'manager' ? true : false;
  function handleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }
  function handleAddNewIngredient(){
    if(newIngredient && !ingredients.includes(newIngredient)){
      setIngredients((prevState) => [...prevState, newIngredient.toLowerCase()]);
      setNewIngredient("");
    }
  }
  function handleRemoveIngredient(itemToRemove){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== itemToRemove))
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
    const newPrice = newValue.replace(/R\$\s/,"").replace(/\,/,".");
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
    console.log(category)
    const dishUpdated = {name, category, description, price, ingredients};
    console.log(dishUpdated)
    try{
      const response = await api.put(`/dishes/${dishData.id}`, dishUpdated);
      if(dishData.image !== image && image && image.name !== ""){
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", image);
        await api.patch(`/dishes/${dishData.id}`, fileUploadForm);
      }
      alert(response.data.message);
    }catch(error){
      return alert(error.response.data.message);
    }
  }
  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover este prato?")
    if(confirm){
      try {
        const response = await api.delete(`/dishes/${dishData.id}`);
        alert(response.data.message);
      }catch(error){
        return alert(error.response.data.message);
      }
      return navigate("/")
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
          <Input id="name" title="Nome" type="text" placeholder="Ex.: Salada Ceasar" onChange={(e)=> setName(e.target.value)} value={name} />
          <Select title="Categoria" optionsData={categories} onChange={(e)=> setCategory(e.target.value)} selectedCategoryId={dishData.categoryId}/>
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
            value={priceFormatted} 
            title="Preço" 
            placeholder="R$ 00,00"
            onChange={(e) => {e.target.value = handlePriceInput(e.target.value)}}
          />
          <TextArea id="description" title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={(e)=> setDescription(e.target.value)} value={description}/>
          <div>
            <Button  content="Excluir prato" onClick={handleRemove} />
            <Button  content="Salvar alterações" onClick={handleSubmmit} />
          </div>
        </Form>
      </Main>
      <Footer/>
    </Container>
  )
}