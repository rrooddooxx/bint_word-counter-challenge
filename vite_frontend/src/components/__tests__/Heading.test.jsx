const { render, screen, logRoles } = require("@testing-library/react");
import { Heading } from "../index.js";

describe("[COMP] <Heading>", () => {
  test("Debe mostrar aviso de que está cargando si la prop de textTitle está vacía", () => {});
  render(<Heading textTitle={""} />);
  expect(screen.getByText("Cargando...")).toBeTruthy();
  expect(screen.getByRole("heading", { level: 4 }).textContent).toBe(
    "Cargando..."
  );

  test("Debe mostrar el título del texto pasado por props en el encabezado, y un link para acceder al texto generado con el id pasado por props", () => {
    const title = "Un Título";
    const id = 10;
    const { container } = render(<Heading textTitle={title} id={id} />);
    expect(screen.getByRole("heading", { level: 4 }).textContent).toBe(
      "📚 Texto: " + title
    );
    expect(screen.getByRole("link").getAttribute("href")).toBe(
      "http://localhost:8080/generator/word-counter/text?id=" + id.toString()
    );
  });
});
