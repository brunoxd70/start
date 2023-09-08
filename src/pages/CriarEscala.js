import Admin from "../componentes/Admin";
import RodapePrincipal from "../componentes/RodapePrincipal"
import EnhancedTable from "../componentes/EnhancedTable"
import { Box, Container } from '@mui/material';
function CriaEscala() {
  return (
    <div id="wrapper">

      <Admin />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block"></div>

            </ul>
          </nav>


          <Box textAlign="center">
            <div className="d-sm-flex justify-content-center mb-4 d-flex ">
              <h1 className="h3 mb-0 text-gray-800">Cadastrar Escala</h1>
            </div>

            <Container>
              <EnhancedTable />
            </Container>
          </Box>

        </div>
        <RodapePrincipal />
      </div>
    </div>
  );
}

export default CriaEscala;