import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
interface Option {
  category: string;
  label: string;
}
interface AccountDropdownProps {
  onSelect: (selectedValue: Option | null) => void;
}

const AccountDropdown = (props: AccountDropdownProps) => {
  const { onSelect } = props;
  const [value, setValue] = useState<{
    label: string;
    category: string;
  } | null>(null);

  const options = [
    { label: 'AED', category: 'Fruits' },
    { label: 'US', category: 'Fruits' },
    { label: 'EUR', category: 'Vegetables' },
  ];

  return (
    <div>
      <Autocomplete
        style={{ width: '280px' }}
        options={options}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} />}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          onSelect(newValue);
        }}
      />
    </div>
  );
};

export default AccountDropdown;
