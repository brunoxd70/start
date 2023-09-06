import React, { useState } from 'react';
import {
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,TextField,
  TableHead,Paper,
} from '@mui/material';
import ResponsiveTimePickers from "./Time"


function SelectTableComponent() {
  const [selectValues1, setSelectValues1] = useState([]);
  const [selectValues2, setSelectValues2] = useState([]);

  const handleAddSelect = () => {
    setSelectValues1([...selectValues1, '']);
    setSelectValues2([...selectValues2, '']);
  };


  const handleSelectChange1 = (index, value) => {
    const updatedValues = [...selectValues1];
    updatedValues[index] = value;
    setSelectValues1(updatedValues);

    console.log(`Item ${index} selecionado: Opção ${value}`);
  };

  const handleSelectChange2 = (index, value) => {
    const updatedValues = [...selectValues2];
    updatedValues[index] = value;
    setSelectValues2(updatedValues);
  };


  return (
  <div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440, maxWidth: 1200}} >
      <Table aria-label="caption table">
        <caption>My Tasks</caption>
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell align="center">Projeto</TableCell>
            <TableCell align="center">Tarefa</TableCell>
            <TableCell align="center">Lançamento</TableCell>
            <TableCell align="center">Inicio</TableCell>
            <TableCell align="center">Fim</TableCell>
            <TableCell align="center">Total</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {selectValues1.map((value, index) => (
              <TableRow key={index} >
                <TableCell>
                  <Select fullWidth
                    value={value}
                    onChange={(event) => handleSelectChange1(index, event.target.value)}
                  >
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select fullWidth
                    value={selectValues2[index]}
                    onChange={(event) => handleSelectChange2(index, event.target.value)}
                  >
                    <MenuItem value="optionA">Option A</MenuItem>
                    <MenuItem value="optionB">Option B</MenuItem>
                    <MenuItem value="optionC">Option C</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                <TextField id="projeto" fullWidth />
                </TableCell>
                <TableCell>
                <TextField id="id" fullWidth />
                </TableCell>
                <TableCell>
                <ResponsiveTimePickers/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
  

     <Button className="col-xl-2 col-md- mb-4 " variant="contained" color="warning">Criar Tarefa</Button>
    <Button className="col-xl-2 col-md-6 mb-4 "variant="contained">Lançar</Button>
    <Button className="col-xl-2 col-md-6 mb-4 "variant="contained" color="error" onClick={handleAddSelect}>Finalizar</Button>
</div>
  ); 
    
}

export default SelectTableComponent;