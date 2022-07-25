const { render, screen } = require("@testing-library/react");
import { Filters } from "../index.js";

describe("[COMP] <Filters>", () => {
  test("Debe hacer match con el snapshot, pasándole props obligatorios", () => {
    render(
      <Filters
        setResultsLimit={() => {}}
        setWordLength={() => {}}
        isLoading={false}
        setReloadAction={() => {}}
      />
    );
    expect(screen).toMatchSnapshot();
  });
});
