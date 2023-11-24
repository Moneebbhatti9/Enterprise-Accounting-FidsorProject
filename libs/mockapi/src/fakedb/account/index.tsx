import { AccountDataType } from '@crema/models/account';

export const accountData: AccountDataType = {
  member: [
    {
      id: 1,
      title: 'Your Facebook',
      image: '/assets/images/avatar/A2.jpg',
      name: 'King Rox',
      email: '',
    },
    {
      id: 2,
      title: 'Your Google',
      image: '/assets/images/avatar/A14.jpg',
      name: '',
      email: 'johndeuo@gmail.com',
    },
  ],
  notification: {
    activity: [
      {
        id: 1,
        title: 'Email me when someone comments on my article',
        defaultChecked: true,
      },
      {
        id: 2,
        title: 'Email me when someone answers on my form',
        defaultChecked: true,
      },
      {
        id: 3,
        title: 'Email me when someone answers on my form',
        defaultChecked: false,
      },
    ],
    application: [
      {
        id: 1,
        title: 'News and announcements',
        defaultChecked: false,
      },
      {
        id: 2,
        title: 'Weekly product updates',
        defaultChecked: true,
      },
      {
        id: 3,
        title: 'Weekly blog digest',
        defaultChecked: false,
      },
    ],
  },
  preferences: {
    payment: [
      {
        id: 1,
        title: 'Successful Payments',
        description: 'Receive a notification for every successful payment.',
        defaultChecked: true,
      },
      // other payment objects
    ],
    payouts: [
      {
        id: 1,
        title: 'Payouts',
        description: 'Receive a notification for every initiated payout.',
        defaultChecked: true,
      },
      // other payouts objects
    ],
  },
};

export default accountData;
