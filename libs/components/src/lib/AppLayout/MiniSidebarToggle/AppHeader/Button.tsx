import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MdAddCircleOutline } from 'react-icons/md';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Link } from 'react-router-dom';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        startIcon={<MdAddCircleOutline />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          border: '1px solid #313541',
          backgroundColor: 'white',
          color: '#313541',
          '&:hover': {
            // Hover styles
            backgroundColor: '#57b8c9',
            color: 'white',
            border: '1px solid #57b8c9',
          },
        }}
      >
        <IntlMessages id="common.new" />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link
          to="/accounting/transactions"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="sidebar.accounting.transactions" />
          </MenuItem>
        </Link>
        <Link
          to="/salespayment/quotations/createquotation"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="sidebar.salespayment.estimates" />
          </MenuItem>
        </Link>
        <Link
          to="/salespayment/invoices/createinvoice"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="invoice.invoice" />
          </MenuItem>
        </Link>
        <Link
          to="/salespayment/recurringinvoices"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="sidebar.salespayment.recurringinvoices" />
          </MenuItem>
        </Link>
        <Link
          to="/purchases/bills/add"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="sidebar.purchases.bills" />
          </MenuItem>
        </Link>
        <Link
          to="/salespayment/customer/addcustomer"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="sidebar.ecommerce.customers" />
          </MenuItem>
        </Link>
        <Link
          to="/purchases/vendors/add"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="sidebar.purchases.vendors" />
          </MenuItem>
        </Link>
        <Link
          to="/salespayment/productservices/add"
          style={{ textDecoration: 'none', color: '#111827' }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <IntlMessages id="product.service" />
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
