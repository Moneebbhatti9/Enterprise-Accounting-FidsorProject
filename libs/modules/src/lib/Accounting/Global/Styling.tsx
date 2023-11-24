import styled from 'styled-components';
import {
  Box,
  Divider,
  Grid,
  Button as MuiButton,
  Stack as MuiStack,
  TextField,
  Typography,
} from '@mui/material';
import AppsContent from '@crema/components/AppsContent';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const datePickerStyles = makeStyles({
  pickerInput: {
    '& input': {
      height: '1px',
    },
  },
});

export const textFieldStyles = makeStyles({
  customTextField: {
    borderRadius: '8px',
    height: '33px',
  },
});
interface StyledButtonProps {
  floatStyle?: string;
}
export const CustomHR = styled.hr`
  height: 1px;
  border: none;
  background-color: #ccc;
  width: 100%;
`;
export const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DialogTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 3%;
`;
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
  flex-direction: column;
  background-color: #fff;
  padding: 2% 2%;
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
  border-color: #57b8c9;
  color: #57b8c9;
  &:hover {
    border-color: #57b8c9;
  }
`;
export const StyledButtonProduct = styled(MuiButton)<StyledButtonProps>`
  float: ${(props) => (props.floatStyle ? props.floatStyle : 'none')};
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
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
  font-size: 16px;
  padding-left: 20px;
`;

export const Heading = styled.h3`
  padding-bottom: 12px;
  font-size: 18px;
`;

export const SectionMainGrid = styled(Grid)`
  padding: 3%;
`;

export const CustomCustomerGridLabel = styled(Grid)`
  display: flex;
  align-items: start;
`;

export const CustomCustomerName = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CustomDisabledText = styled(Grid)``;

export const PrimaryContactMainGrid = styled(Grid)`
  margin-top: 1%;
`;

export const PrimaryContactDetailGrid = styled(Grid)`
  display: block;
  padding-left: 8px;
`;

export const DetailCotactGrid = styled(Grid)`
  margin-bottom: 10px;
`;

export const AdditionalFSelectGrid = styled(Grid)`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const ContactMainGrid = styled(Grid)`
  margin-left: 0;
  margin-top: 1%;
  justify-content: center;
`;

export const ContactScnGrid = styled(Grid)`
  padding: 10px;
  background: #ecf0f3;
  border-radius: 8px;
`;

export const ContactScnGrid1 = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export const RemoveContactGrid = styled(Grid)`
  text-align: center;
  margin-bottom: 2%;
  margin-top: 5%;
`;

export const AddContactMainGrid = styled(Grid)`
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomAddIcon = styled(PersonAddIcon)`
  font-size: 14px;
  margin-right: 2px;
`;

export const BilingAddressScnGrid = styled(Grid)`
  display: block;
  padding-left: 2px;
`;

export const BillingAddressScnGrid1 = styled(Grid)`
  display: flex;
  margin-top: 16px;
`;

export const DeliveryInsGrid = styled(Grid)`
  margin-left: 0px;
  margin-top: 4px;
  margin-right: 0px;
`;

export const DeliveryInsPhone = styled(Grid)`
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  margin-bottom: 4px;
`;

export const CancelSave = styled(Grid)`
  margin-left: 0px;
  margin-top: 2%;
  justify-content: center;
`;

export const CancelbtnGrid = styled(Grid)`
  display: flex;
  justify-content: end;
`;

export const CustomDivider = styled(Divider)`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
`;

export const CustomH1 = styled.h1`
  font-size: 20px;
`;

export const ClearAddress = styled(Grid)`
  margin-top: 1%;
  padding-left: 12px;
  padding-right: 12px;
`;

export const AccountNumberMainGrid = styled(Grid)`
  margin-top: 1%;
  padding-left: 4px;
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  margin-top: 6px;
  margin-right: 12px;
  margin-left: 12px;
`;

export const StyledTypographyVendor = styled(Typography)`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;

export const StyledTypographyPC = styled(Typography)`
  display: flex;
  align-items: center;
  margin-top: -2px;
  margin-right: 12px;
  margin-left: 12px;
`;

export const StyledTextField = styled(TextField)`
  margin-top: 0px;
  background: white;
  border-radius: 8px;
`;

export const CustomAsterik = styled.span`
  color: red;
`;
export const StyledBox = styled(Box)`
  width: 100%;
`;
export const CustomButton = styled(Button)`
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const SubHeading = styled.div`
  font-size: 14px;
  font-weight: 900;
  padding-top: 1%;
`;
export const FileInput = styled.input``;
export const DropZoneContainer = styled.div`
  position: relative;
`;

export const CustomLabel = styled.h1`
  font-size: 20px;
`;

export const LabelAccount = styled.p`
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const LabelTopRow = styled.p`
  padding-bottom: 40px;
`;
export const customStepStyle = {
  fontSize: '20px',
};
export const AddCustomerCancel = styled(Button)`
  border-radius: 8px;
`;
export const AddCustomerSave = styled(Button)`
  min-width: 78px;
  border-radius: 8px;
`;
export const Stack = styled(Box)`
  width: 180px;

  display: flex;

  flex-direction: row;

  align-items: center;

  justify-content: space-between;

  cursor: pointer;

  &:hover {
    /* Change text color on hover */

    .text {
      color: #0a8fdc;
    }

    /* Change icon color on hover */

    .icon {
      color: #0a8fdc;
    }
  }
`;
