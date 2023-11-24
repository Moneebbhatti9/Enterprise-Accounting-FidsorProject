import styled, { withTheme, DefaultTheme } from 'styled-components';
import { Box, Button, Grid, Stepper, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from '@crema/context/ThemeContextProvider';
import { FormControl, MenuItem, Select } from '@mui/material';

interface DeleteIconButtonProps {
  theme: DefaultTheme;
}

interface FileRowContainerProps {
  theme: DefaultTheme;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      secondary: any;
    };
    palette: {
      mode: string;
      primary: string;
      secondary: string;
      divider: string;
    };
  }
}

interface FileSizeBoxProps {
  theme: DefaultTheme;
}

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
export const StyledTextField = styled.input`
  height: 10px;
  min-width: 200px;
  min-height: 30px;
  padding-left: 5px;
  padding-bottom: inherit;
  /* Add more styles here if needed */
`;
export const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2px;
  /* Add more styles here if needed */
`;
export const Heading = styled.h3`
  padding-bottom: 12px;
  font-size: 18px;
`;
export const StyledBox = styled(Box)`
  width: 100%;
`;
export const StyledParagraph = styled.p`
  padding: 20px;
  /* Add more styles here if needed */
`;
// export const StyledFormControl = styled.div`
//   min-width: 200px;
//   height: 50px;
//   /* Add more styles here if needed */
// `;
export const StyledFormControl = styled(FormControl)`
  min-width: 200px;
  height: 50px;
  /* Add more styles here if needed */
`;
export const StyledStepper = styled(Stepper)`
  padding-bottom: 40px;
  padding-top: 40px;
  padding-right: 0;
  padding-left: 0;
`;
export const DropZoneContainer = styled.div`
  position: relative;
`;
export const StyledBoxFlex = styled(Box)`
  flex: 1 1 auto;
  /* Add more styles here if needed */
`;
export const StyledGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 40px;
    /* Add more styles here if needed */
  }
`;

export const FileInput = styled.input``;

interface FileRowContainerProps {
  theme: DefaultTheme;
}

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     text: {
//       secondary: any;
//     };
//     palette: {
//       // Define 'palette' here, not 'palette.text.secondary'
//       primary: string;
//       secondary: string;
//       divider: string; // Define the 'divider' property here
//     };
//   }
// }

const FileRowContainerBase = styled.div<FileRowContainerProps>`
  display: flex;
  align-items: center;
  border: solid 1px ${(props) => props.theme.palette.divider};
  margin-bottom: 2.5px;
  border-radius: 2.5px;
  padding: 2.5px;
`;

export const FileRowContainer = withTheme(FileRowContainerBase);

export const IconContainer = styled.div`
  margin-right: 3px;
`;

export const FileDetailsContainer = styled.div`
  flex: 1;
`;

export const FileSize = styled.span<FileRowContainerProps>`
  color: ${(props: { theme: { text: { secondary: any } } }) =>
    props.theme.text.secondary};
`;

export const DeleteButton = styled.button`
  padding: 1.5px;
  font-size: 16px;
`;

export const LabelAccount = styled.p`
  padding-bottom: 5px;
  padding-top: 5px;
`;
export const LabelMap = styled.p`
  padding-bottom: 30px;
`;
export const LabelTopRow = styled.p`
  padding-bottom: 40px;
`;
export const FileIconBox = styled(Box)`
  margin-right: 3px;
`;

export const FileNameTypography = styled(Typography)({
  // Add any specific typography styles here if needed
});

interface DeleteIconButtonProps {
  theme: DefaultTheme;
}
export const StyledHeading3 = styled.h3`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
  /* Add more styles here if needed */
`;

export const DeleteIconButton = styled(IconButton)<FileRowContainerProps>(
  (props: any) => ({
    padding: props.theme.spacing(1.5),
    fontSize: '16px',
  })
);
export const CustomStepLabel = styled.h3`
  font-size: 20px;
`;
export const CustomLabel = styled.h1`
  font-size: 20px;
`;
export const CustomGridContainer = styled(Grid)`
  margin-bottom: 10px;
`;

export const CustomFormControl = styled(FormControl)`
  min-width: 200px;
  height: 50px;
`;

export const CustomSelect = styled(Select)`
  height: 10px;
  min-width: 200px;
  min-height: 30px;
  padding-left: 5px;
  padding-bottom: inherit;
`;

export const CustomTextField = styled(TextField)`
  height: 10px;
  min-width: 200px;
  min-height: 30px;
  padding-left: 5px;
  padding-bottom: inherit;
`;

export const CustomButton = styled(Button)`
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
`;
