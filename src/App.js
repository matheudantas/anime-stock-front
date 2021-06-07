import GlobalStyle from "./styles/globalStyle";
import { Container } from "./styles/containerStyle";
import AddButtom from "./components/AddButton";
import ModalForm from "./components/ModalForm";
import CardListAnimes from "./components/CardListAnimes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ModalForm button={<AddButtom />} />
        <CardListAnimes />
      </Container>
    </>
  );
};

export default App;
