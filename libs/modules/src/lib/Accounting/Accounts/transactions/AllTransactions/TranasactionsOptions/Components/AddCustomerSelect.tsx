import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface AddCustomerSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  customers: string[];
}

const AddCustomerSelect: React.FC<AddCustomerSelectProps> = ({
  value,
  onChange,
  customers,
}) => {
  return (
    <FormControl fullWidth size="small">
      <Select value={value} onChange={onChange} displayEmpty>
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Customer</em>
        </MenuItem>
        {customers.map((customer) => (
          <MenuItem key={customer} value={customer}>
            {customer}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AddCustomerSelect;
