import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Form from "../Form";
import { useState } from "react";

import { CardStyled, TypographySecondary } from "./styles";

const CardAnime = ({ anime, date, seasons }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEdit = () => {
    openEdit ? setOpenEdit(false) : setOpenEdit(true);
  };

  return (
    <CardStyled>
      <CardContent>
        <Typography variant="h5" component="h2">
          {anime}
        </Typography>
        <Typography variant="body2" component="p">
          {date}
        </Typography>
        <TypographySecondary color="textSecondary">
          released date
        </TypographySecondary>
        <Typography variant="body2" component="p">
          {seasons}
        </Typography>
        <TypographySecondary color="textSecondary">seasons</TypographySecondary>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleOpenEdit()}>
          {openEdit ? "Close" : "Edit"}
        </Button>
      </CardActions>
      {openEdit && <Form patch={true} />}
    </CardStyled>
  );
};

export default CardAnime;
