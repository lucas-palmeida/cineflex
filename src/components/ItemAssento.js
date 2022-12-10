import { useState } from "react";
import styled from "styled-components";

export default function ItemAssento(props) {
  const { seat, selecionarAssento } = props;
  const { name, isAvailable } = seat;
  const [isSelected, setIsSelected] = useState(false);

  function selecionado() {
    if(!isAvailable) {
      alert("Esse assento não está disponível");
    } else {
      setIsSelected(!isSelected);
      selecionarAssento(name);
    }
  }

  return (
    <BotaoAssento
      className={`${
        !isAvailable ? "indisponivel" : isSelected ? "selecionado" : ""
      }`}
      onClick={selecionado}
    >
      {name}
    </BotaoAssento>
  );
}

const BotaoAssento = styled.button`
  height: 26px;
  width: 26px;
  background-color: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  margin: 0 7px 18px 0;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-align: center;
  &.selecionado {
    background-color: #1aae9e;
    border-color: #0e7d71;
  }
  &.indisponivel {
    background-color: #fbe192;
    border-color: #f7c52b;
  }
`;
