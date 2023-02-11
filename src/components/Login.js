import { useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const [admin,setAdmin] = useState("")
  const [password,setPassword] = useState("")
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate()

function login(event){
    event.preventDefault()
    setDisabled(true);
    const body = {admin,password}
    axios.post(`${process.env.REACT_APP_API_URL}/admin/login`,body).then((response)=>{
        console.log(response)
        navigate("/admin");
    }).catch((error)=>{
        console.log(error)
        setDisabled(false)
    })
}
console.log(admin,password)

  return (
      <Container>
        <StyledForm onSubmit={login}>
            <input
                type="text"
                name="admin"
                placeholder="Admin"
                disabled={disabled}
                onChange={(e)=>setAdmin(e.target.value)}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Senha"
                disabled={disabled}
                onChange={(e)=>setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={disabled}>
                {disabled ? (
                    <ThreeDots color="#fff" height={40} width={40} />
                ) : (
                    "Entrar"
                )}
            </button>
        </StyledForm>
      </Container>
  )
}

const Container = styled.div`
    margin-top: 130px;
    width:100%;
    padding-left: 20px;
    padding-right: 20px;
    height: calc(100vh - 600px);
    display:flex;
    align-items: center;
    justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap:20px;
  width: 100%;
  max-width: 500px;

  input {
    height: 58px;
    background-color: #fff;
    font-size: 20px;
    line-height: 23px;
    border: none;
    border-radius: 5px;
    margin-bottom: 13px;
    font-family: "Raleway", sans-serif;
    padding-left: 15px;
    &:disabled {
      background-color: #aaa;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    border: none;
    border-radius: 5px;
    background-color: #a328d6;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: bold;
    line-height: 23px;
    margin-bottom: 36px;
    &:disabled {
      opacity: 0.5;
    }
  }
`;