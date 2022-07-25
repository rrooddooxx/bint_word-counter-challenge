import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

const NavBarPrincipal = ({ navBarSections }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">🚀 Word Ranking APP!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navBarSections.map(menuitem => (
              <Nav.Link
                href={menuitem.href}
                key={menuitem.name}
                aria-label={"navitem"}
              >
                {menuitem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBarPrincipal.propTypes = {
  navBarSections: PropTypes.array.isRequired,
};

export { NavBarPrincipal };
