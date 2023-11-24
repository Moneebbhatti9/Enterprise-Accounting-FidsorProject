import React from 'react';
import { Modal, Stack } from '@mui/material';
import {
  StyledModal,
  StyledContentWrapper,
  StyledContentContainer,
  StyledHeading,
  StyledDescription,
  StyledActionButton,
  StyledSubHeading,
  StyledListItem,
} from '../styles/PopupStyles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Link } from 'react-router-dom';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  subheading?: React.ReactNode;
  listItems?: React.ReactNode[];
  redirectPath?: string; // Add this prop
}

const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  heading,
  paragraph,
  subheading,
  listItems,
  redirectPath, // Add redirectPath to destructuring
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModal>
        <StyledContentWrapper>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            marginBottom={'15px'}
          >
            <StyledHeading variant="h2">{heading}</StyledHeading>

            <IconButton edge="end" color="inherit" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <StyledDescription variant="body1">{paragraph}</StyledDescription>
          {redirectPath ? ( // Check if redirectPath is provided
            <Link to={redirectPath}>
              <StyledActionButton
                variant="contained"
                size="medium"
                color="primary"
              >
                <IntlMessages id="launchpad.popup.button" />
              </StyledActionButton>
            </Link>
          ) : (
            <StyledActionButton
              variant="contained"
              size="medium"
              color="primary"
            >
              <IntlMessages id="launchpad.popup.button" />
            </StyledActionButton>
          )}
        </StyledContentWrapper>
        <StyledContentContainer>
          <StyledSubHeading variant="h3">{subheading}</StyledSubHeading>
          {listItems ? (
            <ul style={{ listStylePosition: 'inside', paddingBottom: '5px' }}>
              {listItems.map((item, index) => (
                <StyledListItem key={index}>{item}</StyledListItem>
              ))}
            </ul>
          ) : null}
        </StyledContentContainer>
      </StyledModal>
    </Modal>
  );
};

export default Popup;
