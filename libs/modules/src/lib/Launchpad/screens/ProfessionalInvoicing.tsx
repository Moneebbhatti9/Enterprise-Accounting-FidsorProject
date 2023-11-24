import React, { useState } from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import { Body, Container } from '../styles/LaunchpadStyles';
import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import Popup from '../components/Popup';
import acceptPayment from '../../../assets/images/accept-payment.png';
import addCustomer from '../../../assets/images/add-customer.png';
import createEstimates from '../../../assets/images/create-estimate.png';
import Cards, { CardInfo } from '../components/Cards';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Link } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';

const ProfessionalInvoicing: React.FC = () => {
  const [popupContent, setPopupContent] = useState<{
    heading?: React.ReactNode;
    paragraph?: React.ReactNode;
    subheading?: React.ReactNode;
    listItems?: React.ReactNode[];
    redirectPath?: string;
  } | null>(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCardClick = (cardTitle: string) => {
    let newPopupContent = null;

    if (cardTitle === 'Create Invoices') {
      newPopupContent = {
        heading: <IntlMessages id="launchpad.pi.c1.popup.heading" />,
        subheading: <IntlMessages id="launchpad.pi.c1.popup.heading" />,
        paragraph: <IntlMessages id="launchpad.pi.c1.popup.paragraph" />,
        listItems: [
          <IntlMessages id="launchpad.pi.c1.popup.bp1" />,
          <IntlMessages id="launchpad.pi.c1.popup.bp2" />,
        ],
        redirectPath: '/salespayment/invoices/create',
      };
    } else if (cardTitle === 'Create Quotations') {
      newPopupContent = {
        heading: <IntlMessages id="launchpad.pi.ce.popup.heading" />,
        subheading: <IntlMessages id="launchpad.pi.ce.popup.heading" />,
        paragraph: <IntlMessages id="launchpad.pi.ce.popup.paragraph" />,
        listItems: [
          <IntlMessages id="launchpad.pi.ce.popup.bp1" />,
          <IntlMessages id="launchpad.pi.ce.popup.bp2" />,
          <IntlMessages id="launchpad.pi.ce.popup.bp3" />,
        ],
        redirectPath: '/salespayment/quotations/createquotation',
      };
    }

    setPopupContent(newPopupContent);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const cardData: CardInfo[] = [
    {
      srcImg: createEstimates,
      title: <IntlMessages id="launchpad.pi.ci.card.title" />,
      redirectPath: '/salespayment/invoices/createinvoice',
    },
    {
      srcImg: addCustomer,
      title: <IntlMessages id="launchpad.pi.ac.card.title" />,
      redirectPath: '/salespayment/customer/addcustomer',
    },
    {
      srcImg: acceptPayment,
      title: <IntlMessages id="launchpad.pi.ap.card.title" />,
      redirectPath: '/launchpad/professional-invoicing/acceptpayment',
    },
    {
      srcImg: createEstimates,
      title: <IntlMessages id="launchpad.pi.ce.card.title" />,
      redirectPath: '/salespayment/quotations/createquotation',
    },
  ];

  return (
    <>
      <Link
        to="/launchpad"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          marginBottom: '50px',
        }}
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
            <IntlMessages id="sidebar.launchpad" />
          </Typography>
        </Stack>
      </Link>
      <Body>
        <Container>
          <Typography fontSize="18px" fontWeight="600" textAlign="center">
            <IntlMessages id="launchpad.pi.heading" />
          </Typography>
          <Typography fontSize="16px" color="#6B7280" mt={1} textAlign="center">
            <IntlMessages id="launchpad.pi.tagline" />
          </Typography>
          <Typography fontSize="13px" mt={1} mb={'50px'} textAlign="center">
            <IntlMessages id="launchpad.pi.description" />
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
                      {card.redirectPath ? (
                        <Link
                          to={card.redirectPath}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <Cards
                            data={{
                              ...card,
                              onClick: card.onClick,
                            }}
                          />
                        </Link>
                      ) : (
                        <Cards
                          data={{
                            ...card,
                            onClick: card.onClick,
                          }}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </AppGridContainer>
          </AppAnimate>
          {isPopupOpen && popupContent && (
            <Popup
              open={isPopupOpen}
              onClose={handleClosePopup}
              heading={popupContent.heading}
              paragraph={popupContent.paragraph}
              subheading={popupContent.subheading}
              listItems={popupContent.listItems}
              redirectPath={popupContent.redirectPath}
            />
          )}
        </Container>
      </Body>
    </>
  );
};

export default ProfessionalInvoicing;
