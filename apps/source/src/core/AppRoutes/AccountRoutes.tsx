import { RoutePermittedRole } from '@crema/constants/AppEnums';
import Account from '../../modules/account/MyProfile';
import MySubscription from '../../modules/account/MySubscription';
import DeactivateAccount from '../../../../../libs/modules/src/lib/account/AccountSettings/DeactivateAccount';
import Notification from '../../../../../libs/modules/src/lib/account/AccountSettings/Notification';
import {
  PersonalInfo,
  ChangePassword,
  Social,
  Activity,
  Messages,
  Notifications,
} from '../../../../../libs/modules/src/lib/account/MyProfile';

export const accountPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/myprofile',
    element: (
      <Account>
        <PersonalInfo />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/myprofile/profiledetails',
    element: (
      <Account>
        <PersonalInfo />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/myprofile/changepassword',
    element: (
      <Account>
        <ChangePassword />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/myprofile/messages',
    element: (
      <Account>
        <Messages />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/myprofile/notifications',
    element: (
      <Account>
        <Notifications />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/myprofile/social',
    element: (
      <Account>
        <Social />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/myprofile/activity',
    element: (
      <Account>
        <Activity />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: 'myprofile/notification-settings',
    element: (
      <Account>
        <Notification />
      </Account>
    ),
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: 'myprofile/deactivate-account',
    element: (
      <Account>
        <DeactivateAccount />
      </Account>
    ),
  },
  // {
  //   permittedRole: RoutePermittedRole.User,
  //   path: '/accountsettings',
  //   element: <AccountSettings />,
  // },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mysubscription',
    element: <MySubscription />,
  },
];
