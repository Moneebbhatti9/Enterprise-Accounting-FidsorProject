import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { Button as MuiButton } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import { CustomH1 } from '../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react';
import ResuableDialog from './ReusableDialog';
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
interface HeaderwithDialogProps {
  title: string;
  intlMessage: string;
}
const HeaderwithDialog = ({ title, intlMessage }: HeaderwithDialogProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteClick = () => {
    if (!isDeleteDialogOpen) {
      setIsDeleteDialogOpen(true);
    }
    handleClose();
  };
  return (
    <Container style={{ marginBottom: '15px' }}>
      <CustomH1 className="text" style={{ marginLeft: '8px' }}>
        {title}
      </CustomH1>
      <StyledStack direction="row" spacing={2}>
        <StyledButton
          variant="outlined"
          startIcon={<PersonAddIcon />}
          onClick={handleDeleteClick}
        >
          <IntlMessages id={intlMessage} />
        </StyledButton>

        {isDeleteDialogOpen && (
          <ResuableDialog
            open={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
          />
        )}
      </StyledStack>
    </Container>
  );
};
export default HeaderwithDialog;
