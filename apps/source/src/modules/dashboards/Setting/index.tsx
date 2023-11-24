import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Fonts } from '@crema/constants/AppEnums';
import { SettingTabsWrapper } from '@crema/modules/dashboards/Setting';
// import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import {
  MdEmail,
  MdLanguage,
  MdNotifications,
  MdPayment,
  MdPeople,
  MdSchedule,
  MdTranslate,
  MdDomain,
  MdOutlineContactSupport,
} from 'react-icons/md';
import { BsQuestionDiamond } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';
import { BiDollar } from 'react-icons/bi';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {
    link: 'settings/users',
    icon: <MdPeople />,
    name: <IntlMessages id="common.users" />,
  },
  {
    link: 'settings/translations',
    icon: <MdTranslate />,
    name: <IntlMessages id="common.translations" />,
  },
  {
    link: 'settings/smtpconfiguration',
    icon: <MdEmail />,
    name: <IntlMessages id="common.smtponfigurations" />,
  },
  {
    link: 'settings/languagesettings',
    icon: <MdLanguage />,
    name: <IntlMessages id="common.languagessettings" />,
  },
  {
    link: 'settings/timezonesettings',
    icon: <MdSchedule />,
    name: <IntlMessages id="common.timezonesettings" />,
  },
  {
    link: 'settings/billing',
    icon: <MdPayment />,
    name: <IntlMessages id="common.billings" />,
  },
  {
    link: 'subscribe',
    icon: <BiDollar />,
    name: <IntlMessages id="dashboard.subscriptions" />,
  },
  {
    link: 'settings/notifications',
    icon: <MdNotifications />,
    name: <IntlMessages id="common.notifications" />,
  },
  {
    link: 'settings/businesses',
    icon: <MdDomain />,
    name: <IntlMessages id="common.businesses" />,
  },
  {
    link: 'faqs',
    icon: <BsQuestionDiamond />,
    name: <IntlMessages id="sidebar.pages.extraPages.faq" />,
  },
  {
    link: 'contact-us',
    icon: <MdOutlineContactSupport />,
    name: <IntlMessages id="extra.contactUs" />,
  },
];

const getActiveTabIndexFromURL = (currentPath: string) => {
  const activeTab = tabs.findIndex((tab) => currentPath.includes(tab.link));
  return activeTab !== -1 ? activeTab : 0;
};

const Account = ({ children }: any) => {
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
          Settings
        </Box>
      </AppAnimate>
      <SettingTabsWrapper key="2">
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
      </SettingTabsWrapper>
    </>
  );
};

export default Account;
