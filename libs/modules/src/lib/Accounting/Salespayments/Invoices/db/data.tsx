export type CustomerType = {
  invoiceNumber: string;
  customerName: string;
  status: string;
  date: string;
  dueDate: string;
  amount: number;
  currencyType: string;
  // id: string;
  // name: string;
  // firstName: string;
  // lastName: string;
  // mail: string;
  // zipCode: string;
  // city: string;
  // state: string;
  // country: string;
  // vatId: string;
  // taxId: string;
  // phone?: string;
  // link?: string;
  // logo: string;
};

export const customerList: CustomerType[] = [
  {
    invoiceNumber: 'abc123123abc',
    customerName: 'Suresh Singh',
    status: 'true',
    date: '2023-08-29T14:38:44.258Z',
    dueDate: '2023-09-29T14:38:44.258Z',
    amount: 500,
    currencyType: 'USD',
    // id: 'ecovacs',
    // name: 'EcoVacs Tech Pvt Ltd',
    // firstName: 'Suresh',
    // lastName: 'Singh',
    // mail: 'suresh.singh@gmail.com',
    // zipCode: '123132',
    // city: 'Bhiwandi',
    // state: 'Maharashtra',
    // country: 'India',
    // vatId: 'IDSIUAHD93E923UIU',
    // taxId: 'HBDSYH3872E',
    // phone: '+91 1234567890',
    // logo: '/assets/images/logo.png',
  },
  {
    invoiceNumber: 'abc123123abc123',
    customerName: 'Suresh Singh Sadwani',
    status: 'false',
    date: '2023-08-02T14:38:44.258Z',
    dueDate: '2023-09-08T14:38:44.258Z',
    amount: 200,
    currencyType: 'PKR',
    // id: 'ozmo',
    // name: 'Ozmo Inc',
    // firstName: 'George',
    // lastName: 'Admin',
    // mail: 'george@ozmo.co',
    // zipCode: '123132',
    // city: 'Oswego',
    // state: 'New York',
    // country: 'US',
    // vatId: 'IDSIUAHD93E923UIU',
    // taxId: 'HBSDYH3872E',
    // link: 'ozmo.co',
    // logo: '/assets/images/logo.png',
  },
  {
    invoiceNumber: 'abc123123abc125',
    customerName: 'Sain Ibrahim',
    status: 'true',
    date: '2023-08-04T14:38:44.258Z',
    dueDate: '2023-09-08T14:38:44.258Z',
    amount: 400,
    currencyType: 'Takka',
    // id: 'inno',
    // name: 'InnovateX',
    // firstName: 'Smith',
    // lastName: 'Admin',
    // mail: 'info@innovatexcorp.com',
    // zipCode: '123132',
    // city: 'Bikaner',
    // state: 'Rajasthan',
    // country: 'India',
    // vatId: 'IDSIUAHD93E923UIU',
    // taxId: 'HBSDYH3872E',
    // link: 'innovatexcorp',
    // logo: '/assets/images/logo.png',
  },
  {
    invoiceNumber: 'abc123123abc125',
    customerName: 'Fazal Saith',
    status: 'false',
    date: '2023-08-01T14:38:44.258Z',
    dueDate: '2023-09-06T14:38:44.258Z',
    amount: 800,
    currencyType: 'Takka',
    // id: 'pay',
    // name: 'Paytm',
    // firstName: 'Paytm',
    // lastName: 'Admin',
    // mail: 'support@paytm.com',
    // zipCode: '123132',
    // city: 'Bangalore',
    // state: 'Karnataka',
    // country: 'India',
    // vatId: 'IDSIUAHD93E923UIU',
    // taxId: 'HBSDYH3872E',
    // link: 'paytm.com',
    // logo: '/assets/images/logo.png',
  },
];
