import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Typography, Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

export const AvatarStyle = styled(Avatar)`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Body = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 2% 2%;
  border-radius: 10px;
`;

export const SectionMainGrid = styled(Grid)`
  padding: 3%;
`;

export const CustomCustomerGridLabel = styled(Grid)`
  display: flex;
  align-items: start;
`;

export const CustomCustomerName = styled(Grid)`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
`;

export const CustomDisabledText = styled(Grid)``;

export const PrimaryContactMainGrid = styled(Grid)`
  // margin-top: 1%;
`;

export const PrimaryContactDetailGrid = styled(Grid)`
  // display: block;
  // padding-left: 8px;
`;

export const DetailCotactGrid = styled(Grid)`
  // margin-bottom: 10px;
`;

export const AdditionalFSelectGrid = styled(Grid)`
  // margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const ContactMainGrid = styled(Grid)`
  // margin-left: 0;
  // margin-top: 2%;
  // justify-content: center;
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
  // text-align: center;
  // margin-bottom: 2%;
  // margin-top: 5%;
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
  // margin-top: 16px;
`;

export const DeliveryInsGrid = styled(Grid)`
  // margin-left: 0px;
  // margin-top: 4px;
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
  font-size: 16px;
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
  // margin-top: 0px;
  background: white;
  border-radius: 8px;
`;

export const CustomAsterik = styled.span`
  color: red;
`;

export const SubHeading = styled.div`
  font-size: 14px;
  font-weight: 900;
  padding-top: 1%;
`;

export const AddCustomerCancel = styled(Button)`
  border-radius: 8px;
`;
export const AddCustomerSave = styled(Button)`
  min-width: 78px;
  border-radius: 8px;
`;
export const Stack = styled(Box)`
  display: flex;

  flex-direction: row;

  align-items: center;

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

export const StackA = styled(Stack)`
  width: 180px;

  display: flex;

  flex-direction: row;

  align-items: center;

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
