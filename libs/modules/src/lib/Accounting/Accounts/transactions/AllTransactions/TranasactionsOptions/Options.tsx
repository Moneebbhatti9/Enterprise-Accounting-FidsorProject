import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import AddJournelTransactions from './AddJournelTransactions';
import UploadBankStatement from './UploadBankStatement';

const options = ['Add journel Transaction', 'Upload a Bank Statement'];

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAddJournelTransactions, setShowAddJournelTransactions] =
    useState(false);
  const [showUploadBankStatement, setShowUploadBankStatement] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOptionClick = (option: any) => {
    if (option === 'Add journel Transaction') {
      setShowAddJournelTransactions(true);
    } else if (option === 'Upload a Bank Statement') {
      setShowUploadBankStatement(true);
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
        <Link
          to="addjourneltransaction"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MenuItem style={{ fontSize: '12px' }}>
            Add journel Transaction
          </MenuItem>
        </Link>
        <Link
          to="uploadbankstatement"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MenuItem style={{ fontSize: '12px' }}>
            Upload a Bank Statement
          </MenuItem>
        </Link>

        {/* {options.map((option) => (
          <><MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => handleMenuOptionClick(option)}
            component={Link}
            style={{fontSize:'12px'}}
            to={
              option === 'Add journel Transaction'
                ? ''
                : option === 'Upload a Bank Statement'
                ? ''
                : ''
            }
              >
            {option}
          </MenuItem></>
        ))} */}
      </Menu>

      {showAddJournelTransactions && <AddJournelTransactions />}
      {showUploadBankStatement && <UploadBankStatement />}
    </div>
  );
}
