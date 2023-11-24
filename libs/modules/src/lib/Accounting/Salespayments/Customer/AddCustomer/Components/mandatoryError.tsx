import { Box, Typography } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import IntlMessages from '@crema/helpers/IntlMessages';

const mandatoryError = () => {
  return (
    <Box
      sx={{
        background: '#fff0f0',
        height: '50px',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <WarningAmberOutlinedIcon color="error" />
      <Typography variant="body2" color="error" fontWeight="900">
        <IntlMessages id="common.madatoryFields" />
      </Typography>
    </Box>
  );
};

export default mandatoryError;
