import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface CountrySelectProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  countries: { id: number; name: string }[];
  disabled?: boolean;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  countries,
  disabled,
}) => {
  return (
    <FormControl fullWidth size="small">
      <Select
        value={value}
        onChange={onChange}
        disabled={disabled}
        displayEmpty
        style={disabled ? { backgroundColor: '#f1f1f1' } : {}}
      >
        <MenuItem disabled value={0}>
          <em style={{ fontStyle: 'unset' }}>Select Country</em>
        </MenuItem>
        {countries.map((country) => (
          <MenuItem key={country.id} value={country.id}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;
