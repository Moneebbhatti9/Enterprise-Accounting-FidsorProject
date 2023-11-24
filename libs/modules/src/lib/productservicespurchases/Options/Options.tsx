import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import ImportCSV from '../ImportOptions/ImportCSVPurchases';
import ImportGoogle from '../ImportOptions/ImportGooglePurchases';

const options = ['Import from CSV', 'Import from Google Contacts'];

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showImportGoogle, setShowImportGoogle] = useState(false);
  const [showImportCSV, setShowImportCSV] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOptionClick = (option: any) => {
    if (option === 'Import from CSV') {
      setShowImportCSV(true);
    } else if (option === 'Import from Google Contacts') {
      setShowImportGoogle(true);
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
            component={Link}
            to={
              option === 'Import from CSV'
                ? '/purchases/vendors/import/csv'
                : option === 'Import from Google Contacts'
                ? '/purchases/vendors/import/googlecontacts'
                : ''
            }
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      {showImportCSV && <ImportCSV />}
      {showImportGoogle && <ImportGoogle />}
    </div>
  );
}
