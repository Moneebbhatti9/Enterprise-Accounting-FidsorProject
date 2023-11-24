import profitLossImage from '../../../../../modules/src/assets/images/profit-loss.png';
import balancesheetImage from '../../../../../modules/src/assets/images/balance-sheet.png';
import cashflowImage from '../../../../../modules/src/assets/images/cash-flow.png';
export type ReportData = {
  id: number;
  name: string;
  position: string;
  srcImg: string;
};

export type ReportSectionData = {
  id: number;
  srcImg: string;
  srcAlt: string;
  title: string;
  content: string;
  redirectPath?: string;
};

export type ReportsData = {
  ReportSection: ReportSectionData[];
};

export const reportsData: ReportsData = {
  ReportSection: [
    {
      id: 1,
      srcImg: profitLossImage,
      srcAlt: 'Just a Meme',
      title: 'common.hr.reports.FS.sectionHeading',
      content: 'reports.FS.P&L.section1.Subheading',
      redirectPath: 'profit-and-loss',
    },
    {
      id: 2,
      srcImg: balancesheetImage,
      srcAlt: 'Just a Meme',
      title: 'reports.financialstatements.balancesheet',
      content: 'reports.FS.P&L.section2.Subheading',
      redirectPath: 'balance-sheet',
    },
    {
      id: 3,
      srcImg: cashflowImage,
      srcAlt: 'Just a Meme',
      title: 'reports.financialstatements.cashflow',
      content: 'reports.FS.P&L.section3.Subheading',
      redirectPath: 'cash-flow',
    },
  ],
};
