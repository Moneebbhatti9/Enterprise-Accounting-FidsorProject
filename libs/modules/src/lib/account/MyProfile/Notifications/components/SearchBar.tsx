import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

interface SearchBarProps {
  searchText: string;
  onSearchChange: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  onSearchChange,
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleSearchSubmit = () => {};

  return (
    <Box>
      <TextField
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="search"
                onClick={handleSearchSubmit}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          style: { borderRadius: '20px', height: '30px' },
        }}
        style={{ borderRadius: '20px', height: '30px' }}
      />
    </Box>
  );
};

export default SearchBar;
