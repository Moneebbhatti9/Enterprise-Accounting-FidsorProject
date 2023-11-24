import { Stack } from './AddCustomerStyled';
import { Link } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import { CustomH1 } from './AddCustomerStyled';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const GoBack = () => {
  return (
    <Link
      to="/salespayment/customer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Stack>
        <span style={{ paddingTop: '10px' }} className="icon">
          <ArrowBackIosNewOutlinedIcon />
        </span>

        <CustomH1 className="text">
          <IntlMessages id="AddCustomer.H1" />
        </CustomH1>
      </Stack>
    </Link>
  );
};

export default GoBack;
