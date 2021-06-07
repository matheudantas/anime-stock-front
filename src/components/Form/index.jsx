import { makeStyles } from "@material-ui/core/styles";
import FormButton from "../FormButton";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { FormStyled } from "./styles";
import { useAnime } from "../../providers/Animes";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Form = ({ patch, vertical, id }) => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();
  const { postAnimes, setLoad, patchAnimes } = useAnime();

  return (
    <FormStyled
      vertical={vertical}
      onSubmit={handleSubmit((data) => {
        if (!patch) {
          data["released_date"] = data["released_date"].split("-").join("/");
          postAnimes(data);
          setLoad(false);
        }
        patchAnimes(id, data);
        setLoad(false);
      })}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      {patch ? (
        <Input name="anime" labelMessage="Change Anime" control={control} />
      ) : (
        <>
          <Input name="anime" labelMessage="Anime" control={control} />
          <Input
            name="released_date"
            labelMessage="Released Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            control={control}
          />
          <Input
            name="seasons"
            labelMessage="Seasons"
            type="number"
            control={control}
          />
        </>
      )}
      <FormButton />
    </FormStyled>
  );
};

export default Form;
