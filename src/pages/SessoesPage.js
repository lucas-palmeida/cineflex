import styled from "styled-components";
import ItemSessao from "../components/ItemSessao";
import { TituloEtapa } from "./FilmesPage";
import { ContainerFilme } from "../components/ItemFilme";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SessoesPage() {
  const { idFilme } = useParams();
  const [filme, setFilme] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((res) => setFilme(res.data));
    promise.catch((err) => console.log(err));
  }, []);

  if (filme === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <ContainerSessoes>
      <TituloEtapa>Selecione o horário</TituloEtapa>
      <ul>
        {filme.days.map((d) => {
          return (
            <ItemSessao
              key={d.id}
              showtimes={d.showtimes}
              weekday={d.weekday}
              date={d.date}
            />
          );
        })}
      </ul>
      <ContainerFooter>
        <ContainerBanner data-test="footer">
          <img src={filme.posterURL} alt={filme.title} />
        </ContainerBanner>
        <p>{filme.title}</p>
      </ContainerFooter>
    </ContainerSessoes>
  );
}

export const ContainerSessoes = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 117px;
  color: #293845;
`;

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  p {
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #293845;
    margin-left: 14px;
  }
`;

export const ContainerBanner = styled(ContainerFilme)`
  width: 64px;
  height: 89px;
  img {
    width: 48px;
    height: 72px;
  }
`;
