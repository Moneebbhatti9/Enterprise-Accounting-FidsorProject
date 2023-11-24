import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { TabsWrapper } from '../../../../../../libs/modules/src/lib/Reports';
import { NavLink, useLocation } from 'react-router-dom';
import {
  MdMoneyOff,
  MdPeopleOutline,
  MdPriceChange,
  MdReceipt,
} from 'react-icons/md';
import { LiaUserShieldSolid } from 'react-icons/lia';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { Title } from './styles/ReportsStyle';
import { FaUser } from 'react-icons/fa';
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
 
  {
    link: 'reports/financial-statements',
    icon: <MdReceipt />,
    name: <IntlMessages id="common.financialstatements" />,
  },
  {
    link: 'reports/customer-statements',
    icon: <FaUser />,
    name: <IntlMessages id="sidebar.salespayment.customerstatements" />,
  },
  {
    link: 'reports/taxes',
    icon: <MdMoneyOff />,
    name: <IntlMessages id="common.taxes" />,
  },
  {
    link: 'reports/payroll',
    icon: <MdPriceChange />,
    name: <IntlMessages id="common.payroll" />,
  },
  {
    link: 'reports/customers',
    icon: <MdPeopleOutline />,
    name: <IntlMessages id="common.customers" />,
  },
  {
    link: 'reports/vendors',
    icon: <LiaUserShieldSolid />,
    name: <IntlMessages id="common.vendors" />,
  },
  {
    link: 'reports/detailed-reporting',
    icon: <HiOutlineChartSquareBar />,
    name: <IntlMessages id="common.detailedreporting" />,
  },
];

const getActiveTabIndexFromURL = (currentPath: string) => {
  const activeTab = tabs.findIndex((tab) => currentPath.includes(tab.link));
  return activeTab !== -1 ? activeTab : 0;
};

const Reports = ({ children }: any) => {
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

  const onTabsChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <AppAnimate animation="transition.slideDownIn" delay={300}>
        <Title variant="h2">
          <IntlMessages id="sidebar.reports" />
        </Title>
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
                label={tab.name}
                icon={tab.icon}
                key={index}
                to={`/${tab.link}`}
                component={NavLink}
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

export default Reports;
