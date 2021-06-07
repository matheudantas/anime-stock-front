import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const AnimeEmptyMessage = styled.div`
  padding: 1em;
`;
