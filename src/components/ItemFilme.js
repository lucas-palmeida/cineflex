import styled from "styled-components";

export default function ItemFilme(props) {
  const { filme } = props;
  return (
    <ContainerFilme data-test="movie">
      <img src={filme.posterURL} alt={filme.title} />
    </ContainerFilme>
  );
}

export const ContainerFilme = styled.div`
  height: 209px;
  width: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  background-color: #ffffff;
  img {
    height: 193px;
    width: 129px;
  }
`;
