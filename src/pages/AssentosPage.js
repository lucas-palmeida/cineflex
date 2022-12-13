import styled from "styled-components";
import {
  ContainerSessoes,
  ContainerFooter,
  ContainerBanner,
} from "./SessoesPage";
import { TituloEtapa } from "./FilmesPage";
import ItemAssento from "../components/ItemAssento";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AssentosPage(props) {
  const { sessao, name, cpf, ids, setSessao, setName, setCpf, setIds } =
    props.dados;
  const { idSessao } = useParams();
  const navigate = useNavigate();

  function selecionarAssento(id) {
    if (ids.some((assento) => assento === id)) {
      const idsAtualizados = ids.filter((assento) => assento !== id);
      setIds(idsAtualizados);
    } else {
      setIds([...ids, id]);
    }
  }

  function fazerReserva(e) {
    e.preventDefault();
    const reserva = { ids, name, cpf };
    const URL =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const promise = axios.post(URL, reserva);
    promise.then((res) => {
      navigate("/sucesso");
    });
    promise.catch((err) => console.log(err.response.data));
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((res) => setSessao(res.data));
    promise.catch((err) => console.log(err));
  }, []);

  if (sessao === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <ContainerSessoes>
      <TituloEtapa>Selecione o(s) assento(s)</TituloEtapa>
      <ContainerAssentos>
        {sessao.seats.map((s) => {
          return (
            <ItemAssento
              key={s.id}
              seat={s}
              selecionarAssento={selecionarAssento}
              data-test="seat"
            />
          );
        })}
      </ContainerAssentos>
      <LegendaAssentos>
        <div>
          <p className="selecionado"></p>
          <p>Selecionado</p>
        </div>
        <div>
          <p className="disponivel"></p>
          <p>Disponível</p>
        </div>
        <div>
          <p className="indisponivel"></p>
          <p>Indisponível</p>
        </div>
      </LegendaAssentos>
      <ContainerComprador onSubmit={fazerReserva} data-test="book-seat-btn">
        <label htmlFor="name">Nome do comprador</label>
        <InputComprador
          id="name"
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-test="client-name"
          required
        />
        <br />
        <label htmlFor="cpf">CPF do comprador</label>
        <InputComprador
          id="cpf"
          type="text"
          pattern="^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$"
          placeholder="Digite seu CPF..."
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          data-test="client-cpf"
          required
        />
        <div>
          <BotaoReserva type="submit" value="Reservar assento(s)" />
        </div>
      </ContainerComprador>
      <ContainerFooter data-test="footer">
        <ContainerBanner data-test="footer">
          <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
        </ContainerBanner>
        <div>
          <p>{sessao.movie.title}</p>
          <p>
            {sessao.day.weekday} - {sessao.name}
          </p>
        </div>
      </ContainerFooter>
    </ContainerSessoes>
  );
}

const ContainerAssentos = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-left: 24px;
  padding-right: 18px;
  box-sizing: border-box;
`;

const LegendaAssentos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.013em;
    text-align: left;
  }
  div:nth-child(2) {
    margin: 0 24px;
  }
  div > p:nth-child(1) {
    width: 25px;
    height: 25px;
    border-radius: 20px;
    margin: auto;
    border: 1px solid #000000;
  }
  div > p.selecionado {
    background-color: #1aae9e;
    border-color: #0e7d71;
  }
  div > p.disponivel {
    background-color: #c3cfd9;
    border-color: #7b8b99;
  }
  div > p.indisponivel {
    background-color: #fbe192;
    border-color: #f7c52b;
  }
`;

const ContainerComprador = styled.form`
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  margin: 42px auto;
  padding: 0 24px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const InputComprador = styled.input`
  width: 100%;
  height: 51px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #d4d4d4;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: #293845;
  &:nth-child(2) {
    margin-bottom: 7px;
  }
  &::placeholder {
    font-style: italic;
  }
`;

const BotaoReserva = styled.input`
  width: 225px;
  height: 42px;
  border-radius: 3px;
  border: none;
  background-color: #e8833a;
  margin-top: 57px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.04em;
  color: #ffffff;
`;
