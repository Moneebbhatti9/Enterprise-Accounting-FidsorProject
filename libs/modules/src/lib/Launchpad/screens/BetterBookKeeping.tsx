import React, { useState } from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import { Body, Container } from '../styles/LaunchpadStyles';
import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import Popup from '../components/Popup';
import cBankCredit from '../../../assets/images/connect-to-bank-or-credit-card.png';
import manageTransactions from '../../../assets/images/manage-transaction.png';
import salesTax from '../../../assets/images/add-sales-tax.png';
import scanReceipt from '../../../assets/images/scan-receipt.png';
import hireExpert from '../../../assets/images/hire-an-expert.png';
import accountCustomization from '../../../assets/images/account-customization.png';
import Cards, { CardInfo } from '../components/Cards';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Link } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';

const BetterBookKeeping: React.FC = () => {
  const [popupContent, setPopupContent] = useState<{
    heading?: React.ReactNode;
    paragraph?: React.ReactNode;
    subheading?: React.ReactNode;
    listItems?: React.ReactNode[];
    redirectPath?: string;
  } | null>(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCardClick = (cardTitle: string) => {
    if (cardTitle === 'Connect your bank or credit card') {
      setPopupContent({
        heading: <IntlMessages id="launchpad.bbk.cbc.popup.heading" />,
        subheading: <IntlMessages id="launchpad.bbk.cbc.popup.subheading" />,
        paragraph: <IntlMessages id="launchpad.bbk.cbc.popup.paragraph" />,
        listItems: [
          <IntlMessages id="launchpad.bbk.cbc.popup.bp1" />,
          <IntlMessages id="launchpad.bbk.cbc.popup.bp2" />,
          <IntlMessages id="launchpad.bbk.cbc.popup.bp3" />,
        ],
        redirectPath: '/comingsoon',
      });
    } else if (cardTitle === 'Manage Transactions') {
      setPopupContent({
        heading: <IntlMessages id="launchpad.bbk.mt.popup.heading" />,
        subheading: <IntlMessages id="launchpad.bbk.mt.popup.subheading" />,
        paragraph: <IntlMessages id="launchpad.bbk.mt.popup.paragraph" />,
        listItems: [
          <IntlMessages id="launchpad.bbk.mt.popup.bp1" />,
          <IntlMessages id="launchpad.bbk.mt.popup.bp2" />,
          <IntlMessages id="launchpad.bbk.mt.popup.bp3" />,
        ],
        redirectPath: '/comingsoon',
      });
    } else if (cardTitle === 'Add sales taxes') {
      setPopupContent({
        heading: <IntlMessages id="launchpad.bbk.ast.popup.heading" />,
        subheading: <IntlMessages id="launchpad.bbk.ast.popup.subheading" />,
        paragraph: <IntlMessages id="launchpad.bbk.ast.popup.paragraph" />,
        listItems: [
          <IntlMessages id="launchpad.bbk.ast.popup.bp1" />,
          <IntlMessages id="launchpad.bbk.ast.popup.bp2" />,
          <IntlMessages id="launchpad.bbk.ast.popup.bp3" />,
        ],
        redirectPath: '/comingsoon',
      });
    } else if (cardTitle === 'Customize your accounts') {
      setPopupContent({
        heading: <IntlMessages id="launchpad.bbk.cs.popup.heading" />,
        subheading: <IntlMessages id="launchpad.bbk.cs.popup.subheading" />,
        paragraph: <IntlMessages id="launchpad.bbk.cs.popup.paragraph" />,
        listItems: [
          <IntlMessages id="launchpad.bbk.cs.popup.bp1" />,
          <IntlMessages id="launchpad.bbk.cs.popup.bp2" />,
          <IntlMessages id="launchpad.bbk.cs.popup.bp3" />,
        ],
        redirectPath: '/comingsoon',
      });
    }

    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const cardData: CardInfo[] = [
    {
      srcImg: cBankCredit,
      title: <IntlMessages id="launchpad.bbk.cbc.card.title" />,
      clickable: true,
      onClick: () => handleCardClick('Connect your bank or credit card'),
    },
    {
      srcImg: manageTransactions,
      title: <IntlMessages id="launchpad.bbk.mt.card.title" />,
      clickable: true,
      onClick: () => handleCardClick('Manage Transactions'),
    },
    {
      srcImg: salesTax,
      title: <IntlMessages id="launchpad.bbk.ast.card.title" />,
      clickable: true,
      onClick: () => handleCardClick('Add sales taxes'),
    },
    {
      srcImg: scanReceipt,
      title: <IntlMessages id="launchpad.bbk.sr.card.title" />,
      redirectPath: '/comingsoon',
    },
    {
      srcImg: accountCustomization,
      title: <IntlMessages id="launchpad.bbk.ca.card.title" />,
      clickable: true,
      onClick: () => handleCardClick('Customize your accounts'),
    },
    {
      srcImg: hireExpert,
      title: <IntlMessages id="launchpad.bbk.he.card.title" />,
      redirectPath: '/comingsoon',
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
            <IntlMessages id="launchpad.bbk.heading" />
          </Typography>
          <Typography fontSize="16px" color="#6B7280" mt={1} textAlign="center">
            <IntlMessages id="launchpad.bbk.tagline" />
          </Typography>
          <Typography fontSize="13px" mt={1} mb={'50px'} textAlign="center">
            <IntlMessages id="launchpad.bbk.description" />
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

export default BetterBookKeeping;
