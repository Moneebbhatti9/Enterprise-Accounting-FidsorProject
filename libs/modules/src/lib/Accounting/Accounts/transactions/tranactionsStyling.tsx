import Autocomplete from '@mui/material/Autocomplete';
import styled from 'styled-components';
import { Box, TextField } from '@mui/material';
export const StyledAutoComlete = styled(Autocomplete)`
  width: 500px;
`;

export const StyledTextField = styled(TextField)`
  padding: '6px 0px';
`;

export const Body = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  padding: 2% 2%;
  border-radius: 10px;
`;
