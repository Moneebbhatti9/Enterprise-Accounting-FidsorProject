import styled from 'styled-components';
import {
  Box,
  Button as MuiButton,
  Stack as MuiStack,
  TextField,
} from '@mui/material';
import AppsContent from '@crema/components/AppsContent';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import Delete from './../../customer/Actions/Delete';

interface StyledButtonProps {
  floatStyle?: string;
  background?: string;
}

export const PageWrapper = styled.div``;

export const HeaderWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 18px;
`;
export const ContentWrapper = styled(AppsContent)`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

export const CustomLink = styled(Link)`
  color: #1976d2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Body = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2%;
  border-radius: 10px;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ArchiveStyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
export const ModalTitle = styled.h3`
  padding: 30px;
`;
export const FirstTimeImportText = styled.h1`
  padding: 20px;
`;
export const FileInstructionsText = styled.p`
  padding: 10px;
`;
export const FileHeaderText = styled.p`
  padding: 5px;
`;
export const StyledFileRow = styled(Box)`
  display: flex;
  align-items: center;

  margin-bottom: 2.5rem;
  border-radius: 2.5rem;
  padding: 2.5rem;
`;
export const FileIconBox = styled(Box)`
  margin-right: 3rem;
`;
export const FileNameBox = styled(Box)`
  flex: 1;
`;

export interface DefaultTheme {
  text: {
    secondary: any;
  };
  palette: {
    text: {
      secondary: string;
    };
  };
}

export const FileSizeBox = styled(Box)`
  color: ${(props) => (props.theme.palette as any).text.secondary};
`;
export const CloseButton = styled(Button)`
  margin-top: 10px;
`;
export const StyledUploadBox = styled(Box)`
  position: relative;
  & ul {
    list-style: none;
    padding: 0;
  }
`;

export const StyledHeader = styled.strong``;
export const DropzoneBox = styled(Box)`
  cursor: pointer;
  border: dashed 2px;
  border-radius: 2.5rem;
  padding: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const StyledStack = styled(MuiStack)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const CustomTextField = styled(TextField)`
  height: 10px;
  min-width: 200px;
  min-height: 30px;
  padding-left: 5px;
  padding-bottom: inherit;
`;
export const ArchiveModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const StyledButton = styled(MuiButton)<StyledButtonProps>`
  float: ${(props) => (props.floatStyle ? props.floatStyle : 'none')};
  font-size: 12px;
`;
export const StyledButtonProduct = styled(MuiButton)<StyledButtonProps>`
  float: ${(props) => (props.floatStyle ? props.floatStyle : 'none')};
`;

export const DeleteModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
`;

export const DeleteStyledStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CustomerTitle = styled.h1`
  font-size: 20px;
  padding-left: 20px;
`;
