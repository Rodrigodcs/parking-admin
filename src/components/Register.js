import styled from "styled-components";
import {useState} from "react"
import axios from "axios"

export default function Register() {
  const [name,setName]= useState("")
  const [model,setModel]= useState("")
  const [type,setType]= useState("2")
  const [color,setColor]= useState("#000000")
  const [lisencePlate,setLisencePlate]= useState("")
  const [error,setError] = useState("")
  const [sucess,setSucess] = useState("")

    function sendInfo(){
        const body = {
            name,
            vehicleModel: model,
            vehicleType: Number(type),
            vehicleColor: color,
            vehicleLicensePlate: lisencePlate
        }
        console.log(body)
        axios.post(`${process.env.REACT_APP_API_URL}/clients/register`,body).then((response)=>{
            console.log(response)
            setError("")
            setSucess(response.data)
        }).catch((e)=>{
            console.log(e.response.data)
            setError(e.response.data)
        })
    }
    console.log(type)
  return (
      <Container>
        <div className="title">REGISTRAR CLIENTE</div>
        <input type="text" placeholder="Nome" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" placeholder="Modelo do veículo" value={model} onChange={(e)=>setModel(e.target.value)}></input>
        <input type="text" placeholder="Placa" value={lisencePlate} onChange={(e)=>setLisencePlate(e.target.value)}></input>
        <div className="radio">
            <div>
                <input type="radio" name="type" value="1" checked={type==="1"} onChange={(e)=>setType(e.target.value)}></input>
                <label> Moto</label>
            </div>
            <div>
                <input type="radio" name="type" value="2" checked={type==="2"} onChange={(e)=>setType(e.target.value)}></input>
                <label> Carro</label>
            </div>
        </div>
        <div className="cor"><label>Cor:</label><input type="color" onChange={(e)=>setColor(e.target.value)}></input></div>
        <div className="message">
            {error!==""?<p className="error">{error}</p>:
                sucess!==""?<p className="sucess">{sucess}</p>:
                    <></>
            }
        </div>
        <button onClick={()=>sendInfo()}>Registrar</button>
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
    }
    .cor{
        display: flex;
        align-items: center;
        gap:5px;
    }
    .radio{
        display: flex;
        align-items: center;
        gap:15px;
    }
    .error{
        color:red;
        font-size: 15px;
    }
    .sucess{
        color:green;
        font-size: 15px;
    }
`;