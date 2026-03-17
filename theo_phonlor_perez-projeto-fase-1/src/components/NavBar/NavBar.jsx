import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/series">Séries</Link> |{" "}
      <Link to="/cadastro">Cadastrar</Link> |{" "}
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}

export default NavBar;