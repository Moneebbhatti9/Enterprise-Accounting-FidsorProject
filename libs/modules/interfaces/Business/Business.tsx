export interface BusinessDataType {
    name: string
    businessTypeId: number
    address: Address
    currencyId: number
    countryId: number
    phone: string
    mobile: string
    fax: string
    website: string
    tollFree: string
  }
  
  export interface Address {
    state: string
    countryId: number
    cityId: number
    addressDetails: string
    addressOptional: string
    postal: number
  }
  