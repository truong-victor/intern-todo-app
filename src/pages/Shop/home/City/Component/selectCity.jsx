import { getCities } from '../api/apiAddress';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useController } from 'react-hook-form';
import { OutlinedInput } from '@mui/material';

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
    console.log(e.target.value)
    onChange(e?.target?.value)
  }
  React.useEffect(()=>{
  const fetchCities = async ()=>{
    const response = await getCities();
    console.log(response.results)
    setCities(response.results)
  }

  fetchCities()
  },[])
  return (
    <FormControl sx={{ width: 300 }}>
        <InputLabel id="district">Tỉnh/ Thành phố</InputLabel>
        <Select
          name = {name}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          label="Tỉnh/Thành phố"
          value={value}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-cities" label="Chip" />}
          className='w-80'
          MenuProps={MenuProps}
        >
          {cities.map((city) => (
            <MenuItem
              key={city.province_id}
              value={city.province_id}
            >
              {city.province_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}