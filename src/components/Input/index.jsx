import TextField from "@material-ui/core/TextField";
import { useController } from "react-hook-form";

const Input = ({
  control,
  name,
  ruleType,
  type,
  labelMessage,
  InputLabelProps,
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid },
  } = useController({
    name,
    control,
    rules: { required: true, ruleType },
    defaultValue: "",
  });

  return (
    <div>
      <TextField
        error={invalid}
        id="outlined-error-helper-text"
        label={invalid ? "Error" : labelMessage}
        helperText={invalid ? "entrada incorreta" : ""}
        variant="outlined"
        inputRef={ref}
        type={type}
        InputLabelProps={InputLabelProps}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
