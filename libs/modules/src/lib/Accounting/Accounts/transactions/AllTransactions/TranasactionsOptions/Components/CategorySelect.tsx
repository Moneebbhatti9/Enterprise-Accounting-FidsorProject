import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface CategorySelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  categories: string[];
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  value,
  onChange,
  categories,
}) => {
  return (
    <FormControl fullWidth size="small">
      <Select value={value} onChange={onChange} displayEmpty>
        <MenuItem disabled value="">
          <em style={{ fontStyle: 'unset' }}>Select Customer</em>
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
