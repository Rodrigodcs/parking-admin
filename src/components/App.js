import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

import AdminScreen from "./AdminScreen"
import LoginScreen from "./LoginScreen"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginScreen />} />
              <Route path="/admin" element={<AdminScreen />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
