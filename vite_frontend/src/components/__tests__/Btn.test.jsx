import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Btn } from "../index.js";

describe("[COMP] <Btn>", () => {
  test("Debe de mostrar indicador de carga si isLoading es true", () => {
    render(<Btn isLoading={true} />);
    expect(screen.getByRole("button").textContent).toBe("Cargando...");
  });

  test("Debe mostrar 'Refrescar' si isLoading es false, para poder detonar una recarga. Debe ejecutar la función setReloadAction pasada por props 1 vez por click, la que debe retornar la negación del estado actual.", () => {
    //
    const setReloadAction = jest.fn(fn => fn(true));
    render(<Btn isLoading={false} setReloadAction={setReloadAction} />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Refrescar");
    fireEvent.click(button);
    expect(setReloadAction).toBeCalledTimes(1);
    expect(setReloadAction).toReturnWith(false);
  });
});
