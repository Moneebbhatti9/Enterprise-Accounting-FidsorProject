import profitLossImage from '../../../../../modules/src/assets/images/profit-loss.png';
import balancesheetImage from '../../../../../modules/src/assets/images/balance-sheet.png';

export type VendorData = {
  id: number;
  name: string;
  position: string;
  srcImg: string;
};

export type VendorsSectionData = {
  id: number;
  srcImg: string;
  srcAlt: string;
  title: string;
  content: string;
  redirectPath?: string;
};

export type VendorsData = {
  VendorsSection: VendorsSectionData[];
};

export const vendorsData: VendorsData = {
  VendorsSection: [
    {
      id: 1,
      srcImg: profitLossImage,
      srcAlt: 'Just a Meme',
      title: 'reports.vendors.agedreceivables',
      content: 'reports.Taxes.Vendors.section1.Subheading',
      redirectPath: 'purchases-by-vendor',
    },
    {
      id: 2,
      srcImg: balancesheetImage,
      srcAlt: 'Just a Meme',
      title: 'reports.vendors.agedpayables',
      content: 'reports.Taxes.Vendors.section2.Subheading',
      redirectPath: 'aged-payables',
    },
  ],
};
