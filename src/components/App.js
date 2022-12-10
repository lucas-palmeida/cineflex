import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FilmesPage from "../pages/FilmesPage";
import SessoesPage from "../pages/SessoesPage";
import AssentosPage from "../pages/AssentosPage";
import ReservaPage from "../pages/ReservaPage";
import { useState } from "react";

export default function App() {
  const [sessao, setSessao] = useState(undefined);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [ids, setIds] = useState([]);

  const dados = {
    sessao,
    name,
    cpf,
    ids,
    setSessao,
    setName,
    setCpf,
    setIds
  }

  return (
    <BrowserRouter>
      <ContainerApp>
        <Header />
        <Routes>
          <Route path="/" element={<FilmesPage />} />
          <Route path="/sessoes/:idFilme" element={<SessoesPage />} />
          <Route path="/assentos/:idSessao" element={<AssentosPage dados={dados} />} />
          <Route path="/sucesso" element={<ReservaPage dados={dados} />} />
        </Routes>
      </ContainerApp>
    </BrowserRouter>
  );
}

const ContainerApp = styled.main`
  min-width: 375px;
  min-height: 667px;
`;
