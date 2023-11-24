export interface FormValues {
  businessLegalName: string;
  dba: boolean;
  dbaField: string;
  cra: boolean;
  craField: string;
  workAddress: {
    address: Address;
  };
  mACheckbox: boolean;
  mailingAddressField: string;
  mailingAddress: {
    address: Address;
  };
  businessType: number;
  establishedYear: number;
  businessDescription: string;
  businessWebsite: string;
  employeesPaid: number;
}

export interface Address {
  street: string;
  regionId: number;
  city: string;
  postal: string;
}
