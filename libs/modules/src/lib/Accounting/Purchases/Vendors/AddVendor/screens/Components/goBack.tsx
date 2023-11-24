import { Link } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Typography, Stack } from '@mui/material';

const GoBack = () => {
  return (
    <Link
      to="/purchases/vendors"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={2}
        sx={{
          '&:hover': {
            color: '#0a8fdc',
          },
        }}
      >
        <ArrowBackIosNewOutlinedIcon
          fontSize="small"
          style={{ marginTop: '4px' }}
        />

        <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
          Add Vendor
        </Typography>
      </Stack>
    </Link>
  );
};

export default GoBack;
