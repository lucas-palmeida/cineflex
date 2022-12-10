import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FilmesPage from "../pages/FilmesPage";
import SessoesPage from "../pages/SessoesPage";

export default function App() {
  return (
    <BrowserRouter>
      <ContainerApp>
        <Header />
        <Routes>
          <Route path="/" element={<FilmesPage />} />
          <Route path="/sessoes/:idFilme" element={<SessoesPage />} />  
        </Routes>
      </ContainerApp>
    </BrowserRouter>
  );
}

const ContainerApp = styled.main`
  min-width: 375px;
  min-height: 667px;
`;
