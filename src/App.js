import "./components/_generales.scss";
import styled from "styled-components";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/views/container/ItemListContainer";
import Usuarios from "./components/views/usuarios/Usuarios";
import Inicio from "./components/views/inicio/Inicio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="caja">
        <NavBar className="nav" />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/itemlistcontainer" element={<ItemListContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
