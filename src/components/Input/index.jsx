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
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true, ruleType },
    defaultValue: "",
  });

  //   console.log(dirtyFields);
  //   console.log(isDirty);
  // console.log(invalid, "INVALID");

  return (
    <div>
      <TextField
        error={invalid}
        id="outlined-error-helper-text"
        label={invalid ? "Error" : labelMessage}
        // defaultValue="Hello World"
        helperText={invalid ? "entrada incorreta" : ""}
        variant="outlined"
        inputRef={ref}
        type={type}
        InputLabelProps={InputLabelProps}
        // type="number"
        {...inputProps}
      />
    </div>
  );
};

export default Input;
