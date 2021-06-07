import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export const CardStyled = styled(Card)`
  && {
    min-width: 215px;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 0 10px 0;

    @media (min-width: 500px) {
      margin: 10px;
    }

    :hover {
      background-color: papayawhip;
    }
  }
`;

export const TypographySecondary = styled(Typography)`
  && {
    margin-bottom: 12px;
  }
`;
