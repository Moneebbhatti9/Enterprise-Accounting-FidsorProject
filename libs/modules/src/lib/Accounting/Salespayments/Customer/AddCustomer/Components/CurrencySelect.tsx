import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface CurrencySelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  currencies: string[];
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  currencies,
}) => {
  return (
    <FormControl variant="outlined" fullWidth sx={{ width: '100%' }}>
      <Select value={value} onChange={onChange} displayEmpty>
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Currency</em>
        </MenuItem>
        {currencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelect;
