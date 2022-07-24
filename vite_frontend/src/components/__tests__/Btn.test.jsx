import { fireEvent, render, screen } from "@testing-library/react";
import { Btn } from "../index.js";

describe("[COMP] <Btn>", () => {
  test("Debe de mostrar indicador de carga si isLoading es true", () => {
    render(<Btn isLoading={true} />);
    expect(screen.getByRole("button").textContent).toBe("Cargando...");
  });

  test("Debe de mostrar botón para ejecutar una recarga de datos si isLoading es false, y ejecutar la función setReloadAction 1 vez al hacer click", () => {
    //
    const setReloadAction = jest.fn();
    render(<Btn isLoading={false} setReloadAction={setReloadAction} />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Refrescar");
    fireEvent.click(button);
    expect(setReloadAction).toBeCalledTimes(1);
  });
});
