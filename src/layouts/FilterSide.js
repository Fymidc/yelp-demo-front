import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterSide() {
 

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox  name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox  name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}