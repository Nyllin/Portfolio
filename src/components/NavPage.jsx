import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../styles/NavPage.css'
import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <>
      <Navbar className="navbar-container">
        <Container>
          <NavLink to="/" className="nav-brand"><h2 className="text-light">Nay Yi</h2></NavLink>
          <Nav className="nav-container">
            <NavLink to="/" className="btn btn-outline-warning border-0 text-light rounded-0">Home</NavLink >
            <NavLink to="/about" className=" btn btn-outline-warning border-0 text-light rounded-0">About</NavLink>
            <NavLink to="/contact" className=" btn btn-outline-warning border-0 text-light rounded-0">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavPage;


