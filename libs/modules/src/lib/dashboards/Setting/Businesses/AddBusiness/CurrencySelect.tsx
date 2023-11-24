import React, { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

import { getAllCurrency } from 'libs/services/ConfigurartionService/ConfigurartionService';
interface Currency {
  id: number;
  name: string;
}
interface CurrencySelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  disabled?: boolean;
  error: boolean;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  disabled,
  error,
}) => {
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);
  useEffect(() => {
    async function fetchCountry() {
      try {
        const data = await getAllCurrency();
        console.log(data);
        setCurrencyData(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }

    fetchCountry();
  }, []);
  return (
    <FormControl fullWidth size="small">
      <Select
        value={value}
        onChange={onChange}
        error={error}
        displayEmpty
        style={disabled ? { backgroundColor: '#f1f1f1' } : {}}
      >
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Currency</em>
        </MenuItem>
        {currencyData.map((currenciesData) => (
          <MenuItem key={currenciesData.id} value={currenciesData.name}>
            {currenciesData.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelect;
