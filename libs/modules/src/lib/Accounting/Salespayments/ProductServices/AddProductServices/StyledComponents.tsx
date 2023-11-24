import styled from 'styled-components';
import { Box, Grid, Button, Typography, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export const Body = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2% 15%;
  border-radius: 10px;
`;
export const TopBar = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Heading = styled(Typography)`
  font-size: 20;
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

export const CustomHR = styled.hr`
  height: 1px;
  border: none;
  background-color: #ccc;
  width: 100%;
`;

export const COAIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add any other styles you may need here */
`;

export const UpdateReport = styled(Stack)`
  width: 100%;
  margin-top: 5px;
  padding: 20px 14%;
`;

export const NameGrid = styled(Grid)`
  display: flex;
  justify-content: end;
`;

export const DescMainGrid = styled(Grid)`
  // align-items: flex-start;
  // margin-top: 5px;
`;

export const PriceMainGrid = styled(Grid)`
  align-items: center;
  // margin-top: 5px;
`;

export const SellSubtitleGrid = styled(Grid)`
  justify-content: center;
  // margin-top: -10px;
  // margin-left: 32px;
`;
export const BuySubtitleGrid = styled(Grid)`
  justify-content: center;
  margin-top: -10px;
  // margin-left: 32px;
`;

export const FormHelperTextTxt = styled(FormHelperText)`
  // text-align: center;
`;

export const ShowDropdownMainGrid = styled(Grid)`
  align-items: center;
  // margin-top: 3%;
  // margin-bottom: 3%;
`;

export const IncomeTitleGrid = styled(Grid)`
  display: flex;
  justify-content: end;
`;

export const SaveBtnGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;

export const SaveBtn = styled(Button)`
  min-width: 78px;
  border-radius: 8px;
`;

export const TabBox = styled(Box)`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5%;
`;

export const List1 = styled(List)`
  width: 100%;
  max-width: 360px;
  background-color: none;
`;

export const ListItemButton1 = styled(ListItemButton)`
  padding: 0;
  padding-left: 12px;
`;

export const OptionButton = styled(Button)`
  display: flex;
  justify-content: start;
  padding: 0;
  padding-left: 48px;
`;

export const CustomListItemIcon = styled(ListItemIcon)`
  min-width: 30px;
`;

export const CustomFolderOpenIcon = styled(FolderOpenIcon)`
  font-size: 18px;
`;

export const BulletSpan = styled.span`
  margin-right: 8px;
  font-size: 18px;
`;
