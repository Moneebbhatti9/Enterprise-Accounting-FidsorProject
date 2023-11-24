export interface FormValues {
  firstName: string;
  lastName: string;
  address: Address;
  jobTitle: number;
  dob: Date | null;
  phoneNumber: string;
  sin: string;
}
export interface Address {
  street: string;
  regionId: number;
  city: string;
  postal: string;
}
