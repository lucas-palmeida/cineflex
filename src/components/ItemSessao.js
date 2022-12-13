import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ItemSessao({ showtimes, weekday, date }) {
  return (
    <ContainerSessao>
      <p data-test="movie-day">
        {weekday} - {date}
      </p>
      <div>
        {showtimes.map((s) => {
          return (
            <Link key={s.id} to={`/assentos/${s.id}`}>
              <button data-test="showtime">{s.name}</button>
            </Link>
          );
        })}
      </div>
    </ContainerSessao>
  );
}

const ContainerSessao = styled.li`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 23px 23px;
  p {
    font-family: "Roboto", sans-serif;
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
    background-color: #e8833a;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #ffffff;
    margin: 0px 8px 8px 0px;
  }
`;
