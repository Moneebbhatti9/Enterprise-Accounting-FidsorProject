import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

export type CardInfo = {
  srcImg: string;
  title: React.ReactNode;
  redirectPath?: string;
  description?: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
};
export interface SectionProps {
  data: CardInfo;
}

const Cards: React.FC<SectionProps> = ({ data }) => {
  const handleCardClick = () => {
    if (data.onClick) {
      data.onClick();
    }
  };
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
      onClick={handleCardClick}
    >
      <Stack direction="column" justifyContent="space-around" height="100%">
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
            style={{
              width: '170px',
            }}
          />
        </Box>
        <Box>
          <Typography
            component="h3"
            sx={{
              fontWeight: Fonts.SEMI_BOLD,
              fontSize: 14,
              textAlign: 'center',
            }}
          >
            {data.title}
          </Typography>

          <Typography
            sx={{
              mb: 2,
              color: (theme) => theme.palette.text.secondary,
              fontSize: 12,
              textAlign: 'center',
            }}
          >
            {data.description}
          </Typography>
        </Box>
      </Stack>
    </AppCard>
  );
};

export default Cards;
