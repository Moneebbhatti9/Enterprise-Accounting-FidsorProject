import React, { useState, useRef } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Body, TopBar, ExportDropDown } from './styles/SalesTaxReportStyles';
import Tabs from './components/SalesTaxReportGrid';
import DateRangeCon from './components/DateRangeCon';
import Header from '../../components/Header';

const SalesTaxReport: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <Body>
      <Header
        redirectLink="/reports/taxes"
        messageId="reports.taxes.salestaxreport"
      />
      <TopBar>
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
            <MenuItem onClick={handleMenuClose}>CSV</MenuItem>
            <MenuItem onClick={handleMenuClose}>PDF</MenuItem>
          </ExportDropDown>
        </Menu>
      </TopBar>
      <DateRangeCon />
      <Tabs />
    </Body>
  );
};

export default SalesTaxReport;
