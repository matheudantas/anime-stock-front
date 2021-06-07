import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

export const AnimesContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState(false);
  const [load, setLoad] = useState(false);

  const postAnimes = (animesData) => {
    api.post("/animes", animesData).then((res) => {
      setLoad(true);

      console.log(res.data);
    });
  };

  const getAnimes = async () => {
    await api.get("/animes").then((res) => {
      setAnimes(res.data);
      setLoad(true);
    });
  };

  const patchAnimes = (id, animeData) => {
    api.patch(`/animes/${id}`, animeData).then((res) => {
      setLoad(true);

      console.log(res.data, "RESULTADO PATCH");
    });
  };

  const deleteAnime = (id) => {
    api.delete(`/animes/${id}`).then((res) => {
      setLoad(false);

      console.log(res.data);
    });
  };

  useEffect(() => {
    getAnimes();
  }, [load]);

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
      }}
    >
      {children}
    </AnimesContext.Provider>
  );
};

export const useAnime = () => useContext(AnimesContext);
