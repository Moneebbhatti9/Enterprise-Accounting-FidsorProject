// IconLabelButtons.tsx
import { useState } from 'react';
import {
  StyledStack,
  StyledButton,
  ModalContent,
  StyledButtonProduct,
} from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modal from '@mui/material/Modal';

export default function IconLabelButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledStack direction="row" spacing={2}>
      <StyledButtonProduct
        variant="outlined"
        startIcon={<PersonAddIcon />}
        onClick={handleOpenModal}
      >
        Add Product & Services
      </StyledButtonProduct>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <h2 id="modal-title" style={{ padding: 30 }}>
            Add Vendor
          </h2>
          <p style={{ padding: 10 }}>Coming Soon</p>
          <StyledButton variant="contained" onClick={handleCloseModal}>
            Close
          </StyledButton>
        </ModalContent>
      </Modal>
    </StyledStack>
  );
}
