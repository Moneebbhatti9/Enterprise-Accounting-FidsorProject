import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Button as MuiButton } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import { CustomH1 } from '../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledStack = styled(Stack)`
  padding-right: 5px;
`;

interface StyledButtonProps {
  floatStyle?: string;
}
const StyledButton = styled(MuiButton)<StyledButtonProps>`
  float: ${(props) => (props.floatStyle ? props.floatStyle : 'none')};
  font-size: 12px;
`;
interface MainPageHeaderProps {
  title: string;
  linkTo: string;
  intlMessage: string;
}

const MainPageHeader = ({
  title,
  linkTo,
  intlMessage,
}: MainPageHeaderProps) => {
  return (
    <Container style={{ marginBottom: '15px' }}>
      <CustomH1 className="text" style={{ marginLeft: '8px' }}>
        {title}
      </CustomH1>

      <StyledStack direction="row" spacing={2}>
        <Link to={linkTo}>
          <StyledButton variant="outlined" startIcon={<PersonAddIcon />}>
            <IntlMessages id={intlMessage} />
          </StyledButton>
        </Link>
      </StyledStack>
    </Container>
  );
};
export default MainPageHeader;
