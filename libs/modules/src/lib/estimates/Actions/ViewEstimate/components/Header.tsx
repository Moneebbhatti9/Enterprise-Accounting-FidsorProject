import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Container,
} from '@mui/material';
import {
  Heading,
  ExportDropDown,
  SaveText,
  ContentBox,
  RowBox,
  RowBox2,
} from '../StyledComponent/HeaderStyle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import ConvertToInvoiceModal from './../../Modal/ConvertToInvoice';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [isConvertModalOpen, setConvertModalOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  const handleMenuToggle1 = () => {
    setOpen1((prevOpen) => !prevOpen);
  };

  const handleMenuClose1 = () => {
    setOpen1(false);
  };

  const handleEdit = () => {
    navigate('/salespayment/quotations/createquotation');
  };

  const handleConverPopUp = () => {
    setConvertModalOpen(true);
  };

  // const handleCustomerView = () => {
  //   navigate('/salespayment/quotations/customerview');
  // };

  const [isTablet, setIsTablet] = useState(window.innerWidth < 710);

  const handleWindowResize = () => {
    setIsTablet(window.innerWidth < 710);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Container>
      <ContentBox>
        <RowBox>
          <Heading style={{ display: 'flex', alignItems: 'center' }}>
            Quotation #10
          </Heading>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            style={{
              backgroundColor: 'lightgray',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <SaveText>SAVED</SaveText>
            <p style={{ marginLeft: '10px' }}>Send</p>
            <Link to="/salespayment/quotations/createquotation">
              New Quotation
            </Link>
          </Stack>
        </RowBox>
        <RowBox2>
          <Stack direction={isTablet ? 'column' : 'row'} spacing={2}>
            <Button variant="outlined" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="outlined" onClick={handleConverPopUp}>
              Convert to Invoice
            </Button>
          </Stack>
          <Stack direction={isTablet ? 'column' : 'row'} spacing={2}>
            <Link to="/salespayment/quotations/customerview">
              <Button variant="outlined" sx={{ width: '100%' }}>
                Customer View
              </Button>
            </Link>
            <Button
              ref={anchorRef}
              variant="outlined"
              onClick={handleMenuToggle1}
              aria-expanded={open1 ? 'true' : undefined}
              aria-controls={open1 ? 'dropdown-menu' : undefined}
            >
              Send
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorRef.current}
              open={open1}
              onClose={handleMenuClose1}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ExportDropDown>
                {/* <strong>Send Using</strong> */}
                <MenuItem onClick={handleMenuClose1}>Gmail</MenuItem>
                <MenuItem onClick={handleMenuClose1}>Yahoo! Mail</MenuItem>
                <MenuItem onClick={handleMenuClose1}>Outlook</MenuItem>
                <hr />
                {/* <strong>Share URL</strong> */}
                <MenuItem onClick={handleMenuClose1}>
                  <TextField
                    label="Url"
                    id="outlined-size-small"
                    defaultValue="https://www.google.com"
                    size="small"
                  />
                </MenuItem>
                <hr />
                <MenuItem onClick={handleMenuClose1}>Export as PDF</MenuItem>
                <MenuItem onClick={handleMenuClose1}>Print 5</MenuItem>
              </ExportDropDown>
            </Menu>
            <Button
              ref={anchorRef}
              variant="outlined"
              onClick={handleMenuToggle}
              aria-expanded={open ? 'true' : undefined}
              aria-controls={open ? 'dropdown-menu' : undefined}
            >
              More
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorRef.current}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ExportDropDown>
                <MenuItem onClick={handleMenuClose}>
                  Customize & set defaults
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>Yahoo! Mail</MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  Edit Business Information
                </MenuItem>
                <hr />
                <MenuItem onClick={handleMenuClose}>Duplicate</MenuItem>
                <MenuItem onClick={handleMenuClose}>Export as PDF</MenuItem>
                <MenuItem onClick={handleMenuClose}>Print</MenuItem>
                <hr />
                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
              </ExportDropDown>
            </Menu>
          </Stack>
        </RowBox2>
      </ContentBox>
      <ConvertToInvoiceModal
        isOpen={isConvertModalOpen}
        onClose={() => setConvertModalOpen(false)}
      />
    </Container>
  );
};

export default Header;
