import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemFilme from "../components/ItemFilme";
import axios from "axios";

export default function ListaFilmes() {
    const [filmes, setFilmes] = useState(undefined);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then((res) => setFilmes(res.data));
        promise.catch((err) => console.log(err.response.data));
    }, []);

    if(filmes === undefined) {
        return (
            <div>Carregando</div>
        )
    }

    return (
        <ContainerFilmes>
            <TituloEtapa>Selecione o filme</TituloEtapa>
            {filmes.map((f) => {
                return (
                    <ItemFilme key={f.id} filme={f} />
                )
            })}
        </ContainerFilmes>
    )
}

const ContainerFilmes = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const TituloEtapa = styled.h2`
    width: 100%;
    height: 110px;
    box-sizing: border-box;
    padding-top: 43px;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #293845;
`;