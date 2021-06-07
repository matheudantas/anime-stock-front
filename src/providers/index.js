import { ModalProvider } from "./Modal";
import { AnimeProvider } from "./Animes";

const Providers = ({ children }) => {
  return (
    <AnimeProvider>
      <ModalProvider>{children}</ModalProvider>
    </AnimeProvider>
  );
};

export default Providers;
