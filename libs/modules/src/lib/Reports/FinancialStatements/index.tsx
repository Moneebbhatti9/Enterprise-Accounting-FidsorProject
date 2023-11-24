import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import { ReportSectionData, reportsData } from '@crema/fakedb/Reports';
import Cards from '../components/Cards';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';

const FinancialStatements = () => {
  return (
    <>
      <Typography variant="h2" fontSize="18px" mb="3px">
        <IntlMessages id="sidebar.reports.financialstatements" />
      </Typography>
      <Typography variant="body1" component="p" color="#6B7280" fontSize="12px">
        <IntlMessages id="sidebar.reports.financialstatements.subheading" />
      </Typography>
      <Box sx={{ paddingTop: 5 }}>
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppGridContainer>
            <Grid item xs={12}>
              <Grid container spacing={10} padding={5}>
                {reportsData.ReportSection.map(
                  (data: ReportSectionData, index: number) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      justifyContent="center"
                      key={'section-' + index}
                    >
                      <Link
                        to={`/reports/financial-statements/${data.redirectPath}`}
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
