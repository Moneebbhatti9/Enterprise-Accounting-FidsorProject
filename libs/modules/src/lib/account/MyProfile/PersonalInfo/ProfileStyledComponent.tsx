import styled from 'styled-components';
import { Typography, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export const FormCheckBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FullNameBox = styled(Box)`
  margin-left: 15px;
`;
export const ProfileHeading = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;
export const AvatarBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
export const AvatarStyle = styled(Avatar)`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
export const SocialBox = styled(Box)`
  position: relative;
  max-width: 550px;
`;
export const SocialLinksHeading = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const SocialBoxPosition = styled(Box)`
  position: relative;
`;
