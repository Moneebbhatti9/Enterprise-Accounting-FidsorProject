import React from 'react';
import { Body } from '../../../../Accounting/Global/Styling';
import PageHeaderWithBack from '../../../../Accounting/Global/Components/PageHeaderWithBack';
import ViewBusinessFrontend from './ViewBusinessFend';
import { useParams } from 'react-router-dom';

const ViewBusiness = () => {
  const { id } = useParams<{ id?: string }>();
  const businessId = id || '';
  return (
    <Body>
      <PageHeaderWithBack title={'View Business'} url="/settings/businesses" />
      <ViewBusinessFrontend id={businessId} />
    </Body>
  );
};

export default ViewBusiness;
