import React, { useState, useRef } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Body, TopBar, ExportDropDown } from './styles/CashFlowStyles';
import UnstyledTabsIntroduction from './components/Tabs';
import CalcGrid from './components/CalcGrid';
import DateRangeCon from './components/DateRangeCon';
import IntlMessages from '@crema/helpers/IntlMessages';
import Header from '../../components/Header';

const CashFlow: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <Body>
      <Header
        redirectLink="/reports/financial-statements"
        messageId="reports.financialstatements.cashflow"
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
            <MenuItem onClick={handleMenuClose}>
              <IntlMessages id="reports.exportbuttoncsv" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <IntlMessages id="reports.exportbuttonpdf" />
            </MenuItem>
          </ExportDropDown>
        </Menu>
      </TopBar>
      <DateRangeCon />
      <CalcGrid />
      <UnstyledTabsIntroduction />
    </Body>
  );
};

export default CashFlow;
