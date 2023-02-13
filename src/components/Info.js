import styled from "styled-components";
import {useState} from "react"
import axios from "axios"

import { ThreeDots } from "react-loader-spinner";
import ClientsInfo from "./ClientsInfo.js"

export default function Info() {
  const [clientInfo,setClientInfo]= useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

    function sendRequest(){
        setClientInfo(null);
        axios.get(`${process.env.REACT_APP_API_URL}/clients/info`).then((response)=>{
            console.log(response.data)
            setLoading(true)
            setError(false)
        }).catch((e)=>{
            console.log(e.response.data)
        })
    }

    function cardError(){
        setError(true)
        setLoading(false)
    }
    function cardSucess(clientInfo){
        console.log(clientInfo)
        setLoading(false)
        setClientInfo(clientInfo)
    }

    function newRequest(){
        console.log("nova pesquisa")
        setClientInfo(null)
    }
    
  return (
      <Container>
        <div className="title">INFORMAÇÃO DO CLIENTE</div>
        {!loading?
                <button onClick={()=>sendRequest()}>{!clientInfo?"Buscar Informações":"Nova Pesquisa"}</button>:
            !clientInfo?
                <>
                    <p>Passe a tag do cliente</p>
                    <ThreeDots color="#fff" height={40} width={40} />
                    <ClientsInfo cardSucess={cardSucess} cardError={cardError}/>
                </>:
                ""
                
        }
        {error?
            <p className="error">Falaha ao ler o cartão</p>:
            ""    
        }
        {clientInfo?
            <>
                <div className="client-info">
                    <p><span>Nome: </span>{clientInfo.name}</p>
                    <p><span>Modelo: </span>{clientInfo.vehicleModel}</p>
                    <p><span>Placa do veículo: </span>{clientInfo.vehicleLicensePlate}</p>
                    <p><span>Tipo: </span>{clientInfo.type===1?"Moto":"Carro"}</p>
                    <p><span>Creditos: </span>{clientInfo.funds}</p>
                    <p><span>Dividendos: </span>{clientInfo.debt}</p>
                </div>
            </>:
            ""
        }
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
        width: 150px;
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
    .error{
        color:red;
    }
    span{
        font-size: 18px;
        color:grey;
    }
    .client-info{
        color:black;
        background-color: #f7f4cf;
        padding:10px;
        border-radius: 5px;
    }
`;