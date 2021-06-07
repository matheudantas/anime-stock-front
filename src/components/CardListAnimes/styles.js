import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
