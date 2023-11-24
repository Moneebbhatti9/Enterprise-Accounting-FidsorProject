import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Delete from '../../../customer/Actions/Delete';
import Block from './Block';
const options = ['Block', 'Delete'];
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [showBlock, setShowBlock] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOptionClick = (option: any) => {
    if (option === 'Block') {
      setShowBlock(true);
    } else if (option === 'Delete') {
      setShowDelete(true);
    }

    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => handleMenuOptionClick(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {showBlock && <Block />}
      {/* {showDelete && (
        <Delete
          isOpen={false}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      )} */}
    </div>
  );
}
