import React from 'react';
import {
  StyledButton,
  ModalContent,
} from '../../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import Modal from '@mui/material/Modal';

type TaxModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TaxModal: React.FC<TaxModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContent>
        <h2 id="modal-title" style={{ padding: 30 }}>
          Add Tax
        </h2>
        <p style={{ padding: 10 }}>Coming Soon</p>
        <StyledButton variant="contained" onClick={onClose}>
          Close
        </StyledButton>
      </ModalContent>
    </Modal>
  );
};

export default TaxModal;
