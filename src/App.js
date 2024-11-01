import Fantasias from "./Components/Fantasias/Fantasias";
import Header from "./Components/Header/Header";
import Inicio from "./Components/Inicio/Inicio";
import Sobre from "./Components/Sobre/Sobre";
//importar as funcionalidades das rotas:

import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter container que vai ativar as rotas
//Routes container para agrupar as rotas
//Route é cada rota individual
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </>
  );
}
