import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock, AiOutlineMessage } from 'react-icons/ai';
import { IoShareSocialOutline } from 'react-icons/io5';
import AppAnimate from '@crema/components/AppAnimate';
import { ProfileHeading } from './MyProfileStyle';
import { AccountTabsWrapper } from '@crema/modules/MyProfile';
import { NavLink, useLocation } from 'react-router-dom';
import { TbAlertSquareRounded } from 'react-icons/tb';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {
    link: 'myprofile/profiledetails',
    icon: <BiUser />,
    name: <IntlMessages id="common.personalInfo" />,
  },
  {
    link: 'myprofile/changepassword',
    icon: <AiOutlineLock />,
    name: <IntlMessages id="common.changePassword" />,
  },
  {
    link: 'myprofile/social',
    icon: <IoShareSocialOutline />,
    name: <IntlMessages id="common.social" />,
  },
  {
    link: 'myprofile/messages',
    icon: <AiOutlineMessage />,
    name: <IntlMessages id="common.messages" />,
  },
  {
    link: 'mysubscription',
    icon: <AiOutlineMessage />,
    name: <IntlMessages id="dashboard.subscriptions" />,
  },
  {
    link: 'myprofile/notifications',
    icon: <TbAlertSquareRounded />,
    name: <IntlMessages id="common.notifications" />,
  },
  {
    link: 'myprofile/notification-settings',
    icon: <NotificationsActiveOutlinedIcon />,
    name: <IntlMessages id="common.notificationSettings" />,
  },
  {
    link: 'myprofile/deactivate-account',
    icon: <WarningAmberOutlinedIcon />,
    name: <IntlMessages id="deactivateAccount" />,
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

  const [isAddContact, onSetIsAddContact] = useState(false);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  const onTabsChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <AppAnimate animation="transition.slideDownIn" delay={300}>
        <ProfileHeading>My Profile</ProfileHeading>
      </AppAnimate>
      <AccountTabsWrapper key="2">
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
      </AccountTabsWrapper>
    </>
  );
};

export default Account;
