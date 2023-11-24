import React, { useState, useEffect } from 'react';
import {
  StyledStack,
  StyledModal,
  ModalContent,
  StyledButton,
} from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';

export default function CreateVoice() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <StyledStack direction="row" spacing={2}>
      <StyledModal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <h3 style={{ padding: 30 }}>Create Sale</h3>
          <StyledButton
            variant="contained"
            size="small"
            onClick={handleCloseModal}
          >
            Close
          </StyledButton>
        </ModalContent>
      </StyledModal>
    </StyledStack>
  );
}
