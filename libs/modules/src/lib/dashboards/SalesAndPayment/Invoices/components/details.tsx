import React from 'react';
import { Grid, Stack } from '@mui/material';
import AllCustomers from './allCustomers';
import CustomerStartDate from './customerStartDate';
import CustomerEndDate from './customerEndDate';
import AllStatus from './allStatus';
import CustomerSearch from './customerSearch';
import { useIntl } from 'react-intl';
import {
  StyledGrid,
  TitleOverdue,
  Filter,
  WrapIconHeading,
} from '../styles/GridStyling';
import CountIcon from './countIcon';
const Details = () => {
  const { messages } = useIntl();
  return (
    <>
      <StyledGrid>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Stack direction="column">
              {' '}
              <TitleOverdue>
                {messages['common.invoices_title1'] as string}
              </TitleOverdue>
              <h1>{messages['common.invoices_overdue'] as string}</h1>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack direction="column">
              <TitleOverdue>
                {messages['common.invoices_title2'] as string}
              </TitleOverdue>
              <h1>{messages['common.invoices_overdue'] as string}</h1>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack direction="column">
              <TitleOverdue>
                {messages['common.invoices_title2'] as string}
              </TitleOverdue>
              <h1>{messages['common.invoices_overdue'] as string}</h1>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack direction="column">
              <TitleOverdue>
                {messages['common.invoices_title2'] as string}
              </TitleOverdue>
              <h1>{messages['common.invoices_overdue'] as string}</h1>
            </Stack>
          </Grid>
          {/* <Grid item xs={12} sm={12}>
            <Stack direction="row">
              <h6>{messages['common.invoices_updated'] as string}</h6>
              <Loader>
                <AiOutlineSync />
              </Loader>
            </Stack>
          </Grid> */}
        </Grid>
      </StyledGrid>
      {/* <StyledGrid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={12} sm={3}>
            <TitleOverdue>
              {messages['common.invoices_title1'] as string}
            </TitleOverdue>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TitleOverdue>
              {messages['common.invoices_title2'] as string}
            </TitleOverdue>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TitleOverdue>
              {messages['common.invoices_title3'] as string}
            </TitleOverdue>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TitleOverdue>
              {messages['common.invoices_title4'] as string}
            </TitleOverdue>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={12} sm={3}>
            <h1>{messages['common.invoices_overdue'] as string}</h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h1>{messages['common.invoices_due'] as string}</h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h1>{messages['common.invoices_ave'] as string}</h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h1>{messages['common.invoices_none'] as string}</h1>
          </Grid>
        </Grid>
        <MarginGrid>
          <Grid container rowSpacing={1}>
            <h6>{messages['common.invoices_updated'] as string}</h6>
            <Loader>
              <AiOutlineSync />
            </Loader>
          </Grid>
        </MarginGrid>
      </StyledGrid> */}

      <WrapIconHeading>
        <Grid container>
          <Grid item>
            <CountIcon />
          </Grid>
          <Grid item>
            <Filter>{messages['common.invoices_filter'] as string}</Filter>
          </Grid>
        </Grid>
      </WrapIconHeading>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={4}>
          <AllCustomers />
        </Grid>
        <Grid item xs={12} sm={2}>
          <AllStatus />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CustomerStartDate />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CustomerEndDate />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CustomerSearch />
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
