import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const ModalStyled = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PaperStyled = styled.div`
  background-color: #fff;
  border: 2px solid papayawhip;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
  padding: 16px 32px 24px;
`;
