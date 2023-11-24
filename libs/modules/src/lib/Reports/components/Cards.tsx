import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import { Typography } from '@mui/material';
import AppCard from '@crema/components/AppCard';
import { ReportSectionData } from '@crema/fakedb/Reports';
import IntlMessages from '@crema/helpers/IntlMessages';

type SectionProps = {
  data: ReportSectionData;
};
const handleClick = () => {};
const Cards = ({ data }: SectionProps) => {
  return (
    <AppCard
      sx={{
        height: '100%',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1.05)',
          backgroundColor: '#E6F4FB',
        },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <img
          src={data.srcImg}
          alt={data.srcAlt}
          style={{
            width: '170px',
          }}
        />
      </Box>

      <Typography
        component="h3"
        sx={{
          fontWeight: Fonts.SEMI_BOLD,
          fontSize: 14,
        }}
      >
        <IntlMessages id={data.title} />

      </Typography>

      <Typography
        sx={{
          mb: 2,
          color: (theme) => theme.palette.text.secondary,
          fontSize: 12,
        }}
      >
        <IntlMessages id={data.content} />

      </Typography>
    </AppCard>
  );
};

export default Cards;
