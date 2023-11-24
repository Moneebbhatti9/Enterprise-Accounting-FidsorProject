import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Dialog, Typography, MenuItem } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';

export const COAGrid1 = styled(Grid)`
  padding: 0;
  background-color: #f5f5f5;
`;

export const COAGrid2 = styled(Grid)`
  color: #70757a;
  border-bottom: 1px solid #ccc;
  font-style: italic;
  padding-top: 0.5rem;
`;

export const COAGrid3 = styled(Grid)`
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  word-break: break-word;
`;

export const COAGrid4 = styled(Grid)`
  border-bottom: 1px solid #ccc;
  padding: 5px;
  word-break: break-word;
`;

export const COAGrid5 = styled(Grid)`
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const COAGrid6 = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const COAGrid7 = styled(Grid)``;

export const COAGrid8 = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const COABox1 = styled(Box)`
  word-wrap: break-word;
  flex-grow: 1;
  font-size: 12px;
`;

export const COABox2 = styled(Box)`
  word-wrap: break-word;
  font-size: 12px;
  color: grey;
`;

export const COABox3 = styled(Box)`
  position: sticky;
  left: auto;
  right: 0;
`;

export const COABox4 = styled(Box)`
  word-wrap: break-word;
  font-size: 12px;
`;

export const COAParagraph = styled.p`
  font-size: 12px;
`;

export const DialogTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 3%;
`;

export const SubHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-top: 1%;
`;

export const SubSectionDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const SubSectionHeading = styled.h5`
  margin: 0;
  align-self: center;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`;

export const ChartOfAccountHeading = styled.h5`
  margin: 0;
  align-self: center;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`;

export const StyledTextField = styled(TextField)`
  margin-top: 0px;
`;

export const ChartOfAccountHeadDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const COAIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add any other styles you may need here */
`;

export const COAEditIcon = styled(EditIcon)`
  font-size: 14px;
  /* Add any other styles you may need here */
`;

export const COAAddIcon = styled(AddIcon)`
  font-size: 12px;
`;

export const COAHelpIcon = styled(HelpOutlineIcon)`
  font-size: 12px;
  color: grey;
  margin-left: 5px;
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Customp = styled.p`
  font-size: 10px;
  word-wrap: break-word;
  margin-left: 8%;
`;

export const CustomHR = styled.hr`
  height: 1px;
  border: none;
  background-color: #ccc;
  width: 100%;
`;

export const ShowHideGrid = styled(Grid)`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomAsterik = styled.span`
  color: red;
`;

export const CustomHR1 = styled.hr`
  height: 1px;
  border: none;
  background-color: lightgrey;
  width: 100%;
`;

export const CustomListSubheader = styled(ListSubheader)`
  font-weight: 900;
  color: black;
`;

export const CustomMenuItem = styled(MenuItem)`
  padding-left: 8%;
`;
