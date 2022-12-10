import styled from "styled-components";

export default function ItemSessao({ showtimes, weekday, date }) {
    return (
        <ContainerSessao>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map((s) => {
                    return (
                        <button key={s.id}>{s.name}</button>
                    )
                })}
            </div>
        </ContainerSessao>
    )
}

const ContainerSessao = styled.li`
    width: auto;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 23px 23px;
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #293845;
    }
    button {
        height: 43px;
        width: 83px;
        border-radius: 3px;
        border: none;
        background-color: #E8833A;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #FFFFFF;
        margin: 0px 8px 8px 0px;
    }
`;