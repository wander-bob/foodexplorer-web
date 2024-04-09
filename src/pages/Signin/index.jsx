import { useState } from "react"

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { Container } from "./styles";

import { useAuth } from "../../hooks/auth";

export function Signin(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  function handleSignIn(email,password){
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
    signIn({email,password});
  }
  return (
    <Container>
      <Logo />
      <Form title="Faça login">
        <Input autoFocus id="email" title="Email" type="email" required onChange={event => setEmail(event.target.value)} placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input id="password" title="Senha" type="password" required onChange={event => setPassword(event.target.value)} placeholder="No mínimo 6 caracteres" />
        <Button content="Entrar" onClick={()=>handleSignIn(email, password)} />
        <ButtonLink content="Criar uma conta" destination="/signup" />
      </Form>
    </Container>
  )
}