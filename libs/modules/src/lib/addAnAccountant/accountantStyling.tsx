import styled from 'styled-components';
import AppsContent from '@crema/components/AppsContent';
import { Box, Button, Typography } from '@mui/material';

export const StyledBox = styled(Box)`
py: { xl: 8 };
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
mb: { xs: 4, xl: 8 };
`;
export const StyledCustomBox = styled(Box)`
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;
export const StyledHeading = styled(Box)`
  margin-bottom: 16px;
  font-size: 1.25rem;
  font-weight: 500;
`;
export const InnerStyledBox = styled(Box)`
  margin-bottom: 32px; /* Adjust the value according to your needs */
  width: 100%;
  max-width: 200px; /* Default value for xs screen size */

  @media (min-width: 600px) {
    max-width: 300px; /* Apply for sm screen size and above */
  }

  @media (min-width: 1920px) {
    max-width: 706px; /* Apply for xl screen size and above */
  }

  & svg {
    width: 100%;
    max-width: 400px;
  }
`;
export const StyledThemeBox = styled(Box)`
mb: { xs: 3, xl: 4 },
font-size: { xs: 20, md: 24 },
font-weight: Fonts.MEDIUM,
`;
export const MainStyledBox = styled(Box)``;
export const StyledButton = styled(Button)`
  padding-bottom: 12px;
  margin-bottom: 12px;
`;
export const StyledAddButton = styled(Button)`
  margin-top: 50px;
  margin-right: 50px;
`;
export const StyledTypography = styled(Typography)`
  font-size: 18px;
  margin-top: 3;
`;
export const InsideStyledBox = styled(Box)` mb: { xs: 4, xl: 5 },
color: grey[600],
`;
export const Title = styled.h1`
  font-size: 20px;
  padding-left: 60px;
  margin-top: 30px;
`;

export const ContentWrapper = styled(AppsContent)`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  px: 60px;
`;
