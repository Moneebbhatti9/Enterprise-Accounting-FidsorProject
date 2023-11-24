import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledStack,
  StyledButtonProduct,
} from '../../../../src/lib/chartsOfAccounts/AllAccount//GlobalStyling';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function IconLabelButtons() {
  return (
    <StyledStack direction="row" spacing={2}>
      <Link to="/purchases/bills/createbill">
        <StyledButtonProduct variant="outlined" startIcon={<PersonAddIcon />}>
          Create Bill
        </StyledButtonProduct>
      </Link>
    </StyledStack>
  );
}
