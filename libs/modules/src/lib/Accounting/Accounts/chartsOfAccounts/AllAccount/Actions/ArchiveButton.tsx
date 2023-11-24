
import React, { useState, useEffect } from 'react';
import { StyledStack, StyledModal, ArchiveModalContent, StyledButton } from '../GlobalStyling';

export default function ImportAccount() {
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
          <ArchiveModalContent>
            <h3 style={{ padding: 30 }}>Archive Account</h3>
            <p style={{ padding: 30 }}>
              You're about to make 1 account inactive. This will remove it from
              all accounts. You can make it active again later if you need to.
              Continue?
            </p>
            <StyledButton variant="outlined" size="small" onClick={handleCloseModal} >
              Close
            </StyledButton>
            <StyledButton variant="contained" size="small" onClick={handleCloseModal} >
              Yes
            </StyledButton>
          </ArchiveModalContent>
        </StyledModal>
      </StyledStack>
    </>
  );
}
