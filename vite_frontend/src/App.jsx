import Container from "react-bootstrap/Container";
import {
  MainTable,
  NavBarPrincipal,
  Heading,
  Filters,
  appData,
} from "./components";
import { useFetch } from "./hooks/useFetch.js";
import { useState } from "react";
import "./assets/styles.css";
import Foot from "./components/Foot.jsx";

const App = () => {
  const [resultsLimit, setResultsLimit] = useState(0);
  const [wordLength, setWordLength] = useState(0);
  const [reloadAction, setReloadAction] = useState(false);
  const [data, isLoading] = useFetch(wordLength, resultsLimit, reloadAction);
  return (
    <>
      <NavBarPrincipal navBarSections={appData.navbarSections} />
      <Container>
        <Heading textTitle={data.title} id={data.id} />
        <Filters
          setResultsLimit={setResultsLimit}
          setWordLength={setWordLength}
          isLoading={isLoading}
          setReloadAction={setReloadAction}
        />
        <MainTable rowData={data} isLoading={isLoading} />
      </Container>
      <Foot />
    </>
  );
};

export default App;
