const { renderHook, waitFor } = require("@testing-library/react");
const { useFetch } = require("../useFetch.js");

describe("[Hooks] Pruebas sobre useFetch", () => {
  test("Debe regresar el objeto de estado inicial (antes de la carga de la API)", () => {
    //
    const { result } = renderHook(() => useFetch(1, 5, false));
    const { id, title, ranking } = result.current[0];
    const isLoading = result.current[1];

    expect(id).toBe(Number(0));
    expect(title).toBeFalsy();
    expect(ranking.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("Debe retornar la respuesta de la API (id, title, ranking) y indicador de carga (isLoading) en false ", async () => {
    const { result } = renderHook(() => useFetch(1, 5, false));
    await waitFor(() =>
      expect(result.current[0].ranking.length).toBeGreaterThan(0)
    );

    const { id, title, ranking } = result.current[0];
    const isLoading = result.current[1];

    expect(ranking.length).toBeGreaterThan(0);
    expect(ranking.length).toBe(5);
    expect(isLoading).toBe(false);
    expect(title).not.toBe("");
    expect(id).toBeGreaterThan(0);
  });
});
