import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

export const AnimesContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const postAnimes = (animesData) => {
    api
      .post("/animes", animesData)
      .then((res) => {
        setLoad(true);

        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAnimes = async () => {
    await api
      .get("/animes")
      .then((res) => {
        setAnimes(res.data);
        setLoad(true);
        setError(false);
      })
      .catch((err) => {
        setError(true);

        console.log(err);
      });
  };

  const patchAnimes = (id, animeData) => {
    api
      .patch(`/animes/${id}`, animeData)
      .then((res) => {
        setLoad(true);

        // console.log(res.data, "RESULTADO PATCH");
      })
      .catch((err) => console.log(err));
  };

  const deleteAnime = (id) => {
    api
      .delete(`/animes/${id}`)
      .then((res) => {
        setLoad(false);

        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimes();
  }, [load, error]);

  return (
    <AnimesContext.Provider
      value={{
        getAnimes,
        animes,
        postAnimes,
        load,
        setLoad,
        patchAnimes,
        deleteAnime,
        error,
      }}
    >
      {children}
    </AnimesContext.Provider>
  );
};

export const useAnime = () => useContext(AnimesContext);
