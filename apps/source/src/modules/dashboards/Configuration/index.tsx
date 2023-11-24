import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Fonts } from '@crema/constants/AppEnums';
import { ConfigTabsWrapper } from '@crema/modules/dashboards/Configuration';
import { MdLocationCity, MdPublic, MdAttachMoney } from 'react-icons/md';
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {
    link: 'configuration/country',
    icon: <MdLocationCity />,
    name: <IntlMessages id="common.country" />,
  },
  {
    link: 'configuration/city',
    icon: <MdPublic />,
    name: <IntlMessages id="common.city" />,
  },
  {
    link: 'configuration/currency',
    icon: <MdAttachMoney />,
    name: <IntlMessages id="common.currency" />,
  },
];

const getActiveTabIndexFromURL = (currentPath: string) => {
  const activeTab = tabs.findIndex((tab) => currentPath.includes(tab.link));
  return activeTab !== -1 ? activeTab : 0;
};

const Configuration = ({ children }: any) => {
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
        <Box
          component="h2"
          sx={{
            fontSize: 16,
            color: 'text.primary',
            fontWeight: Fonts.SEMI_BOLD,
            mb: {
              xs: 2,
              lg: 4,
            },
          }}
        >
          Configuration
        </Box>
      </AppAnimate>
      <ConfigTabsWrapper key="2">
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
      </ConfigTabsWrapper>
    </>
  );
};

export default Configuration;
