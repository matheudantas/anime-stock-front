import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
`;
