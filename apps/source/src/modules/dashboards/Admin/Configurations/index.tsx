import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Fonts } from '@crema/constants/AppEnums';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

import { TabsWrapper } from '../../../../../../../libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts';
import { NavLink, useLocation } from 'react-router-dom';
import '../../Accounting/ChartOfAccounts/coa.css';
import { MdLocationCity } from 'react-icons/md';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {
    link: 'admin/configurations/country',
    icon: <MdLocationCity />,
    name: <IntlMessages id="common.country" />,
  },
  // {
  //   link: 'accounting/chartofaccounts/assets',
  //   icon: <MdAccountBalance />,
  //   name: <IntlMessages id="chartOfAccountApp.assets" />,
  // },
  // {
  //   link: 'accounting/chartofaccounts/liabilities',
  //   icon: <MdCreditCard />,
  //   name: <IntlMessages id="chartOfAccountApp.liabilities" />,
  // },
  // {
  //   link: 'accounting/chartofaccounts/income',
  //   icon: <MdTrendingUp />,
  //   name: <IntlMessages id="chartOfAccountApp.income" />,
  // },
  // {
  //   link: 'accounting/chartofaccounts/expenses',
  //   icon: <MdTrendingDown />,
  //   name: <IntlMessages id="chartOfAccountApp.expenses" />,
  // },
  // {
  //   link: 'accounting/chartofaccounts/equity',
  //   icon: <MdGavel />,
  //   name: <IntlMessages id="chartOfAccountApp.equity" />,
  // },
  // {
  //   link: 'accounting/chartofaccounts/archive-accounts',
  //   icon: <MdArchive />,
  //   name: <IntlMessages id="chartOfAccountApp.archiveAccount" />,
  // },
];

const getActiveTabIndexFromURL = (currentPath: string) => {
  const activeTab = tabs.findIndex((tab) => currentPath.includes(tab.link));
  return activeTab !== -1 ? activeTab : 0;
};

const AdminConfigurations = ({ children }: any) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem('selectedTabIndex');
    return savedValue ? parseInt(savedValue, 10) : 0;
  });

  const location = useLocation();

  useEffect(() => {
    setValue(getActiveTabIndexFromURL(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('selectedTabIndex', value.toString());
  }, [value]);

  const [isAddContact, onSetIsAddContact] = useState(false);

  // const handleAddContactOpen = () => {
  //   onSetIsAddContact(true);
  // };

  // const handleAddContactClose = () => {
  //   onSetIsAddContact(false);
  // };

  const onTabsChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <AppAnimate animation="transition.slideDownIn" delay={300}>
        <Box
          component="h2"
          sx={{
            fontSize: 20,
            color: 'text.primary',
            fontWeight: Fonts.SEMI_BOLD,
            mb: {
              xs: 2,
              lg: 4,
            },
          }}
        >
          Configurations
        </Box>
      </AppAnimate>
      <TabsWrapper key="2">
        <AppAnimate animation="transition.slideLeftIn" delay={300}>
          <Tabs
            className="account-tabs"
            value={value}
            onChange={onTabsChange}
            aria-label="basic tabs example"
            orientation="vertical"
          >
            {tabs.map((tab, index) => (
              <Tab
                className="account-tab"
                label={
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    width={'100%'}
                  >
                    {tab.name}
                    {index !== 0 && index !== 6 && (
                      <Badge color="primary" badgeContent={100}></Badge> // Add the counter here
                    )}
                  </Stack>
                }
                icon={tab.icon}
                key={index}
                to={`/${tab.link}`} // Use to prop to set the destination URL
                component={NavLink} // Use NavLink as the component
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </AppAnimate>
        <AppAnimate animation="transition.slideRightIn" delay={300}>
          <Box className="account-tabs-content">{children}</Box>
        </AppAnimate>
      </TabsWrapper>
    </>
  );
};

export default AdminConfigurations;
