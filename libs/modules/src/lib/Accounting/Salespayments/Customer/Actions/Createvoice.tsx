import {
  StyledStack,
  StyledModal,
  ModalContent,
  StyledButton,
} from '../../../Global/Styling';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface DeleteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Createvoice({ isOpen, onClose }: DeleteProps) {
  return (
    <StyledStack direction="row" spacing={2}>
      <StyledModal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <IconButton
            aria-label="close"
            onClick={() => {
              onClose();
            }}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <p style={{ paddingBottom: '25px', paddingTop: '25px' }}>
            Create Invoice
          </p>
          <StyledStack
            direction="row"
            spacing={2}
            style={{ paddingTop: '30px' }}
          >
            <StyledButton
              variant="contained"
              size="small"
              onClick={() => {
                // Add logic here to handle the actual delete action
                // This could include API calls or other operations
                onClose(); // Close the modal after delete
              }}
            >
              Yes
            </StyledButton>
            <StyledButton
              variant="contained"
              size="small"
              color="error"
              onClick={onClose}
            >
              Close
            </StyledButton>
          </StyledStack>
        </ModalContent>
      </StyledModal>
    </StyledStack>
  );
}
