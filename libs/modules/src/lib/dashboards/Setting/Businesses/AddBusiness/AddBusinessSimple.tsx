import React from 'react';
import { Body } from '../../../../Accounting/Global/Styling';
import SimpleHeader from '../../../../Accounting/Global/Components/SimpleHeader';
import AddBusinessFields from './AddBusinessFields';

const AddBusiness = () => {
  return (
    <Body>
      <SimpleHeader title={'Add Business'}  />
      <AddBusinessFields />
    </Body>
  );
};

export default AddBusiness;
