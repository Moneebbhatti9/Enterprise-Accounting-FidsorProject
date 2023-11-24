import styled from 'styled-components';
import { Interpolation, Theme } from '@emotion/react';
import { InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { Box, Grid, Button, List, Typography } from '@mui/material';

interface URGridContainerProps {
  isSmallScreen?: boolean;
}
interface URSubGridProps {
  isSmallScreen?: boolean;
}
interface URSubGridItemProps {
  isSmallScreen?: boolean;
}
interface YearSelectorProps {
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}
interface ReportSelectorProps {
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}

export const Body = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2% 2%;
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
export const ExportDropDown = styled(List)`
  min-width: 100px;
`;
export const UpdateReport = styled(Box)`
  width: 100%;
  margin-top: 5px;
  padding: 20px 20px;
  background-color: #ecf0f3;
  border-radius: 10px;
`;

export const URGridItem1 = styled(Grid)<URGridContainerProps>`
  order: ${(props) => (props.isSmallScreen ? 1 : 0)};
`;
export const URGridItem2 = styled(Grid)<URSubGridProps>`
  order: ${(props) => (props.isSmallScreen ? 3 : 0)};
  margin-top: ${(props) => (props.isSmallScreen ? '5px' : '0')};
`;
export const URGridItem3 = styled(Grid)<URSubGridItemProps>`
  order: ${(props) => (props.isSmallScreen ? 3 : 0)};
  margin-top: ${(props) => (props.isSmallScreen ? '5px' : '0')};
`;
export const URSubGridItem2 = styled(Grid)<URSubGridItemProps>`
  order: ${(props) => (props.isSmallScreen ? 2 : 0)};
`;
export const DatePickerContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 45%;

  & .MuiInputBase-root {
    border-radius: 8px;
    overflow: hidden;
    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ccc;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ccc;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ccc;
    }
  }
`;
export const YearSelector = styled(Select)<YearSelectorProps>`
  background-color: #fff;

  & .MuiSelect-root {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  & .MuiSelect-icon {
    color: #808080;
  }

  & .MuiSelect-select {
    color: #000;
  }
`;
export const YearMenuProps: Interpolation<Theme> = `
  PaperProps: {
    style: {
      maxHeight: '150px',
    },
  }
`;
export const ReportLabel = styled(InputLabel)`
  padding-right: 8px;
`;
export const ReportSelector = styled(Select)<ReportSelectorProps>`
  background-color: #fff;

  & .MuiSelect-root {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  & .MuiSelect-icon {
    color: #808080;
  }

  & .MuiSelect-select {
    color: #000;
  }
`;
export const ReportMenuProps: Interpolation<Theme> = `
  PaperProps: {
    style: {
      maxHeight: '150px',
    },
  }
`;
export const ButtonContainer = styled(Box)`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;
`;
export const UpdateButton = styled(Button)`
  display: flex;
  align-items: center;
`;
