import styled from "styled-components";

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <h1>CINEFLEX</h1>
        </ContainerCabecalho>
    )
}

const ContainerCabecalho = styled.header`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        font-weight: 400;
        line-height: 40px;
        text-align: center;
        color: #E8833A;
    }
`;