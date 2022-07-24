import { data } from "../../utils/appData.js";
import { fireEvent, render, screen } from "@testing-library/react";
import { FilterSelect } from "../FilterSelect.jsx";

describe("[COMP] <FilterSelect>", () => {
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

  test("Llama a la función onChangeFn en el evento onChange, pasándole el valor del option seleccionado", () => {
    const onChangeFn = jest.fn();
    const optionsArr = [
      { name: "dos", val: 2 },
      { name: "tres", val: 3 },
    ];

    render(<FilterSelect options={optionsArr} onChangeFn={onChangeFn} />);
    const dropdownElement = screen.getByLabelText("select-dropdown");
    fireEvent.change(dropdownElement, { target: { value: 3 } });
    fireEvent.change(dropdownElement, { target: { value: 2 } });

    expect(onChangeFn).toHaveBeenCalledTimes(2);
    expect(onChangeFn).toHaveBeenCalledWith(2);
  });
});
