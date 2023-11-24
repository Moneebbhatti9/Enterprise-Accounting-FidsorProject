// IconLabelButtons.tsx
import React, { useState } from 'react';
import { StyledStack, StyledButton, ModalContent } from '../GlobalStyling';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modal from '@mui/material/Modal';

export default function IconLabelButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledStack direction="row" spacing={2}>
      <StyledButton
        variant="outlined"
        startIcon={<PersonAddIcon />}
        onClick={handleOpenModal}
      >
        Add Account
      </StyledButton>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <h2 id="modal-title" style={{ padding: 30 }}>
            Add Account
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
