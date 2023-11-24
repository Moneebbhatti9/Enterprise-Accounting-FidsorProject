import React from 'react';
import { Body } from '../../../../Accounting/Global/Styling';
import PageHeaderWithBack from '../../../../Accounting/Global/Components/PageHeaderWithBack';
import AddBusinessFields from './AddBusinessFields';

const AddBusiness = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Add Business'} url="/settings/businesses" />
      <AddBusinessFields />
    </Body>
  );
};

export default AddBusiness;
