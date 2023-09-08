import Admin from "../componentes/Admin";
import { Box, Button, Container, Stack, SvgIcon, Typography, TextField } from '@mui/material';
import RodapePrincipal from "../componentes/RodapePrincipal"



function Cadastro() {
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
          <div className="row justify-content-center">

            <div className="container-fluid">

              <div className="d-sm-flex justify-content-center mb-4 d-flex ">
                <h1 className="h3 mb-0 text-gray-800">Cadastro Membro</h1>
              </div>
              <div className="d-sm-flex justify-content-center mb-4 d-flex ">
                <h1 className="h3 mb-0 text-success "></h1>
              </div>


            </div>

            <Box textAlign="center">
              <Container
                sx={{ '& > :not(style)': { m: 1, width: '50ch', flexGrow: 1 }, }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </Container>
            </Box>

          </div>
        </div>
        <RodapePrincipal />
      </div>
    </div>




  );
}

export default Cadastro;