export interface EmployeeDataType {
    firstName: string
    lastName: string
    ssn: string
    email: string
    inviteToOnboard: boolean
    dob: string
    dateOfHire: string
    workLocation: string
    wageType: string
    wageAmount: string
    directDeposit: boolean
    vacationPolicy: string
    address: Address
  }
  
  export interface Address {
    state: string
    countryId: number
    cityId: number
    addressDetails: string
    addressOptional: string
    postal: number
  }