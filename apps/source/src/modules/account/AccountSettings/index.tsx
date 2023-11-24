import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppAnimate from '@crema/components/AppAnimate';
import { Fonts } from '@crema/constants/AppEnums';
import {
  SettingTabsWrapper,
  EmailPreferences,
  ConnectedAccount,
  DeactivateAccount,
  ApiKeys,
  Notification,
} from '@crema/modules/AccountSettings';
import { accountData } from '@crema/mockapi';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const tabs = [
  {
    id: 1,
    icon: '',
    name: <IntlMessages id="common.connectedAccounts" />,
  },
  {
    id: 2,
    icon: '',
    name: <IntlMessages id="healthCare.notification" />,
  },
  {
    id: 3,
    icon: '',
    name: <IntlMessages id="common.emailPreferences" />,
  },
  {
    id: 4,
    icon: '',
    name: <IntlMessages id="common.apiKeys" />,
  },
  {
    id: 5,
    icon: '',
    name: <IntlMessages id="common.deactivateAccount" />,
  },
];

const AccountSettings = () => {
  const [value, setValue] = React.useState(0);

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
          Account Settings
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
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </AppAnimate>
        <AppAnimate animation="transition.slideRightIn" delay={300}>
          <Box className="account-tabs-content">
            {value === 0 && <ConnectedAccount social={accountData.member} />}
            {value === 1 && <Notification />}
            {value === 2 && <EmailPreferences />}
            {value === 3 && <ApiKeys />}
            {value === 4 && <DeactivateAccount />}
          </Box>
        </AppAnimate>
      </SettingTabsWrapper>
    </>
  );
};

export default AccountSettings;
