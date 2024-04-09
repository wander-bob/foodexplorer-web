import { PiMagnifyingGlass as SearchIcon} from "react-icons/pi";
import { useState } from "react";

import { Container } from "./styles";

export function InputSearch({className, handleSearch, autoFocus}){
  function handleSearchTerm(char){
    handleSearch(char)
  }
  return (
    <Container className={className}>
      <SearchIcon />
      <input 
        autoFocus={autoFocus} 
        type="search" 
        placeholder="Busque por pratos ou ingredientes" 
        onChange={(event) => handleSearchTerm(event.target.value)} />
    </Container>
  )
}