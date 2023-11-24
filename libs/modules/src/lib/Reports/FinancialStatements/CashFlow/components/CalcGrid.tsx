import { Grid, Typography } from '@mui/material';
import { Body, MainCon, Title, OperatorGrid } from '../styles/CalcStyle';

const CalcGrid = () => {
  return (
    <Body>
      <Grid container sx={{ justifyContent: 'center' }}>
        <MainCon item xs={2} sm={2}>
          <Title variant="h5" sx={{ fontSize: { xs: 8, sm: 10, md: 15 } }}>
            Gross Cash Inflow
          </Title>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: 15, sm: 20, md: 30 } }}
          >
            $24.00
          </Typography>
        </MainCon>
        <OperatorGrid
          item
          xs={1}
          sx={{
            paddingTop: { xs: 2, sm: 1, md: 5 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: 20, sm: 30, md: 30 },
            }}
          >
            -
          </Typography>
        </OperatorGrid>
        <MainCon item xs={2} sm={2}>
          <Title variant="h5" sx={{ fontSize: { xs: 8, sm: 10, md: 15 } }}>
            Gross Cash Outflow
          </Title>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: 15, sm: 20, md: 30 } }}
          >
            $0.00
          </Typography>
        </MainCon>

        <OperatorGrid
          item
          xs={1}
          sx={{
            paddingTop: { xs: 2, sm: 1, md: 5 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: 20, sm: 30, md: 30 },
            }}
          >
            =
          </Typography>
        </OperatorGrid>
        <MainCon item xs={2} sm={2}>
          <Typography
            variant="h5"
            sx={{ color: '#808080', fontSize: { xs: 8, sm: 10, md: 15 } }}
          >
            Net Cash Change
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: 15, sm: 20, md: 30 }, color: '#14713f' }}
          >
            $24.00
          </Typography>
        </MainCon>
      </Grid>
    </Body>
  );
};

export default CalcGrid;
