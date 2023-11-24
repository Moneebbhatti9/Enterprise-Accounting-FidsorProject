import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import CustomDialog from './Delete';
import EditAccount from '../../../Accounting/Accounts/chartsOfAccounts/AllAccount/EditAccount';
import ViewAccount from '../../../Accounting/Accounts/chartsOfAccounts/AllAccount/ViewAccount';
interface LongMenuProps {
  customerId: string;
  name: string;
  link: string;
}
export default function AccountsAction({
  customerId,
  name,
  link,
}: LongMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false);

  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [isArchiveDialogOpen, setIsArchiveDialogOpen] = React.useState(false);
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
  const handleViewClick = () => {
    if (!isViewDialogOpen) {
      setIsViewDialogOpen(true);
    }
    handleClose();
  };
  const handleArchiveClick = () => {
    if (!isArchiveDialogOpen) {
      setIsArchiveDialogOpen(true);
    }
    handleClose();
  };
  const handleEditClick = () => {
    if (!isEditDialogOpen) {
      setIsEditDialogOpen(true);
    }
    handleClose();
  };
  return (
    <div>
      <IconButton>
        <Tooltip title={`View ${name}`}>
          <Link
            to={`view/${customerId}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <MdVisibility
              style={{
                color: 'gray',
                fontSize: '25px',
                border: 'solid 1px gray',
                borderRadius: '50%',
                padding: '4px',
                cursor: 'pointer',
              }}
            />
          </Link>
        </Tooltip>
      </IconButton>{' '}
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
        {' '}
        <MenuItem
          style={{
            fontSize: '12px',
          }}
          onClick={handleViewClick}
          disabled={isViewDialogOpen}
        >
          View
        </MenuItem>
        <MenuItem
          style={{
            fontSize: '12px',
          }}
          onClick={handleEditClick}
          disabled={isEditDialogOpen}
        >
          Edit
        </MenuItem>
        <hr style={{ margin: '4px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        {name === 'Customer' && (
          <Link
            to="/salespayment/invoices/create"
            style={{ textDecoration: 'none', color: '#111827' }}
          >
            <MenuItem
              style={{
                fontSize: '12px',
              }}
            >
              Run Report
            </MenuItem>
          </Link>
        )}
        <MenuItem
          style={{
            fontSize: '12px',
          }}
        >
          Run Report
        </MenuItem>
        <MenuItem
          style={{
            fontSize: '12px',
          }}
          onClick={handleArchiveClick}
          disabled={isArchiveDialogOpen}
        >
          Archive Account
        </MenuItem>
        {name === 'Archive Account' && (
          <MenuItem
            style={{
              fontSize: '12px',
            }}
          >
            Unarchive Account
          </MenuItem>
        )}
        {name === 'Vendor' && (
          <MenuItem
            style={{
              fontSize: '12px',
            }}
          >
            Create Bill
          </MenuItem>
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
        <hr style={{ margin: '4px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
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
      {isEditDialogOpen && (
        <EditAccount
          open={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          title={'Edit'}
          titleBackground={'brown'}
          footerBg={'white'}
          text={'sdf'}
        />
      )}
      {isViewDialogOpen && (
        <ViewAccount
          open={isViewDialogOpen}
          onClose={() => setIsViewDialogOpen(false)}
          title={'View'}
          titleBackground={'brown'}
          footerBg={'white'}
          text={'sdf'}
        />
      )}
      {isArchiveDialogOpen && (
        <CustomDialog
          open={isArchiveDialogOpen}
          onClose={() => setIsArchiveDialogOpen(false)}
          title={'Archive Account'}
          titleBackground={'#008040ad'}
          footerBg={'white'}
          text={'Are you sure you want to archive this account?'}
          yesColor="#008040ad"
          id={customerId}
          url={link}
          name={name}
        />
      )}
    </div>
  );
}
