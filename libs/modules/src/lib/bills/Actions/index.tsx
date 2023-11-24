import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Delete from '../../customer/Actions/Delete';
import EditButton from '../../chartsOfAccounts/AllAccount/Actions/EditButton';
import { useNavigate } from 'react-router-dom';
const optionsWithSeparator = [
  'View',
  'Edit',
  'Duplicate',
  'Print',
  'Separator',
  'Convert to invoice',
  'Separator',
  'Send',
  'Export as PDF',
  'Separator',
  'Delete',
];
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [showEditAccount, setShowEditAccount] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const navigate = useNavigate();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOptionClick = (option: any) => {
    if (option === 'View') {
      navigate('/salespayment/quotations/view');
    } else if (option === 'Edit') {
      navigate('/salespayment/quotations/createquotation');
    } else if (option === 'Delete') {
      setShowDelete(true);
    }
    setAnchorEl(null);
  };

  const openDeleteModal = () => {
    setShowDelete(true);
  };

  const closeDeleteModal = () => {
    setShowDelete(false);
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
        {optionsWithSeparator.map((option, index) => (
          <React.Fragment key={option}>
            {option === 'Separator' ? (
              <hr style={{ margin: '4px 0' }} />
            ) : (
              <MenuItem
                selected={option === 'Pyxis'}
                onClick={() => handleMenuOptionClick(option)}
              >
                {option}
              </MenuItem>
            )}
          </React.Fragment>
        ))}
      </Menu>
      {/* {showDelete && <Delete isOpen={showDelete} onClose={closeDeleteModal} />} */}
    </div>
  );
}
