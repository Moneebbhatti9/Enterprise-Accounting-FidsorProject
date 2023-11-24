import Grid from '@mui/material/Grid';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';

import { TaxesSectionData, taxesData } from '@crema/fakedb/Reports';
import Cards from '../components/Cards';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';

const FinancialStatements = () => {
  return (
    <>
      <Typography variant="h2" fontSize="18px" mb="3px">
        <IntlMessages id="sidebar.reports.taxes" />
      </Typography>
      <Typography variant="body1" component="p" color="#6B7280" fontSize="12px">
        <IntlMessages id="sidebar.reports.taxes.subheading" />
      </Typography>
      <Box sx={{ paddingTop: 5 }}>
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppGridContainer>
            <Grid item xs={12}>
              <Grid container spacing={10} padding={5}>
                {taxesData.TaxesSection.map(
                  (data: TaxesSectionData, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={'section-' + index}>
                      <Link
                        to={`/reports/taxes/${data.redirectPath}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Cards data={data} />
                      </Link>
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      </Box>
    </>
  );
};

export default FinancialStatements;
