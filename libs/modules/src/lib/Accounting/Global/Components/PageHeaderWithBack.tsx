import styled from 'styled-components';
import {
  Stack,
  CustomH1,
  CustomDivider,
} from '../../../Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  &:hover {
    opacity: 0.8; /* Optional: Change opacity on hover */
  }
`;
const PageHeaderWithBack = ({ title, url }: { title: string; url: string }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        {/* <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}> */}
        <Stack onClick={() => navigate(-1)}>
          <span
            style={{ paddingTop: '6px', fontSize: '16px' }}
            className="icon"
          >
            <ArrowBackIosNewOutlinedIcon />
          </span>
          <CustomH1 className="text" style={{ marginLeft: '8px' }}>
            {title}
          </CustomH1>
        </Stack>
        {/* </Link> */}
        {/* <Link
          to={url}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#0a8fdc';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'inherit';
          }}
        > */}
        <StyledCloseIcon onClick={() => navigate(-1)} />
        {/* </Link> */}
      </Container>
      <CustomDivider />
    </>
  );
};

export default PageHeaderWithBack;
