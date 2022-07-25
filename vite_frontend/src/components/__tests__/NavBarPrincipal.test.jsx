import { render, screen } from "@testing-library/react";
import { NavBarPrincipal } from "../index.js";

describe("[COMP] <NavBarPrincipal>", () => {
  const navbarSections = [
    { name: "Inicio", href: "/" },
    { name: "API Docs", href: "#apidocs" },
  ];

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(
      <NavBarPrincipal navBarSections={navbarSections} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe renderizar el arreglo entregado por props como elementos del navbar", () => {
    const { container } = render(
      <NavBarPrincipal navBarSections={navbarSections} />
    );
    expect(screen.getAllByLabelText("navitem").length).toBe(
      navbarSections.length
    );
    expect(screen.getByText("Inicio").textContent).toBe(navbarSections[0].name);
    expect(screen.getByText("API Docs").textContent).toBe(
      navbarSections[1].name
    );
  });
});
