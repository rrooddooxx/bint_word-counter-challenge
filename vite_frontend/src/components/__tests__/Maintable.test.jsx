import { render, screen } from "@testing-library/react";
import { useFetch } from "../../hooks/useFetch.js";
import { MainTable } from "../index.js";

describe("<MainTable> Pruebas", () => {
  test("Muestra spinner al cargar los datos", () => {
    const data = {
      ranking: [],
    };
    render(<MainTable rowData={data} isLoading={true} />);
    expect(screen.getByRole("status")).toBeTruthy();
  });

  test("Crea las filas de la tabla con la información recibida", () => {
    //
    const ranking = [
      { position: 1, word: "palabra1", occurrences: 10 },
      { position: 2, word: "palabra2", occurrences: 20 },
      { position: 3, word: "palabra3", occurrences: 35 },
    ];
    const rowData = {
      id: 1,
      title: "Un Texto",
      ranking,
    };

    render(<MainTable rowData={rowData} isLoading={false} />);
    expect(screen.getAllByRole("cell").length).toBe(9);
  });
});
