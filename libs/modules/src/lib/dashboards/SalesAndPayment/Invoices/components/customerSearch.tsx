import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { StyledButton } from '../../../../Accounting/Global/Styling';
import { useIntl } from 'react-intl';
function CustomerSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = () => {
  //   // You can implement your search logic here
  //   console.log('Searching for:', searchTerm);
  // };

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const { messages } = useIntl();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {/* <IconButton onClick={handleSearch} aria-label="search">
        <SearchIcon />
      </IconButton> */}
      <StyledButton variant="contained" color="primary">
        {messages['common.search'] as string}
      </StyledButton>
    </div>
  );
}

export default CustomerSearch;
