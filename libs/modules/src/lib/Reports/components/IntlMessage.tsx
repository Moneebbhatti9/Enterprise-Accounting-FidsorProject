import React from 'react';
import Typography from '@mui/material/Typography';
import IntlMessages from '@crema/helpers/IntlMessages';

interface IntlMessageTypographyProps {
  messageId: string;
}

const IntlMessageTypography: React.FC<IntlMessageTypographyProps> = ({
  messageId,
}) => {
  return (
    <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
      <IntlMessages id={messageId} />
    </Typography>
  );
};

export default IntlMessageTypography;
