import { styled } from '@mui/material/styles';
import { useIntl } from 'react-intl';
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import {
  StyledTabsList,
  StyledTab,
  StyledTabPanel,
  ParentTab,
} from '../../../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/ViewCustomer/Components/tabStyled';

// import DateRangeCon from './Details';
// import Invoices from './Invoices';
// import Activity from './Activity';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(0),
  },
}));

export default function UnstyledTabsIntroduction() {
  const { messages } = useIntl();

  return (
    <ParentTab defaultValue={0} sx={{ width: '100%' }}>
      <Root>
        <Divider>
          <StyledTabsList>
            <StyledTab value={0}>
              {/* <IntlMessages id="reports.tabswitchvalue1" /> */}Overview
            </StyledTab>
            <StyledTab value={1}>
              {/* <IntlMessages id="reports.tabswitchvalue2" /> */}Invoices
            </StyledTab>
            <StyledTab value={2}>
              {/* <IntlMessages id="reports.tabswitchvalue2" /> */}Activity
            </StyledTab>
          </StyledTabsList>
        </Divider>
      </Root>
      <StyledTabPanel value={0}>{/* <DateRangeCon /> */}</StyledTabPanel>
      <StyledTabPanel value={1}>{/* <Invoices /> */}</StyledTabPanel>
      <StyledTabPanel value={2}>{/* <Activity /> */}</StyledTabPanel>
    </ParentTab>
  );
}
