import {
  StyledStack,
  StyledButton,
} from '../../../Global/Styling';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import IntlMessages from '@crema/helpers/IntlMessages';
import { Link } from 'react-router-dom';
export default function CreateCustomer() {
  return (
    <StyledStack direction="row" spacing={2}>
      <Link to="addcustomer">
        <StyledButton variant="outlined" startIcon={<PersonAddIcon />}>
          <IntlMessages id="customer.addCustomer" />
        </StyledButton>
      </Link>
    </StyledStack>
  );
}
