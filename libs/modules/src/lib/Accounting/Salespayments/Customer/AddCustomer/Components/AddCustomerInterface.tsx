// export interface AddCustomerInterface {
//   firstName: string;
//   lastName: string;
//   customerName: string;
//   email: string;
//   phone: string;
//   mobile: string;
//   tollFree: string;
//   fax: string;
//   accountNumber: string;
//   website: string;
//   note: string;
//   currency: string;
//   billing: {
//     email: string;
//     phone: string;
//     currencyId: number;
//     address: Address;
//   };
//   shipping: {
//     shipTo: string;
//     phone: string;
//     instructions: string;
//     address: Address;
//   };
//   contact: Contact[];
//   // additionalMobile: string;
//   // additionalTollTax: string;
//   // additionalFax: string;
// }

// export type Contact = {
//   name: string;
//   email: string;
//   phone: string;
//   [key: string]: string;
// };

// export interface Address {
//   state: string;
//   countryId: number;
//   regionId: number;
//   addressDetails: string;
//   addressOptional: string;
//   postal: number | null;
// }

export interface FormValues {
  customerName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mobile: string;
  tollFree: string;
  fax: string;
  contacts: Contact[];
  accountNumber: number | null;
  website: string;
  note: string;

  sameAsBilling: boolean;
  billing: {
    currencyId: number;
    address: Address;
  };
  shipping: {
    shipTo: string;
    phone: string;
    instructions: string;
    address: Address;
  };
}
export interface EditFormValues {
  id: string;
  customerName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mobile: string;
  tollFree: string;
  fax: string;
  contacts: Contact[];
  accountNumber: number | null;
  website: string;
  note: string;

  sameAsBilling: boolean;
  billing: {
    currencyId: number;
    address: Address;
  };
  shipping: {
    shipTo: string;
    phone: string;
    instructions: string;
    address: Address;
  };
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

export interface Contact {
  name: string;
  email: string;
  phone: string;
}
export interface Address {
  state: string;
  countryId: number;
  cityId: number;
  addressDetails: string;
  addressOptional: string;
  postal: string;
}
