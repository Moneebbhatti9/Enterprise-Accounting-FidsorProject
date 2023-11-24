// IconLabelButtons.tsx
import React, { useState } from 'react';
import {
  StyledStack,
  StyledButton,
  ModalContent,
  StyledButtonProduct,
} from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

export default function IconLabelButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledStack direction="row" spacing={2}>
      <Link to="addproductservices">
        <StyledButtonProduct variant="outlined" startIcon={<PersonAddIcon />}>
          Add Product & Services
        </StyledButtonProduct>
      </Link>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <h2 id="modal-title" style={{ padding: 30 }}>
            Add Sales
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
