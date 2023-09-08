import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipal from "./pages/MenuPrincipal"
import Cadastro from "./pages/Cadastro"
import Chamada from "./pages/Chamada"
import ConsultaVisitante from "./pages/ConsultaVisitante"
import CriarEscala from "./pages/CriarEscala"



export default props => (

  <Router>
    <Routes>
      <Route path="/start" element={<MenuPrincipal />} />
      <Route path="/Cadastro" Component={Cadastro} />
      <Route path="/Chamada" Component={Chamada} />
      <Route path="/ConsultaVisitante" Component={ConsultaVisitante} />
      <Route path="/CriarEscala" Component={CriarEscala} />
    </Routes>
  </Router>
)

