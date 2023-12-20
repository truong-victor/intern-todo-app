import { getCities } from '../services/api';
import { useCartContext } from '../../../../@core/provider/CartProvider';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useController } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectCity(props) {

  const {control, name} = props


  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });




  const [cities, setCities] = React.useState([]);
  
  const handleChange =(e)=>{
    onChange(e?.target?.value)
  }
  React.useEffect(()=>{
  const fetchCities = async ()=>{
    const response = await getCities();
    setCities(response.results)
  }

  fetchCities()
  },[])
  return (
    <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">Tỉnh / Thành Phố</InputLabel>
        <Select
          name = {name}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          // multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-cities" label="Chip" />}
         
          MenuProps={MenuProps}
        >
          {cities.map((city) => (
            <MenuItem
              key={city.province_id}
              value={city.province_id}
              // style={getStyles(name, personName, theme)}
            >
              {city.province_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

