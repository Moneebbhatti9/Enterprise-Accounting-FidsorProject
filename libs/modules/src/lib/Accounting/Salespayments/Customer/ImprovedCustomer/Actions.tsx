import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import CustomDialog from './Delete';
interface LongMenuProps {
  customerId: string;
  name: string;
  link: string;
  fetchData: (value: boolean) => void;
  deleteRecord: (value: boolean) => void;
  actionItems: Array<{ name: string }>;
}
export default function LongMenu({
  customerId,
  name,
  link,
  fetchData,
  deleteRecord,
  actionItems,
}: LongMenuProps) {
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
      <IconButton style={{ padding: '0px', paddingTop: '3px' }}>
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
        <hr style={{ margin: '4px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        {actionItems.map((item, index) => (
          <MenuItem
            key={index}
            style={{
              fontSize: '12px',
            }}
          >
            {item.name}
          </MenuItem>
        ))}
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
          fetchData={fetchData}
          deleteRecord={deleteRecord}
        />
      )}
    </div>
  );
}
