const { render, screen } = require("@testing-library/react");
import { TableRow } from "../TableRow.jsx";

describe("[COMP] <TableRow>", () => {
  const rowData = {
    ranking: [{ word: "hola", position: 12, occurrences: 20 }],
  };

  const renderElement = (
    <table>
      <tbody>
        <TableRow rowData={rowData} />
      </tbody>
    </table>
  );

  test("Debe mostrar el nombre de la palabra, recibida por props", () => {
    render(renderElement);
    expect(screen.getByTestId("td-word").innerHTML).toBe(
      rowData.ranking[0].word
    );
  });

  test("Debe mostrar la posición de la palabra, recibida por props", () => {
    render(renderElement);
    expect(screen.getByTestId("td-position").innerHTML).toBe(
      rowData.ranking[0].position.toString()
    );
  });

  test("Debe mostrar el número de ocurrencias de cada palabra, recibida por props", () => {
    render(renderElement);
    expect(screen.getByTestId("td-occurrences").innerHTML).toBe(
      rowData.ranking[0].occurrences.toString()
    );
  });
});
