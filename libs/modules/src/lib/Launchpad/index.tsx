import Cards, { CardInfo } from './components/Cards';
import { Typography, Grid } from '@mui/material';
import { Body, Container } from './styles/LaunchpadStyles';
import { Link } from 'react-router-dom';
import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import profitLossImage from '../../assets/images/profit-loss.png';
import balancesheetImage from '../../assets/images/balance-sheet.png';
import cashflowImage from '../../assets/images/cash-flow.png';
import IntlMessages from '@crema/helpers/IntlMessages';

const cardData: CardInfo[] = [
  {
    srcImg: profitLossImage,
    title: <IntlMessages id="launchpad.pi.card.title" />,
    description: <IntlMessages id="launchpad.pi.card.description" />,
    redirectPath: 'professional-invoicing',
  },
  {
    srcImg: balancesheetImage,
    title: <IntlMessages id="launchpad.bbk.card.title" />,
    description: <IntlMessages id="launchpad.bbk.card.description" />,
    redirectPath: 'better-bookkeeping',
  },
  {
    srcImg: cashflowImage,
    title: <IntlMessages id="launchpad.cf.card.title" />,
    description: <IntlMessages id="launchpad.cf.card.description" />,
    redirectPath: 'reliable-payroll',
  },
];

const Launchpad = () => {
  return (
    <>
      <Typography
        sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '50px' }}
      >
        <IntlMessages id="sidebar.launchpad" />
      </Typography>
      <Body>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '70%',
          }}
        >
          <Typography fontSize="18px" fontWeight="600" textAlign={'center'}>
            <IntlMessages id="launchpad.heading" />
          </Typography>
          <Typography
            fontSize="13px"
            color="#6B7280"
            mt={1}
            mb={'50px'}
            textAlign={'center'}
          >
            <IntlMessages id="launchpad.description" />
          </Typography>
          <AppAnimate animation="transition.slideUpIn" delay={200}>
            <AppGridContainer>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={10}
                  padding={5}
                  justifyContent="center"
                >
                  {cardData.map((card, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      justifyContent="center"
                      key={'section-' + index}
                    >
                      <Link
                        to={card.redirectPath || '/default-route-path'}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Cards data={card} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </AppGridContainer>
          </AppAnimate>
        </Container>
      </Body>
    </>
  );
};

export default Launchpad;
