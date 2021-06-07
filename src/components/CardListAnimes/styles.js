import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const AnimeEmptyMessage = styled.div`
  padding: 1em;
`;
