import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ReservaPage(props) {
  const { sessao, name, cpf, ids, setSessao, setName, setCpf, setIds } =
    props.dados;
  const navigate = useNavigate();
  
  function voltarHome() {
    setName("");
    setCpf("");
    setIds([]);
    setSessao(undefined);
    navigate("/");
  }

  return (
    <ContainerReserva>
      <TituloSucesso>Pedido feito com sucesso!</TituloSucesso>
      <InfoReserva>
        <div>
          <h3>Filme e sessão</h3>
          <p>{sessao.movie.title}</p>
          <p>
            {sessao.day.date} {sessao.name}
          </p>
        </div>
        <div>
          <h3>Ingressos</h3>
          {ids.map((i) => {
            return <p key={i}>Assento {i}</p>;
          })}
        </div>
        <div>
          <h3>Comprador</h3>
          <p>Nome: {name}</p>
          <p>CPF: {cpf}</p>
        </div>
      </InfoReserva>
      <BotaoHome onClick={voltarHome}>Voltar para Home</BotaoHome>
    </ContainerReserva>
  );
}

const ContainerReserva = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.04em;
  line-height: 28px;
`;

const TituloSucesso = styled.div`
  width: 180px;
  margin: 31px auto;
  font-size: 24px;
  font-weight: 700;
  color: #247a6b;
  text-align: center;
`;

const InfoReserva = styled.article`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  color: #293845;
  div {
    width: 100%;
    height: 110px;
    margin: 10px auto;
    h3 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      font-size: 22px;
      font-weight: 400;
      line-height: 26px;
    }
  }
`;

const BotaoHome = styled.button`
  height: 42px;
  width: 225px;
  margin-top: 62px;
  border-radius: 3px;
  border: none;
  background-color: #e8833a;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.04em;
`;
