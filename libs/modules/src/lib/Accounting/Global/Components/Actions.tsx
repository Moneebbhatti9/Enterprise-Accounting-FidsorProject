import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import CustomDialog from './Delete';
import Block from './Block';
interface LongMenuProps {
  customerId: string;
  name: string;
  link: string;
}
export default function LongMenu({ customerId, name, link }: LongMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isblockDialogOpen, setIsblockDialogOpen] = React.useState(false);
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
  const handleblockClick = () => {
    if (!isblockDialogOpen) {
      setIsblockDialogOpen(true);
    }
    handleClose();
  };

  return (
    <div>
      <IconButton style={{ padding: '0px', paddingTop: '3px' }}>
        {name != 'Vendor Types' && (
          <Tooltip title={`View ${name}`}>
            <Link
              to={`view/${customerId}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <MdVisibility
                style={{
                  color: 'gray',
                  fontSize: '20px',
                  border: 'solid 1px gray',
                  borderRadius: '50%',
                  padding: '4px',
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Tooltip>
        )}
        {name === 'Vendor Types' && (
          <Tooltip title={`Edit ${name}`}>
            <Link to="" style={{ textDecoration: 'none', color: 'black' }}>
              <MdVisibility
                style={{
                  color: 'gray',
                  fontSize: '20px',
                  border: 'solid 1px gray',
                  borderRadius: '50%',
                  padding: '4px',
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Tooltip>
        )}
      </IconButton>{' '}
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ padding: '0px' }}
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
        {' '}
        {name != 'Vendor Types' && (
          <Link
            to={`view/${customerId}`}
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              View
            </MenuItem>
          </Link>
        )}
        {name != 'Vendor Types' && (
          <Link
            to={`edit/${customerId}`}
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              Edit
            </MenuItem>
          </Link>
        )}
        {name === 'Vendor Types' && (
          <Link
            to=""
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              Edit
            </MenuItem>
          </Link>
        )}
        <hr style={{ margin: '4px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        {name === 'Customer' && (
          <Link
            to="/salespayment/invoices/createinvoice"
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              Create Invoice
            </MenuItem>
          </Link>
        )}
        {name === 'Manage Accountant' && (
          <Link to="" style={{ textDecoration: 'none', color: '#111827' }}>
            <MenuItem
              style={{
                fontSize: '12px',
              }}
              onClick={handleblockClick}
              disabled={isblockDialogOpen}
            >
              Block
            </MenuItem>
          </Link>
        )}
        {name === 'Customer' && (
          <Link
            to="/salespayment/quotations/createquotation"
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              Create Quotation
            </MenuItem>
          </Link>
        )}
        {name === 'Customer' && (
          <Link
            to="/sendstatement"
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
                fontFamily: '"Be Vietnam", sans-serif',
              }}
            >
              Send Statement
            </MenuItem>
          </Link>
        )}
        {name === 'Quotations' ||
          (name === 'Bills' && (
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              Duplicate
            </MenuItem>
          ))}
        {name === 'Vendor' && (
          <Link
            to="/purchases/bills/add"
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              Create Bill
            </MenuItem>
          </Link>
        )}
        {name === 'Quotations' && (
          <MenuItem
            style={{
              fontSize: '12px',
            }}
          >
            Print
          </MenuItem>
        )}
        {name === 'Quotations' && (
          <MenuItem
            style={{
              fontSize: '12px',
            }}
          >
            Convert to Invoice
          </MenuItem>
        )}
        {name != 'Vendor Types' && (
          <hr style={{ margin: '4px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        )}
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
          open={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          title={'Delete Item'}
          titleBackground={'brown'}
          footerBg={'white'}
          text={'Are you sure you want to delete this item?'}
          yesColor="brown"
          id={customerId}
          url={link}
          name={name}
        />
      )}
      {isblockDialogOpen && (
        <Block
          open={isblockDialogOpen}
          onClose={() => setIsblockDialogOpen(false)}
          title={'Block Accountant'}
          text={'Are you sure you want to block this accountant?'}
          id={customerId}
          url={link}
          name={name}
        />
      )}
    </div>
  );
}
