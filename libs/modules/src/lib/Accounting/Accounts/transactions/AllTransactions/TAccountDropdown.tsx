import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

const AccountsDropdown = () => {
  const [selectedAccount, setSelectedAccount] = useState('');

  const handleAccountChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedAccount(event.target.value);
  };

  const accounts = ['Cash on Bank', 'Owner Investment', 'Money in Transit', 'Credit Card'];

  return (
    <FormControl fullWidth size="small">
      <Select fullWidth value={selectedAccount} onChange={handleAccountChange}>
        {accounts.map((account) => (
          <MenuItem key={account} value={account}>
            {account}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AccountsDropdown;
