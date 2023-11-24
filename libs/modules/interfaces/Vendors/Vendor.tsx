// export interface VendorDataType {
//   contractorType: number | null;
//   firstName: string;
//   lastName: string;
//   vendorName: string;
//   email: string;
//   phone: string;
//   vendorType: string;
//   directDeposit: string;
//   tax: string;
//   mobile: string;
//   tollFree: string;
//   fax: string;
//   accountNumber: string;
//   website: string;
//   currencyId: number;
//   address: Address;
//   sin: number;
//   cra: number;
// }

// export interface Address {
//   state: string;
//   countryId: number;
//   cityId: number;
//   addressDetails: string;
//   addressOptional: string;
//   postal: number;
// }
export interface VendorDataType {
  vendorName: string;
  vendorType: 'regular' | 'contractor';
  contractorType: number;
  firstName: string;
  lastName: string;
  currencyId: number;
  email: string;
  address: Address;
  accountNumber: string;
  phone: number | null;
  fax: number | null;
  mobile: number | null;
  tollFree: number | null;
  website: string;
  sin: number | null | string;
  cra: number | null | string;
  businessName: string;
}

export interface Address {
  countryId: number;
  cityId: number;
  addressDetails: string;
  addressOptional: string;
  postal: string;
  state: string;
}

export interface Currency {
  id: number;
  name: string;
}

export interface Country {
  id: number;
  name: string;
}
export interface City {
  id: number;
  name: string;
  code: string;
  countryId: number | null; // Make sure this property is defined
  lat: string;
  long: string;
}
