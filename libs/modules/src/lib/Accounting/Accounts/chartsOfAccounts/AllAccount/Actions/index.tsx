import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RunReport from '../RunReport/index';
import ArchiveButton from './ArchiveButton';
import EditButton from './EditButton';
import ViewButton from './ViewButton';
const options = ['View', 'Edit', 'Run Report', 'Archive Account'];
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [showRunReport, setShowRunReport] = useState(false);
  const [showViewAccount, setShowViewAccount] = useState(false);
  const [showArchiveAccount, setShowArchiveAccount] = useState(false);
  const [showEditAccount, setShowEditAccount] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOptionClick = (option: any) => {
    if (option === 'Run Report') {
      setShowRunReport(true);
    } else if (option === 'View') {
      setShowViewAccount(true);
    } else if (option === 'Edit') {
      setShowEditAccount(true);
    } else if (option === 'Archive Account') {
      setShowArchiveAccount(true);
    }
    setAnchorEl(null); // Close the menu
  };

  const handleCloseModals = () => {
    setShowEditAccount(false);
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
            style={{fontSize:'12px'}}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {showRunReport && <RunReport />}
      {showArchiveAccount && <ArchiveButton />}
      {showEditAccount && (
        <EditButton isOpen={showEditAccount} onClose={handleCloseModals} />
      )}
      {showViewAccount && <ViewButton />}
    </div>
  );
}
