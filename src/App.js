import "./components/_generales.scss";
import styled from "styled-components";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import Api from "./components/api/Api";

function App() {
  return (
    <div className="caja">
      <NavBar className="nav" />
      <ItemListContainer />
      <Api />
    </div>
  );
}

export default App;
