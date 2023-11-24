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
  error: boolean;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  currencies,
  error,
}) => {
  return (
    <FormControl variant="outlined" size="small">
      <Select value={value} onChange={onChange} error={error} displayEmpty>
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
