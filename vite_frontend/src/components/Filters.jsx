import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FilterSelect, Btn, appData } from "./index.js";
import PropTypes from "prop-types";

const Filters = ({
  setResultsLimit,
  setWordLength,
  isLoading,
  setReloadAction,
}) => {
  return (
    <>
      <Container className={"my-4 px-0 filters-container"}>
        <Row className={"px-0 align-items-center"}>
          <Col>
            <Btn
              isLoading={isLoading}
              onClickFn={setResultsLimit}
              setReloadAction={setReloadAction}
            />
          </Col>
          <Col>
            <FilterSelect
              optLabel={"Número de resultados: "}
              options={appData.limitResultsOptions}
              onChangeFn={setResultsLimit}
            />
          </Col>
          <Col>
            <FilterSelect
              optLabel={"Densidad de palabra: "}
              options={appData.wordLengthOptions}
              onChangeFn={setWordLength}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

Filters.propTypes = {
  setResultsLimit: PropTypes.func.isRequired,
  setWordLength: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setReloadAction: PropTypes.func,
  appData: PropTypes.object,
};

export { Filters };
