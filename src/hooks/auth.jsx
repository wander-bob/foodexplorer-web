import {createContext, useContext,useEffect, useState} from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [userData, setUserData] = useState({});
  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions", {email, password});
      const {user} = response.data;
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      setUserData({user});
    } catch (error) {
      console.log(error)
      if(error.response){
        return alert(error.response.data.message)
      }
      return alert("Ocorreu uma falha ao realizar o login.")
    }
  }
  async function signOut(){
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:cart-items");
    setUserData({});
  }
  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user');
    if(user){
      setUserData({user: JSON.parse(user)})
    }
  }, []);
  return(
    <AuthContext.Provider value={{signIn, signOut, user: userData.user}}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth(){
  const context = useContext(AuthContext);
  return context;
}
export {AuthProvider, useAuth};


