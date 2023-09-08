import React, { useState } from 'react';
import {
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow, TextField,
  TableHead, Paper, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function SelectTableComponent() {
  const [rows, setRows] = useState([{ id: 1, selectedOption1: '', selectedOption2: '' }]);
  const [option2Data, setOption2Data] = useState({
    'producao': ['PL', 'PO', 'PI'],
    'louvor': ['Bateria', 'Baixo', 'Teclado'],
    'crianca': ['Sala 1', 'Sala 2', 'Sala 3']
  });


  const handleSelectChange1 = (event, id) => {
    const selectedValue = event.target.value;
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, selectedOption1: selectedValue, selectedOption2: '' } : row
    );
    setRows(updatedRows);
  };

  const handleSelectChange2 = (event, id) => {
    const selectedValue = event.target.value;
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, selectedOption2: selectedValue } : row
    );

    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow = { id: rows.length + 1, selectedOption1: '', selectedOption2: '' };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };
  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600, maxWidth: 1200 }} >
          <Table aria-label="caption table">
            <caption>My Tasks</caption>
            <TableHead>
              <TableRow>
                <TableCell >Deletar</TableCell>
                <TableCell>Departamento</TableCell>
                <TableCell align="center">Cargo</TableCell>
                <TableCell align="center">Motivo</TableCell>
                <TableCell >Dia Que Não Pode</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ width: '5%' }}>
                    <IconButton onClick={() => deleteRow(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Select fullWidth
                      value={row.selectedOption1}
                      onChange={(event) => handleSelectChange1(event, row.id)}
                    >

                      <MenuItem value="producao">Produção</MenuItem>
                      <MenuItem value="louvor">Louvor</MenuItem>
                      <MenuItem value="crianca">Criança</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select fullWidth
                      value={row.selectedOption2}
                      onChange={(event) => handleSelectChange2(event, row.id)}
                    >

                      {option2Data[row.selectedOption1]?.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <TextField id="projeto" fullWidth />
                  </TableCell>
                  <TableCell>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                      <DatePicker format="DD/MM/YYYY" />


                    </LocalizationProvider>

                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Button className="col-xl-4 col-md-6 mb-4 " variant="contained" onClick={addRow} >Gravar Escala </Button>
      <Button className="col-xl-4 col-md-6 mb-4 " variant="contained" color="warning" onClick={addRow} >Adicionar Escala </Button>

    </div>
  );

}

export default SelectTableComponent;