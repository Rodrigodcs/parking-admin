import styled from "styled-components";
import {useState} from "react"
import axios from "axios"

export default function Credit() {
  const [valor,setValor]= useState("")
  const [error,setError] = useState("")
  const [sucess,setSucess] = useState("")

    function sendInfo(){
        const body = {
            valor
        }
        console.log(body)
        axios.post(`${process.env.REACT_APP_API_URL}/clients/credit`,body).then((response)=>{
            console.log(response)
            setError("")
            setSucess(response.data)
        }).catch((e)=>{
            console.log(e.response.data)
            setError(e.response.data)
        })
    }
  return (
      <Container>
        <div className="title">ADICIONAR CRÉDITOS</div>
        <input type="text" placeholder="Valor" value={valor} onChange={(e)=>setValor(e.target.value)}></input>
        <div className="message">
            {error!==""?<p className="error">{error}</p>:
                sucess!==""?<p className="sucess">{sucess}</p>:
                    <></>
            }
        </div>
        <button onClick={()=>sendInfo()}>Adicionar</button>
      </Container>
  )
}

const Container = styled.div`
    width:300px;
    padding-bottom: 10px;
    border-radius: 10px;
    background-color:#F4D525;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    .title{
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width:100%;
        text-align: center;
        color:white;
        border-bottom: solid 1px black;
        background-color: #464F33;
    }
    button{
        width: 100px;
        height: 30px;
        background-color: #464F33;
        cursor: pointer;
        color:white;
    }
    .error{
        color:red;
        font-size: 15px;
    }
    .sucess{
        color:green;
        font-size: 15px;
    }
    input{
        height: 25px;
        padding-left: 5px;
        background-color: #f7f4cf;
        outline: none;
        border-radius: 5px;
    }

`;