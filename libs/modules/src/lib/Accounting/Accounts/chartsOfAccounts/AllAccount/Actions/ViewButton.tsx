
import React, { useState, useEffect } from 'react';
import { StyledStack, StyledModal, ModalContent, StyledButton } from '../GlobalStyling';

export default function ViewButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <StyledStack direction="row" spacing={2}>
        <StyledModal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <ModalContent>
            <h3 style={{ padding: 30 }}>View</h3>
            <StyledButton variant="contained" size="small" onClick={handleCloseModal}>
              Close
            </StyledButton>
          </ModalContent>
        </StyledModal>
      </StyledStack>
    </>
  );
}
