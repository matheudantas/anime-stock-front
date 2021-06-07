import CardAnime from "../CardAnime";
import { useAnime } from "../../providers/Animes";
import { Container } from "./styles";
import LoadingCircular from "../LoadingCircular";

const CardListAnimes = () => {
  const { animes, load } = useAnime();

  console.log(animes);
  return (
    <Container>
      {!load ? (
        <LoadingCircular />
      ) : (
        animes?.map((i) => (
          <CardAnime
            anime={i.anime}
            date={i.released_date}
            seasons={i.seasons}
          />
        ))
      )}
    </Container>
  );
};

export default CardListAnimes;
