import React from 'react';
import { Body } from '../../../../Accounting/Global/Styling';
import PageHeaderWithBack from '../../../../Accounting/Global/Components/PageHeaderWithBack';
import EditBusinessField from './EditBusinessFields';
import { useParams } from 'react-router-dom';

const EditBusiness = () => {
  const { id } = useParams<{ id?: string }>();
  const businessId = id || '';
  return (
    <Body>
      <PageHeaderWithBack title={'Edit Business'} url="/settings/businesses" />
      <EditBusinessField id={businessId} />
    </Body>
  );
};

export default EditBusiness;
