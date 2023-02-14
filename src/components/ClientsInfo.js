import {useEffect} from "react"
import axios from "axios"

export default function ClientsInfo({cardSucess,cardError}) {
    
      useEffect(() => {
          const search = setInterval(() => getInfo(),3000)
          const err = setTimeout(()=>cardError(),15000)
          return ()=> {
            clearInterval(search)
            clearTimeout(err)
          }
      }, []);
  
      function getInfo(){
          axios.get(`${process.env.REACT_APP_API_URL}/clients/information`).then((response)=>{
                console.log(response)
                if(response.data!==""){
                    cardSucess(response.data)
                }
          }).catch((e)=>{
              console.log(e.response.data)
          })
      }
  
    return (
        <p>Agardando leitura do cartão</p>
    )
  }