import { PiSignOut as SignOutIcon } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { ButtonMenu } from "../ButtonMenu";
import { ButtonReceipts } from "../ButtonReceipts";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { Container } from "./styles";

import {useAuth} from "../../hooks/auth";
import {useCart} from "../../hooks/cart";

export function Header({menuOpen, alternativeProfile, handleMenu, handleSearch}){
  const { signOut } = useAuth();
  const { total } = useCart();
  const navigate = useNavigate();
  function handleSignout(){
    navigate("/");
    signOut();
  }
  function handleHome(){
    navigate("/")
  }
  return(
    <Container>
      <nav>
        <ButtonMenu isMenuOpen={menuOpen} onClick={handleMenu}/>
        <span className={!menuOpen ? "hidden" : ""}>Menu</span>
        <button onClick={handleHome}>          
          <Logo className={menuOpen ? "hidden" : ""} alternativeProfile={alternativeProfile} />
        </button>
        <InputSearch autoFocus className="input-search" handleSearch={handleSearch}/>
        <ButtonReceipts dishItems={total} alternativeProfile={alternativeProfile}/>
        <button onClick={handleSignout}><SignOutIcon /></button>
      </nav>
    </Container>
  )
}