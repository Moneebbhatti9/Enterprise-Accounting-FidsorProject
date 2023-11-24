import React from 'react';
import {
  StyledStack,
  StyledModal,
  ModalContent,
  StyledButton,
} from '../GlobalStyling';

interface EditButtonProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditButton({ isOpen, onClose }: EditButtonProps) {
  return (
    <>
      <StyledStack direction="row" spacing={2}>
        <StyledModal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <ModalContent>
            <h3 style={{ padding: 30 }}>Edit</h3>
            <StyledButton variant="contained" size="small" onClick={onClose}>
              Close
            </StyledButton>
          </ModalContent>
        </StyledModal>
      </StyledStack>
    </>
  );
}
