import CardAnime from "../CardAnime";
import { useAnime } from "../../providers/Animes";
import { Container } from "./styles";

const CardListAnimes = () => {
  const { animes, load } = useAnime();

  console.log(animes);
  return (
    <Container>
      {load &&
        animes?.map((i) => (
          <CardAnime
            anime={i.anime}
            date={i.released_date}
            seasons={i.seasons}
          />
        ))}
    </Container>
  );
};

export default CardListAnimes;
