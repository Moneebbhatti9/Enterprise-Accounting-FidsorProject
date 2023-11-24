import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import customVError from './customVError';
interface CountrySelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  countries: string[];
  disabled?: boolean;
  error?: boolean;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  countries,
  disabled,
  error,
}) => {
  return (
    <FormControl fullWidth size="small">
      <Select
        value={value}
        onChange={onChange}
        disabled={disabled}
        displayEmpty
        error={error}
        style={disabled ? { backgroundColor: '#f1f1f1' } : {}}
      >
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Country</em>
        </MenuItem>
        {countries.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
      {error && customVError()}
    </FormControl>
  );
};

export default CountrySelect;
