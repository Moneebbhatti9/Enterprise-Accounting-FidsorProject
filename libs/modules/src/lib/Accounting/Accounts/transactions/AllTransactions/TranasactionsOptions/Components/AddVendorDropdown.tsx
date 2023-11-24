import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface AddVendorSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  vendors: string[];
}

const AddVendorSelect: React.FC<AddVendorSelectProps> = ({
  value,
  onChange,
  vendors,
}) => {
  return (
    <FormControl fullWidth size="small">
      <Select value={value} onChange={onChange} displayEmpty>
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Vendor</em>
        </MenuItem>
        {vendors.map((vendor) => (
          <MenuItem key={vendor} value={vendor}>
            {vendor}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AddVendorSelect;
