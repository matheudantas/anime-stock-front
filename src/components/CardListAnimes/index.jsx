import CardAnime from "../CardAnime";
import { useAnime } from "../../providers/Animes";
import { Container, AnimeEmptyMessage } from "./styles";
import LoadingCircular from "../LoadingCircular";

const CardListAnimes = () => {
  const { animes, load } = useAnime();

  return (
    <>
      {!animes && (
        <AnimeEmptyMessage>
          Nenhum anime encontrado, adicione o seu primeiro!
        </AnimeEmptyMessage>
      )}
      <Container>
        {!load ? (
          <LoadingCircular />
        ) : (
          animes?.map((i) => (
            <CardAnime
              anime={i.anime}
              date={i.released_date}
              seasons={i.seasons}
              key={i.id}
              id={i.id}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default CardListAnimes;
