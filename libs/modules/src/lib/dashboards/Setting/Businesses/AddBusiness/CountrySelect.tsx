import React, { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { getAllCountry } from 'libs/services/ConfigurartionService/ConfigurartionService';

interface Country {
  id: number;
  name: string;
}

interface CountrySelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  disabled?: boolean;
  error: boolean;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  disabled,
  error,
}) => {
  const [countryData, setCountryData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getAllCountry();
        setCountryData(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountry();
  }, []);

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
        {countryData.map((country) => (
          <MenuItem key={country.id} value={country.name}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;
