import profitLossImage from '../../../../../modules/src/assets/images/profit-loss.png';

export type TaxData = {
  id: number;
  name: string;
  position: string;
  srcImg: string;
};

export type TaxesSectionData = {
  id: number;
  srcImg: string;
  srcAlt: string;
  title: string;
  content: string;
  redirectPath?: string;
};

export type TaxesData = {
  TaxesSection: TaxesSectionData[];
};

export const taxesData: TaxesData = {
  TaxesSection: [
    {
      id: 1,
      srcImg: profitLossImage,
      srcAlt: 'Just a Meme',
      title: 'common.hr.reports.Taxes.sectionHeading',
      content: 'reports.Taxes.STR.section1.Subheading',
      redirectPath: 'sales-tax-report',
    },
  ],
};
