export interface EmployeeFields {
  firstName: string;
  lastName: string;
  address: Address;
  ssn: string;
  dob: Date | null;
  email: string;
  inviteToOnboard: boolean;
  dateOfHire: Date | null;
  workLocation: string;
  wageType: string;
  wageAmount: string;
  directDeposit: boolean;
  vacationPolicy: string;
}

export default EmployeeFields;

export interface Address {
  state: string;
  cityId: number;
  countryId: number;
  addressDetails: string;
  addressOptional: string;
  postal: number | null;
}
