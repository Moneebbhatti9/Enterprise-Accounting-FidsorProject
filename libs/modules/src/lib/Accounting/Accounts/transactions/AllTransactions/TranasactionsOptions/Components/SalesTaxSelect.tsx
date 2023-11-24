import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface SalesTaxSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  salesTaxes: string[];
  // defaultValue: string;
}

const SalesTaxSelect: React.FC<SalesTaxSelectProps> = ({
  value,
  onChange,
  salesTaxes,
  // defaultValue,
}) => {
  // const selectedValue = value === '' ? defaultValue : value;
  return (
    <FormControl fullWidth size="small">
      {/* <Select value={selectedValue} onChange={onChange} displayEmpty> */}
      <Select value={value} onChange={onChange} displayEmpty>
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Sales Tax</em>
        </MenuItem>
        {salesTaxes.map((salesTax) => (
          <MenuItem key={salesTax} value={salesTax}>
            {salesTax}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SalesTaxSelect;
