export interface BusinessFields {
  name: string;
  businessClassId: number | null;
  businessTypeId: number | null;
  currencyId: number | null;
  countryId: number | null;
  organizationTypeId: number | null;
}

export interface Country {
  id: number;
  name: string;
}

export interface Currency {
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

export interface BusinessClass {
  id: number;
  name: string;
}
export interface BusinessType {
  id: number;
  name: string;
  businessClassId: number | null;
}

export interface EditBusinessFields {
  id: string;
  name: string;
  address: Address;
  timeZone: number | null;
  phone: string;
  fax: string;
  mobile: string;
  tollFree: string;
  website: string;
  currencyName: string;
  businessTypeId: number | null;
}

// ... other interfaces

export interface Address {
  state: string;
  countryId: number;
  cityId: number;
  addressDetails: string;
  addressOptional: string;
  postal: string;
}
