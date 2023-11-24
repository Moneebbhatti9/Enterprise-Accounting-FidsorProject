import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';
import { StyledTextarea } from './NotesStyles';

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 35px 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 35px 0px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 35px 0px;
  }
`;
export const Section = styled(Stack)`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;
export const Fields = styled(Stack)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;
export const InputFields = styled(TextField)`
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    width: 50%;
  }

  @media (min-width: 1024px) {
    flex: initial;
    width: 50%;
  }
`;
export const FControl = styled(FormControl)`
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    width: 50%;
  }

  @media (min-width: 1024px) {
    flex: initial;
    width: 50%;
  }
`;
export const DPicker = styled(DatePicker)`
  backgroundcolor: #fff;
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    width: 50%;
  }

  @media (min-width: 1024px) {
    flex: initial;
    width: 50%;
  }
`;
export const TextArea = styled(StyledTextarea)`
  backgroundcolor: #fff;
  flex: 1;
  min-height: 48px;
  @media (min-width: 768px) {
    flex: initial;
    max-width: 50%;
    min-width: 50%;
  }

  @media (min-width: 1024px) {
    flex: initial;
    max-width: 50%;
    min-width: 50%;
  }
`;
