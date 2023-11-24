import profitLossImage from '../../../../../modules/src/assets/images/profit-loss.png';
import balancesheetImage from '../../../../../modules/src/assets/images/balance-sheet.png';

export type PayrollData = {
  id: number;
  name: string;
  position: string;
  srcImg: string;
};

export type PayrollsSectionData = {
  id: number;
  srcImg: string;
  srcAlt: string;
  title: string;
  content: string;
  redirectPath?: string;
};

export type PayrollsData = {
  PayrollsSection: PayrollsSectionData[];
};

export const payrollsData: PayrollsData = {
  PayrollsSection: [
    {
      id: 1,
      srcImg: profitLossImage,
      srcAlt: 'Just a Meme',
      title: 'Payroll Wage & Tax Reports',
      content: 'A breakdown of employee wage and payroll tax amounts.',
      redirectPath: 'wage-and-tax-reports',
    },
    {
      id: 2,
      srcImg: balancesheetImage,
      srcAlt: 'Just a Meme',
      title: 'Payroll Benefits & Deduction Report',
      content:
        "Amounts added to or deducted from your employees' regular wages. Includes information for year-end reporting.",
      redirectPath: 'payroll-benefits-and-deduction-report',
    },
  ],
};
