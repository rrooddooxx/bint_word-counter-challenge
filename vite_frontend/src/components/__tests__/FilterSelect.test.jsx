import { data } from "../../utils/appData.js";
import { fireEvent, render, screen } from "@testing-library/react";
import { FilterSelect } from "../FilterSelect.jsx";

describe("<FilterSelect> Pruebas", () => {
  const options = data.limitResultsOptions;
  test("Match con el snapshot pasándole array de props", () => {
    const { container } = render(
      <FilterSelect options={options} onChangeFn={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Muestra el mismo label de opciones que se le pasa mediante props", () => {
    const optLabel = "Densidad de palabra: ";
    render(
      <FilterSelect
        optLabel={optLabel}
        options={options}
        onChangeFn={() => {}}
      />
    );
    expect(screen.getByText("Densidad de palabra:").innerHTML).toBe(optLabel);
  });

  test("Adquiere el valor del arreglo de opciones pasado por props", () => {
    const options = [{ name: "once", val: 11 }];
    render(<FilterSelect options={options} onChangeFn={() => {}} />);
    const selectNode = screen.getByLabelText("select-dropdown");
    fireEvent.change(selectNode, { target: { value: 11 } });
    expect(selectNode.value).toBe(options[0].val.toString());
  });
});
