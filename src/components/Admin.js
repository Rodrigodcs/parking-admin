import styled from "styled-components";
import Register from "./Register"
import Credit from "./Credit"
import Info from "./Info"

export default function Admin() {
  
  return (
      <Container>
        <Register/>
        <Credit/>
        <Info/>
      </Container>
  )
}

const Container = styled.div`
    margin-top: 130px;
    gap: 20px;
    width:100%;
    padding-left: 20px;
    padding-right: 20px;
    height: auto;
    display:flex;
    flex-direction: column;
    
`;
