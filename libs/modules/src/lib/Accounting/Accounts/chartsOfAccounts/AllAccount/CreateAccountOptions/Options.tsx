import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import ImportAccount from '../ImportAccount/index';
import RunReport from '../RunReport';

const options = ['Run Report', 'Import Account'];

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showImportAccount, setShowImportAccount] = useState(false);
  const [showRunReport, setShowRunReport] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOptionClick = (option:any) => {
    if (option === 'Import Account') {
      setShowImportAccount(true);
    } else if (option === 'Run Report') {
      setShowRunReport(true);
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
          style={{fontSize:'12px'}}
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => handleMenuOptionClick(option)}
            component={Link}
            to={option === 'Import Account' ? '/accounting/chartofaccounts/importaccount' : ''}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      {showImportAccount && <ImportAccount />}
      {showRunReport && <RunReport />}
    </div>
  );
}
