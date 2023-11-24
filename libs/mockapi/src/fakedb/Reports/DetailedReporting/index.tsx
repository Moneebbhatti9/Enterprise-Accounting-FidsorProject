import profitLossImage from '../../../../../modules/src/assets/images/profit-loss.png';
import balancesheetImage from '../../../../../modules/src/assets/images/balance-sheet.png';
import cashflowImage from '../../../../../modules/src/assets/images/cash-flow.png';

export type DetailedReportingData = {
  id: number;
  name: string;
  position: string;
  srcImg: string;
};

export type DetailedReportingSectionData = {
  id: number;
  srcImg: string;
  srcAlt: string;
  title: string;
  content: string;
  redirectPath?: string;
};

export type DetailedReportingsData = {
  DetailedReportingSection: DetailedReportingSectionData[];
};

export const detailedReportingData: DetailedReportingsData = {
  DetailedReportingSection: [
    {
      id: 1,
      srcImg: profitLossImage,
      srcAlt: 'Just a Meme',
      title: 'common.hr.reports.DR.sectionHeading',
      content: 'common.hr.reports.DR.sectionHeading.subHeading',
      redirectPath: 'account-balances',
    },
    {
      id: 2,
      srcImg: balancesheetImage,
      srcAlt: 'Just a Meme',
      title: 'reports.detailedreporting.trialbalance',
      content: 'common.hr.reports.DR.sectionHeading1.subHeading',
      redirectPath: 'trial-balance',
    },
    {
      id: 3,
      srcImg: cashflowImage,
      srcAlt: 'Just a Meme',
      title: 'common.hr.reports.DR.sectionHeading2',
      content: 'reports.Taxes.DR.section1.Subheading',
      redirectPath: 'account-transactions',
    },
  ],
};
