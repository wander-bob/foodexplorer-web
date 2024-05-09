import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { Container } from "./styles";
import { api } from "../../services/api";

export function Signup(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSignup(){
    if(!name){
      document.querySelector('label[for=name]').classList.add('text-error');
      document.querySelector('label[for=name]').focus();
      setTimeout(()=>{
        document.querySelector('label[for=name]').classList.remove('text-error');
      }, 2500)
      return
    }
    if(!email){
      document.querySelector('label[for=email]').classList.add('text-error');
      document.querySelector('label[for=email]').focus();
      setTimeout(()=>{
        document.querySelector('label[for=email]').classList.remove('text-error');
      }, 2500)
      return
    }
    if(!password){
      document.querySelector('label[for=password]').classList.add('text-error');
      document.querySelector('label[for=password]').focus();
      setTimeout(()=>{
        document.querySelector('label[for=password]').classList.remove('text-error');
      }, 2500)
      return
    }
    api.post("/user", {name, email, password })
    .then(()=>{
      alert("Cadastro realizado com sucesso.")
      navigate("/")
    })
    .catch((error)=>{
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível efetuar o cadastro.");
      }
    });
  }
  return (
    <Container>
      <Logo />
      <Form title="Crie sua conta">
        <Input autoFocus id="name" title="Seu nome" type="name" required onChange={event => setName(event.target.value)} placeholder="Exemplo: Maria da Silva" />
        <Input id="email" title="Email" type="email" required onChange={event => setEmail(event.target.value)} placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input id="password" title="Senha" type="password" required onChange={event => setPassword(event.target.value)} placeholder="No mínimo 6 caracteres" />
        <Button content="Criar contarar" onClick={handleSignup} />
        <ButtonLink content="Já tenho uma conta" destination="/" />
      </Form>
    </Container>
  )
}