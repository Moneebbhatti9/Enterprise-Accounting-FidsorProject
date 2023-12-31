import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Delete from '../../customer/Actions/Delete';
import EditButton from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/Actions/EditButton';

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [showEditAccount, setShowEditAccount] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOptionClick = (option: any) => {
    if (option === 'Edit') {
      setShowEditAccount(true);
    } else if (option === 'Delete') {
      setShowDelete(true);
    }
    setAnchorEl(null);
  };

  const handleCloseModals = () => {
    setShowEditAccount(false);
    setShowDelete(false);
  };

  const options = ['Edit', 'Delete'];
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
      {/* {showCreateBill && <CreateBill />} */}
      {/* {showDelete && <Delete isOpen={showDelete} onClose={handleCloseModals} />} */}
      {showEditAccount && (
        <EditButton isOpen={showEditAccount} onClose={handleCloseModals} />
      )}
    </div>
  );
}
