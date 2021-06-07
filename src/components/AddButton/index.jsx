import AddIcon from "@material-ui/icons/Add";
import { FabStyled } from "./styles";
import { useModal } from "../../providers/Modal";

const AddButtom = () => {
  const { handleOpen } = useModal();
  return (
    <FabStyled
      onClick={() => handleOpen()}
      size="medium"
      color="secondary"
      aria-label="add"
    >
      <AddIcon />
    </FabStyled>
  );
};

export default AddButtom;
