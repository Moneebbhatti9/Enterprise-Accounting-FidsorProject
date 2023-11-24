import { CreateButton, Header, Heading } from './styles/InvoiceStyle';
import AppGridContainer from '@crema/components/AppGridContainer';
import { StateCard } from '@crema/modules/dashboards/ECommerce';
import { Body } from '../../Global/Styling';
import Grid from '@mui/material/Grid';
import DataTable from '../../Global/Components/DataGrid';
import { AiFillFileAdd } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import { getAllInvoice } from '../../../../../../services/InvoiceService/InvoiceService';
import Filter from './components/Filter';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';

import { useEffect, useState } from 'react';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(0),
  },
}));
const columns = [
  'id',
  'invoiceNumber',
  'customerName',
  'status',
  'date',
  'dueDate',
  'amount',
  'currencyType',
  'actions',
];
const sampleData = {
  stateData: [
    {
      id: 3,
      icon: 'domain',
      title: 'Overdue',
      value: '54679.78',
      growth: 33,
      color: '#54B435',
      currency: 'QAR',
    },
    {
      id: 2,
      icon: 'local_shipping',
      title: 'Due within next 30 days',
      value: '26733.87',
      growth: 33,
      color: '#ff3939',
      currency: 'QAR',
    },
    {
      id: 1,
      icon: 'point_of_sale',
      title: 'Average time to get paid',
      value: '16723.65',
      growth: 33,
      color: '#0A8FDC',
      currency: 'QAR',
    },
    {
      id: 4,
      icon: 'supervisor_account',
      title: 'Upcoming payout',
      value: '67644.78',
      growth: 21,
      color: '#F04F47',
      currency: 'QAR',
    },
  ],
};

const Invoices = () => {
  const [invoicesData, setInvoicesData] = useState([]);
  useEffect(() => {
    async function fetchInvoices() {
      try {
        const data = await getAllInvoice();
        console.log(data);
        const reversedData = data.reverse();
        setInvoicesData(reversedData);
      } catch (error) {
        console.error('Error fetching estimates:', error);
      }
    }

    fetchInvoices();
  }, []);
  return (
    <>
      <AppGridContainer style={{ paddingBottom: '20px' }}>
        {sampleData.stateData.map((data) => (
          <Grid key={data.id} item xs={12} sm={6} lg={3}>
            <StateCard data={data} />
          </Grid>
        ))}
      </AppGridContainer>
      <Body>
        <Header direction={'row'}>
          <Heading>{<IntlMessages id="sidebar.invoice.home" />}</Heading>
          <Link to={'createinvoice'}>
            <CreateButton variant="outlined" startIcon={<AiFillFileAdd />}>
              {<IntlMessages id="common.createInVoice" />}
            </CreateButton>
          </Link>
        </Header>
        {/* <Container>
      <Grid container rowSpacing={6}>
        <Grid item xs={6} md={6} lg={3}>

         <Title>Overdue</Title>
            <Figure>
              $0.00 <Currency>USD</Currency>
            </Figure>
         {/* <StateCard data={sampleData.stateData[0]} />  */}
        {/* </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Stack>
            <Title>Due within next 30 days</Title>
            <Figure>
              $0.00 <Currency>USD</Currency>
            </Figure>
          </Stack>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Stack>
            <Title>Average time to get paid</Title>
            <Figure>
              0 <Currency>Days</Currency>
            </Figure>
          </Stack>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Stack>
            <Title>Upcoming payout</Title>
            <Figure>None</Figure>
          </Stack>
        </Grid>
      </Grid>
    </Container> */}
        <Box style={{ paddingBottom: '20px' }}>
          <Filter />
        </Box>
        {/* <ParentTab defaultValue={0} sx={{ width: '100%' }}>
      <Root>
        <Divider>
          <StyledTabsList>
            <StyledTab value={0}>Unpaid</StyledTab>
            <StyledTab value={1}>Draft</StyledTab>
            <StyledTab value={2}>All Invoices</StyledTab>
          </StyledTabsList>
        </Divider>
      </Root>
      <StyledTabPanel value={0}></StyledTabPanel>
      <StyledTabPanel value={1}></StyledTabPanel>
      <StyledTabPanel value={2}></StyledTabPanel>
    </ParentTab> */}

        <DataTable
          columns={columns}
          jsonData={invoicesData}
          link={'/salespayment/invoices'}
          name={'Invoices'}
        />
      </Body>
    </>
  );
};

export default Invoices;
