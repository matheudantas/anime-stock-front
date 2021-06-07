import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useModal } from "../../providers/Modal";
import Form from "../Form";

import { ModalStyled, PaperStyled } from "./styles";

const ModalForm = ({ button }) => {
  const { handleClose, open } = useModal();

  return (
    <div>
      {button}

      <ModalStyled
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <PaperStyled>
            <Form patch={false} vertical />
          </PaperStyled>
        </Fade>
      </ModalStyled>
    </div>
  );
};
export default ModalForm;
