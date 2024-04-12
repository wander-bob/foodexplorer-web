import { useNavigate } from "react-router-dom";
import { Main } from "../Main";
import { InputSearch } from "../InputSearch";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

export function SideBar({isMenuOpen, alternativeProfile, handleSearch}){
  const navigate = useNavigate();
  const { signOut } = useAuth();
  function handleSignout(){
    navigate("/");
    signOut();
  }
  function handleNew(){
    return navigate("/new")
  }
  return(
    <Container className={isMenuOpen && "active"}>
      <Main>
        <InputSearch autoFocus handleSearch={handleSearch}/>
        {alternativeProfile ? <button onClick={handleNew}>Novo prato</button> : ""}
        <button onClick={handleSignout}>Sair</button>
      </Main>
    </Container>
  )
}