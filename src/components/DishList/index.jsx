import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { DishCard } from "../DishCard";

export function DishList({id, title, data, alternativeProfile}){
  const splideRef = useRef(null);
  const [ minPages, setMinPages] = useState(1);
  function handleResize(){
    const minPage = window.screen.availWidth < 769 ? 1 : 3;
    setMinPages(minPage)
  }
  useEffect(()=>{
    handleResize()
    window.addEventListener("resize", ()=>{
      handleResize()
    })
    const splide = new Splide(`#splide-${id}`, {
      pagination: false,
      perPage: minPages,
      autoWidth: true,
    }).mount();
    splideRef.current = splide;
    return ()=> {
      if(splideRef.current){
        splideRef.current.destroy();
      }
    }
  },[id, data]);
  return(
    <Container className="splide" id={`splide-${id}`}>
      <h4>{title}</h4>
      <div className="splide__track">
        <ul className="splide__list">
          {
            data.map((dishItem) => { return (
              <li key={dishItem.id} className="splide__slide">
                <DishCard id={dishItem.id} name={dishItem.name} price={dishItem.price} description={dishItem.description} image={dishItem.image} ingredients={dishItem.ingredients} alternativeProfile={alternativeProfile} category={title} categoryId={id} />
              </li>
            )})
          }
          
        </ul>
      </div>
    </Container>
  )
}