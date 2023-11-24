import profitLossImage from '../../../../../modules/src/assets/images/profit-loss.png';
import balancesheetImage from '../../../../../modules/src/assets/images/balance-sheet.png';

export type CustomerData = {
  id: number;
  name: string;
  position: string;
  srcImg: string;
};

export type CustomersSectionData = {
  id: number;
  srcImg: string;
  srcAlt: string;
  title: string;
  content: string;
  redirectPath?: string;
};

export type CustomersData = {
  CustomersSection: CustomersSectionData[];
};

export const customersData: CustomersData = {
  CustomersSection: [
    {
      id: 1,
      srcImg: profitLossImage,
      srcAlt: 'Just a Meme',
      title: 'reports.customers.incomebycustomer',
      content: 'common.hr.reports.Payroll.sectionHeading.subHeading',
      redirectPath: 'income-by-customer',
    },
    {
      id: 2,
      srcImg: balancesheetImage,
      srcAlt: 'Just a Meme',
      title: 'common.hr.reports.Customers.sectionHeading1',
      content: 'common.hr.reports.Customers.sectionHeading1.subHeading',
      redirectPath: 'aged-receivables',
    },
  ],
};
