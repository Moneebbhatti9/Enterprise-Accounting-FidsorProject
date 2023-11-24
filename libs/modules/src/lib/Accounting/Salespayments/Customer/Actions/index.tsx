import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import CustomDialog from './CustomDialog';
interface LongMenuProps {
  customerId: string; 
  name: string;
  link: string;
}
export default function LongMenu({ customerId,name, link }: LongMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false); 
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteClick = () => {
    if (!isDeleteDialogOpen) {
      setIsDeleteDialogOpen(true); 
    }
    handleClose();
  };
  return (
    <div>
      <IconButton
      >
      <Tooltip title={`View ${name}`}>
       <Link
         to={`view/${customerId}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MdVisibility  style={{
                      color: 'gray',
                      fontSize: '25px',
                      border: 'solid 1px gray',
                      borderRadius: '50%',
                      padding: '4px',
                      cursor: 'pointer',
                    }}/>
          </Link>
          </Tooltip>
          </IconButton> <IconButton  aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
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
        {' '}
        <Link
          to={`view/${customerId}`}
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem style={{
            fontSize: '12px',
       
          }}>
            View
          </MenuItem>
        </Link>
        <Link
           to={`edit/${customerId}`}
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem style={{
            fontSize: '12px',
          
          }}>
            Edit
          </MenuItem>
        </Link>
        <hr style={{ margin: '4px 0' ,borderColor: 'rgba(0, 0, 0, 0.12)'}} />
        {name === 'Customer' && (
        <Link
          to="/salespayment/invoices/create"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
        <MenuItem style={{
            fontSize: '12px',
            
          }}>
          Create Invoice
        </MenuItem>
        </Link>
        )}
         {name === 'Customer' && (
        <Link
          to="/salespayment/quotations/createquotation"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem style={{
            fontSize: '12px',
           
          }}>
           Create Quotation
          </MenuItem>
        </Link>
         )}
          {name === 'Customer' && (
        <Link
          to="/sendstatement"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
        <MenuItem style={{
            fontSize: '12px',
            fontFamily: '"Be Vietnam", sans-serif', 
          }} >
         Send Statement
        </MenuItem>
        </Link>
          )}
        <hr style={{ margin: '4px 0',borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        <MenuItem
          style={{
            fontSize: '12px',
            color: 'red',
          }}
          onClick={handleDeleteClick}
        disabled={isDeleteDialogOpen}
        >
          Delete
        </MenuItem>
      </Menu>
      {isDeleteDialogOpen && (
        <CustomDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)} 
        />
      )}
    </div>
  );
}