import styled from "styled-components";
import Register from "./Register"
import Credit from "./Credit"
import Info from "./Info"
import ParkingLot from "./ParkingLot";


export default function Admin() {
  
  return (
      <Page>
        <Container>
          <Register/>
          <Credit/>
          <Info/>
        </Container>
        <ParkingLot/>
      </Page>
      
  )
}

const Container = styled.div`
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
    height: auto;
    display:flex;
    flex-direction: column;
`;

const Page = styled.div`
    margin-top: 130px;
    gap: 20px;
    width:100%;
    padding-left: 20px;
    padding-right: 20px;
    height: auto;
    display:flex;
`;
