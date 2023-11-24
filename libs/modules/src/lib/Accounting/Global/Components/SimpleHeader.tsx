import styled from 'styled-components';
import { CustomH1 } from '../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import IntlMessages from '@crema/helpers/IntlMessages';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
interface MainPageHeaderProps {
  title: string;
}
const SimpleHeader = ({ title }: MainPageHeaderProps) => {
  return (
    <Container style={{ marginBottom: '15px' }}>
      <CustomH1 className="text">
        <IntlMessages id={title} />
      </CustomH1>
    </Container>
  );
};
export default SimpleHeader;
