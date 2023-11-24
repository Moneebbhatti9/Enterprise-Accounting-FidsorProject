import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

const CategoryDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedValue(event.target.value);
  };

  const categories = ['Uncategorized Expense', 'Expense Accounts', 'Accounting Fees', 'Advertising & Promotion', 'Bank Service Charges'];

  useEffect(() => {
    // Handle the selected value change here (e.g., update some global state)
    console.log('Selected category:', selectedValue);
  }, [selectedValue]);

  return (
    <FormControl fullWidth size="small">
      <Select fullWidth value={selectedValue} onChange={handleChange}>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;
