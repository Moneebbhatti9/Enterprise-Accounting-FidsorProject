export type CustomerType = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  mail: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  vatId: string;
  taxId: string;
  phone?: string;
  link?: string;
  logo: string;
};

export const customerList: CustomerType[] = [
  {
    id: 'ecovacs',
    name: 'EcoVacs Tech Pvt Ltd',
    firstName: 'Suresh',
    lastName: 'Singh',
    mail: 'suresh.singh@gmail.com',
    zipCode: '123132',
    city: 'Bhiwandi',
    state: 'Maharashtra',
    country: 'India',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBDSYH3872E',
    phone: '+91 1234567890',
    logo: '/assets/images/logo.png',
  },
  {
    id: 'ozmo',
    name: 'Ozmo Inc',
    firstName: 'George',
    lastName: 'Admin',
    mail: 'george@ozmo.co',
    zipCode: '123132',
    city: 'Oswego',
    state: 'New York',
    country: 'US',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBSDYH3872E',
    link: 'ozmo.co',
    logo: '/assets/images/logo.png',
  },
  {
    id: 'inno',
    name: 'InnovateX',
    firstName: 'Smith',
    lastName: 'Admin',
    mail: 'info@innovatexcorp.com',
    zipCode: '123132',
    city: 'Bikaner',
    state: 'Rajasthan',
    country: 'India',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBSDYH3872E',
    link: 'innovatexcorp',
    logo: '/assets/images/logo.png',
  },
  {
    id: 'pay',
    name: 'Paytm',
    firstName: 'Paytm',
    lastName: 'Admin',
    mail: 'support@paytm.com',
    zipCode: '123132',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    vatId: 'IDSIUAHD93E923UIU',
    taxId: 'HBSDYH3872E',
    link: 'paytm.com',
    logo: '/assets/images/logo.png',
  },
];
