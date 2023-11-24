import { useState } from 'react';
import { StyledStack } from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { StyledAddButton } from '../accountantStyling';
import { Link } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
export default function IconLabelButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <StyledStack direction="row" spacing={2}>
      <Link to="/accounting/addaccountant" className="button-link">
        <StyledAddButton
          variant="outlined"
          startIcon={<PersonAddIcon />}
          onClick={handleOpenModal}
        >
          <IntlMessages id="hire.invite" />
        </StyledAddButton>
      </Link>
    </StyledStack>
  );
}
