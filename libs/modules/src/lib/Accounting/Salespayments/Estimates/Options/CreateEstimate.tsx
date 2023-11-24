import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledStack,
  StyledButtonProduct,
} from '../../../Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useIntl } from 'react-intl';

export default function IconLabelButtons() {
  const { messages } = useIntl();
  return (
    <StyledStack direction="row" spacing={2}>
      <Link to="/salespayment/quotations/createquotation">
        <StyledButtonProduct variant="outlined" startIcon={<PersonAddIcon />}>
          {messages['common.estimate.createestimate'] as string}
        </StyledButtonProduct>
      </Link>
    </StyledStack>
  );
}
