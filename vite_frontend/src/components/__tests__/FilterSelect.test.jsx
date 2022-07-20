import { data } from "../../utils/appData.js";
import { render, screen } from "@testing-library/react";
import { FilterSelect } from "../FilterSelect.jsx";

describe("<FilterSelect> Pruebas", () => {
  test("Match con el snapshot pasándole array de props", () => {
    const options = data.limitResultsOptions;
    const { container } = render(<FilterSelect options={options} />);
    expect(container).toMatchSnapshot();
  });

  test("Muestra el mismo label de opciones que se le pasa mediante props", () => {
    const optLabel = "Densidad de palabra: ";
    render(<FilterSelect optLabel={optLabel} />);
    expect(screen.getByText("Densidad de palabra:").innerHTML).toBe(optLabel);
  });
});
