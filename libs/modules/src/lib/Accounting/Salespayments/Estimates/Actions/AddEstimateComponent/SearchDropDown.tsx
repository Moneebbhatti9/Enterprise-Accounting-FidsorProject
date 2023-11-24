import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Divider from '@mui/material/Divider';

interface ItemDropdownProps {
  options: string[];
  onSelectItem: (item: string) => void;
  onAddNewProduct: () => void;
}

const ItemDropdown: React.FC<ItemDropdownProps> = ({
  options,
  // onSelectItem,
  onAddNewProduct,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const handleItemChange = (option: string) => {
    setSelectedItem(option);
    handleCloseDropdown();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Button
        onClick={handleOpenDropdown}
        variant="outlined"
        endIcon={<ArrowDropDownIcon />}
        sx={{ width: '90%' }}
      >
        {selectedItem ? selectedItem : 'Items'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseDropdown}
        sx={{ marginTop: '10px' }}
      >
        <MenuItem>
          <TextField
            value={searchQuery}
            onChange={handleSearchChange}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </MenuItem>
        {searchQuery &&
          filteredOptions.map((option) => (
            <MenuItem key={option} onClick={() => handleItemChange(option)}>
              {option}
            </MenuItem>
          ))}
        <Divider />
        <MenuItem>
          <Button
            onClick={onAddNewProduct}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <AddCircleOutlineIcon fontSize="small" />
            Add new Product
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ItemDropdown;
