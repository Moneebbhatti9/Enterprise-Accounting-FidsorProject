// ImportAccount.tsx
import React, { useEffect, useState } from 'react';
import { StyledModal, ModalContent, ModalTitle, CloseButton } from '../GlobalStyling'; 

export default function RunReport() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []); 

  return (
    <>
      <StyledModal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <ModalTitle>Run Report</ModalTitle>
          <CloseButton variant="contained" size="small" onClick={handleCloseModal}>
            Close
          </CloseButton>
        </ModalContent>
      </StyledModal>
    </>
  );
}
