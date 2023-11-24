import { VendorDataType } from '../../../../../../../../../modules/interfaces/Vendors/Vendor';

export const validateForm = (values: VendorDataType) => {
  const errors: VendorDataType = {
    vendorName: '',
    selectedType: 'regular',
    contractorType: 0,
    firstName: '',
    lastName: '',
    currencyType: 0,
    email: '',
    address: {
      countryId: 0,
      regionId: 0,
      addressDetails: '',
      addressOptional: '',
      postal: null,
      city: '',
    },
    accountNumber: null,
    phone: null,
    fax: null,
    mobile: null,
    tollFree: null,
    website: '',
    sin: null,
    cra: null,
    businessName: '',
  };

  if (!values.vendorName) {
    errors.vendorName = 'Vendor Name is required';
  } else if (values.vendorName.length < 3) {
    errors.vendorName = 'Vendor Name must be at least 3 characters';
  } else if (values.vendorName.length > 50) {
    errors.vendorName = 'Vendor Name must not exceed 50 characters';
  }
  if (values.selectedType === 'contractor' && values.contractorType === 0) {
    if (!values.sin) {
      errors.sin = 'SIN is Required';
    } else if (isNaN(Number(values.sin))) {
      errors.sin = 'SIN should be a number';
    }
  }
  if (values.selectedType === 'contractor' && values.contractorType === 1) {
    if (!values.cra) {
      errors.cra = 'CRA is Required';
    } else if (isNaN(Number(values.cra))) {
      errors.cra = 'CRA should be a number';
    }
  }
  if (values.selectedType === 'contractor' && values.contractorType === 0) {
    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }
  }
  if (values.selectedType === 'contractor' && values.contractorType === 0) {
    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }
  }
  if (values.selectedType === 'contractor' && !values.email) {
    errors.email = 'Email is required';
  } else if (
    values.selectedType === 'contractor' &&
    !/^\S+@\S+\.\S+$/.test(values.email)
  ) {
    errors.email = 'Invalid email format';
  }
  if (values.selectedType === 'contractor') {
    if (!values.address.regionId) {
      errors.address.regionId = 'Select a Region';
    }
    if (!values.address.addressDetails) {
      errors.address.addressDetails = 'Address is required';
    }
    if (!values.address.city) {
      errors.address.city = 'City is required';
    }
    if (!values.address.postal) {
      errors.address.postal = 'Postal is Required';
    }
  }

  return errors;
};
