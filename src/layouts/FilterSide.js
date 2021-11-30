import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Switch } from '@mui/material';

export default function FilterSide() {
 

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filters</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  name="Wifi" />
            }
            label="Free WI-FI"
          />
          <FormControlLabel
            control={
              <Checkbox  name="Outdoor" />
            }
            label="Outdoor Allowed"
          />
          <FormControlLabel
            control={
              <Checkbox  name="Open" />
            }
            label="Open Now"
          />
        </FormGroup>


        <FormLabel sx={{marginTop:"1rem"}}  component="legend">Categories</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch  name="Cafe" />
            }
            label="Cafes"
          />
          <FormControlLabel
            control={
              <Switch  name="Restaurant" />
            }
            label="Restaurants"
          />
          <FormControlLabel
            control={
              <Switch  name="Cafe & Tea" />
            }
            label="Cafe & Tea"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}