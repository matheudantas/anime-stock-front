import IconButton from "@material-ui/core/IconButton";

import SendIcon from "@material-ui/icons/Send";

const FormButton = () => {
  return (
    <IconButton color="primary" type="submit">
      <SendIcon />
    </IconButton>
  );
};
export default FormButton;
