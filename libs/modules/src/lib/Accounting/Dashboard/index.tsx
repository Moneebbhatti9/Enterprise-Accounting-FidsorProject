import OverdueInvoicesBills from './OverdueInvoicesBills';
import StatGraphs from './Graph/StatGraphs';
import { OpportunitiesWon } from '@crema/modules/dashboards/CRM';
import NewCustomers from './NewCustomers';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Sold from './Sold';
import Purchased from './Purchased';
import { StateCard } from '@crema/modules/dashboards/ECommerce';
import SalesReport from './SalesReport';
import { WelcomeCard } from '@crema/modules/dashboards/Analytics';
import BalanceSheet from './BalanceSheet';
import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import NetProfit from './NetProfit';
import InvoicesPayableToYou from './InvoicesPayableToYou';
import BillsYouOwe from './BillsYouOwe';
import PaymentMethods from './PaymentMethods';
import { useIntl } from 'react-intl';
interface AtcStaticType {
  name: string;
  Inflow: number;
  Outflow: number;
}
type Props = {
  data: AtcStaticType[];
};
const sampleData = [
  // { name: 'Jan 22', Inflow: 30, Outflow: -40 },
  // { name: 'Feb 22', Inflow: 145, Outflow: 150 },
  // { name: 'Mar 22', Inflow: 35, Outflow: 42 },
  // { name: 'Apr 22', Inflow: -148, Outflow: 155 },
  // { name: 'May 22', Inflow: 40, Outflow: 45 },
  // { name: 'Jun 22', Inflow: 55, Outflow: -60 },
  // { name: 'Jul 22', Inflow: 160, Outflow: 165 },
  { name: 'Aug 22', Inflow: 50, Outflow: -55 },
  { name: 'Sep 22', Inflow: -58, Outflow: 62 },
  { name: 'Oct 22', Inflow: -165, Outflow: 170 },
  { name: 'Nov 22', Inflow: 70, Outflow: 75 },
  { name: 'Dec 22', Inflow: 75, Outflow: 80 },
  { name: 'Jan 23', Inflow: 180, Outflow: 185 },
  { name: 'Feb 23', Inflow: 85, Outflow: 90 },
  { name: 'Mar 23', Inflow: -90, Outflow: 95 },
  { name: 'Apr 23', Inflow: 95, Outflow: 0 },
  { name: 'May 23', Inflow: 100, Outflow: 105 },
  { name: 'Jun 23', Inflow: 5, Outflow: -10 },
  { name: 'Jul 23', Inflow: 110, Outflow: 115 },
  { name: 'Aug 23', Inflow: 15, Outflow: -20 },
];
const crmData = {
  transactionData: [
    {
      id: '#SK231',
      customer: 'Ina Hughes',
      date: '08-21-2020',
      paymentType: 'COD',
      status: 'In Transit',
    },
    {
      id: '#SK232',
      customer: 'Myrtie Ferguson',
      date: '08-12-2020',
      paymentType: 'Prepaid',
      status: 'Delivered',
    },
    {
      id: '#SK233',
      customer: 'Johnny Herrera',
      date: '07-30-2020',
      paymentType: 'Prepaid',
      status: 'In Transit',
    },
    {
      id: '#SK234',
      customer: 'Barbara Bowers',
      date: '07-25-2020',
      paymentType: 'COD',
      status: 'Delivered',
    },
    {
      id: '#SK235',
      customer: 'Annie Herrera',
      date: '07-11-2020',
      paymentType: 'Refunded',
      status: 'In Transit',
    },
    {
      id: '#SK236',
      customer: 'Ann Herrington',
      date: '06-21-2020',
      paymentType: 'COD',
      status: 'Return',
    },
    {
      id: '#SK237',
      customer: 'Ina Hughes',
      date: '06-12-2020',
      paymentType: 'COD',
      status: 'In Transit',
    },
  ],
  stateData: [
    {
      id: 3,
      icon: 'domain',
      title: 'dashboard.eCommerce.totalProduct',
      value: ' 22,213.24',
      growth: 33,
      color: '#54B435',
      currency: 'QAR',
    },
    {
      id: 2,
      icon: 'local_shipping',
      title: 'dashboard.eCommerce.newOrders',
      value: ' 52,249.78',
      growth: 33,
      color: '#ff3939',
      currency: 'QAR',
    },
    {
      id: 1,
      icon: 'point_of_sale',
      title: 'Item Sales',
      value: '23,$549.78',
      growth: 33,
      color: '#0A8FDC',
      currency: 'QAR',
    },
    {
      id: 4,
      icon: 'supervisor_account',
      title: 'Unique Visitors',
      value: '52,249.78',
      growth: 21,
      color: '#F04F47',
      currency: 'QAR',
    },
  ],
  visitorPageView: [
    {
      name: 'Jan',
      Visitor: 150,
      PageView: 270,
      amount: '$100',
    },
    {
      name: 'Feb',
      Visitor: 250,
      PageView: 200,
      amount: '$100',
    },
    {
      name: 'Mar',
      Visitor: 180,
      PageView: 280,
      amount: '$100',
    },
    {
      name: 'Apr',
      Visitor: 278,
      PageView: 250,
      amount: '$100',
    },
    {
      name: 'May',
      Visitor: 250,
      PageView: 300,
      amount: '$100',
    },
    {
      name: 'Jun',
      Visitor: 350,
      PageView: 250,
      amount: '$100',
    },
    {
      name: 'Jul',
      Visitor: 280,
      PageView: 300,
      amount: '$100',
    },
    {
      name: 'Aug',
      Visitor: 340,
      PageView: 240,
      amount: '$100',
    },
    {
      name: 'Sep',
      Visitor: 280,
      PageView: 300,
      amount: '$100',
    },
    {
      name: 'Oct',
      Visitor: 400,
      PageView: 270,
      amount: '$100',
    },
    {
      name: 'Nov',
      Visitor: 250,
      PageView: 240,
      amount: '$100',
    },
    {
      name: 'Dec',
      Visitor: 400,
      PageView: 270,
      amount: '$100',
    },
  ],
  opportunitiesWonGraphData: [
    {
      name: 'May 1',
      actual: 6200,
      progress: 4800,
    },
    {
      name: 'May 2',
      actual: 2200,
      progress: 3800,
    },
    {
      name: 'May 3',
      actual: 9000,
      progress: 5800,
    },
    {
      name: 'May 4',
      actual: 4500,
      progress: 2000,
    },
    {
      name: 'May 5',
      actual: 6000,
      progress: 8500,
    },
    {
      name: 'May 6',
      actual: 9000,
      progress: 3800,
    },
  ],
  welcomeCard: [
    {
      id: 1,
      type: 'common.customers',
      counts: 42,
      icon: 'HiOutlineMailOpen',
      url: '/salespayment/customer',
    },
    {
      id: 2,
      type: 'common.vendors',
      counts: 144,
      icon: 'BiMessageDetail',
      url: '/purchases/vendors',
    },
    {
      id: 1,
      type: 'sidebar.payroll.employees',
      counts: 12,
      icon: 'CgFileDocument',
      url: '/payroll/employees',
    },
  ],
  revenueCards: [
    {
      id: 1,
      type: 'Revenue',
      value: '$3,732',
      growth: 2.5,
      icon: '/assets/images/dashboard/icon_revenue.svg',
      strokeColor: '#f44d50',
      graphData: [
        { month: 'Aug', number: 310 },
        { month: 'Sep', number: 130 },
        { month: 'Oct', number: 350 },
        { month: 'Nov', number: 170 },
        { month: 'Dec', number: 400 },
      ],
    },
    {
      id: 2,
      type: 'Today Visits',
      value: '882',
      growth: 3.7,
      icon: '/assets/images/dashboard/icon_visits.svg',
      strokeColor: '#f49820',
      graphData: [
        { month: 'Jan', number: 20 },
        { month: 'Feb', number: 170 },
        { month: 'Mar', number: 40 },
        { month: 'Apr', number: 200 },
        { month: 'May', number: 70 },
      ],
    },
  ],
  salesState: [
    {
      id: 1,
      amount: '3.2M',
      type: 'COA.CashAndBank',
      icon: '/assets/images/dashboard/all_time_sales.svg',
    },
    {
      id: 2,
      amount: '390',
      type: 'dashboard.toBeReceived',
      icon: '/assets/images/dashboard/commission_sale.svg',
    },
    {
      id: 3,
      amount: '3510',
      type: 'dashboard.toBePaid',
      icon: '/assets/images/dashboard/auther_sales.svg',
    },
    // {
    //   id: 5,
    //   amount: '3510',
    //   type: 'Invoices',
    //   icon: '/assets/images/dashboard/icon_revenue.svg',
    // },
  ],

  salesChartData: [
    {
      name: 'Nov 22',
      CB: 9800,
      Rec: 2000,
      Paid: 2290,
    },
    {
      name: 'Dec 22',
      CB: 3908,
      Rec: 1500,
      Paid: 2000,
    },
    {
      name: 'Jan 23',
      CB: 7000,
      Rec: 3000,
      Paid: 2181,
    },
    {
      name: 'Feb 23',
      CB: 2390,
      Rec: 3800,
      Paid: 2500,
    },
    {
      name: 'Mar 23',
      CB: 8000,
      Rec: 3600,
      Paid: 2100,
    },
  ],
  visitorsPageView: [
    { name: '15 May', Page: 150, Visitor: 270 },
    { name: '16 May', Page: 250, Visitor: 200 },
    { name: '17 May', Page: 180, Visitor: 280 },
    { name: '18 May', Page: 278, Visitor: 250 },
    { name: '19 May', Page: 250, Visitor: 300 },
    { name: '20 May', Page: 350, Visitor: 250 },
    { name: '21 May', Page: 280, Visitor: 300 },
    { name: '21 May', Page: 340, Visitor: 240 },
    { name: '21 May', Page: 280, Visitor: 300 },
    { name: '21 May', Page: 400, Visitor: 270 },
  ],
  activeVisitors: {
    growth: 4,
    value: 4788,
    slug: 'Active Visitors right now',
    graphData: [
      { time: '1', value: 823 },
      { time: '2', value: 635 },
      { time: '3', value: 900 },
      { time: '4', value: 760 },
      { time: '5', value: 874 },
      { time: '6', value: 575 },
      { time: '7', value: 800 },
      { time: '8', value: 680 },
      { time: '9', value: 830 },
      { time: '10', value: 920 },
      { time: '11', value: 823 },
      { time: '22', value: 635 },
      { time: '23', value: 900 },
      { time: '24', value: 760 },
      { time: '25', value: 874 },
      { time: '26', value: 575 },
      { time: '27', value: 800 },
      { time: '28', value: 680 },
      { time: '29', value: 823 },
      { time: '30', value: 920 },
      { time: '31', value: 823 },
      { time: '32', value: 635 },
    ],
  },
  trafficData: [
    {
      id: 1,
      title: 'Organic Search',
      value: 78,
      session: 10853,
    },
    { id: 2, title: 'Direct', value: 90, session: 12323 },
    {
      id: 3,
      title: 'Referral',
      value: 25,
      session: 1231,
    },
    { id: 4, title: 'Email', value: 40, session: 5454 },
    {
      id: 5,
      title: 'Social',
      value: 55,
      session: 6755,
    },
    {
      id: 6,
      title: 'Advertise',
      value: 70,
      session: 9853,
    },
    {
      id: 7,
      title: 'Referral',
      value: 25,
      session: 1231,
    },
  ],
  recentPatients: [
    {
      id: '#SK231',
      name: 'Ina Hughes',
      profile_pic: '/assets/images/avatar/A10.jpg',
      gender: 'Male',
      weight: '76',
      assignedDr: 'Dr. Michael Clark',
      date: '08-12-2020',
      status: 'Typhoid',
      color: '#0A8FDC',
    },
    {
      id: '#SK232',
      name: 'Myrtie Ferguson',
      profile_pic: '/assets/images/avatar/A11.jpg',
      gender: 'Female',
      assignedDr: 'Dr. Pauline',
      date: '07-30-2020',
      weight: '65',
      status: 'Dengue',
      color: '#49BD65',
    },
    {
      id: '#SK233',
      name: 'Johnny Herrera',
      profile_pic: '/assets/images/avatar/A12.jpg',
      weight: '67',
      gender: 'Male',
      assignedDr: 'Dr. David',
      date: '07-30-2020',
      status: 'Cancer',
      color: '#F44D50',
    },
    {
      id: '#SK234',
      name: 'Jone B. Rilea',
      profile_pic: '/assets/images/avatar/A14.jpg',
      weight: '80',
      gender: 'Male',
      assignedDr: 'Dr. Tom Bundle',
      date: '07-30-2020',
      status: 'Covid 19',
      color: '#F44D50',
    },
  ],
  reportData: [
    {
      id: 1,
      value: '785K+',
      type: 'Yearly Traffic',
      changes: '10',
      icon: 'public',
      color: '#3d5afe',
      graphData: [
        { month: 'Aug', number: 310 },
        { month: 'Sep', number: 130 },
        { month: 'Oct', number: 350 },
        { month: 'Nov', number: 170 },
        { month: 'Dec', number: 400 },
      ],
    },
    {
      id: 2,
      value: '$457K+',
      type: 'Yearly Profit',
      changes: '5',
      icon: 'pie_chart',
      color: '#F04F47',
      graphData: [
        { month: 'Aug', number: 310 },
        { month: 'Sep', number: 130 },
        { month: 'Oct', number: 350 },
        { month: 'Nov', number: 170 },
        { month: 'Dec', number: 400 },
      ],
    },
    {
      id: 3,
      value: '565K+',
      type: 'Yearly Sale Report',
      changes: '15',
      icon: 'bar_chart',
      color: '#54B435',
      graphData: [
        { month: 'Aug', number: 310 },
        { month: 'Sep', number: 130 },
        { month: 'Oct', number: 350 },
        { month: 'Nov', number: 170 },
        { month: 'Dec', number: 400 },
      ],
    },
    {
      id: 4,
      value: '$340K+',
      type: 'Yearly Revenue',
      changes: '12',
      icon: 'account_balance_wallet',
      color: '#0BBFDB',
      graphData: [
        { month: 'Aug', number: 310 },
        { month: 'Sep', number: 130 },
        { month: 'Oct', number: 350 },
        { month: 'Nov', number: 170 },
        { month: 'Dec', number: 400 },
      ],
    },
  ],
  newCustomers: [
    {
      id: 10001,
      image: '/assets/images/avatar/A1.jpg',
      name: 'Angelina Joew',
      orders: 0,
      color: '',
      message: 'added courses to the new bucket.',
    },
    {
      id: 10002,
      image: '/assets/images/avatar/A2.jpg',
      name: 'John Mathew',
      orders: 3,
      color: '',
      message: 'like company website design.',
    },
    {
      id: 10003,
      image: '/assets/images/avatar/A3.jpg',
      name: 'George Bailey',
      orders: 3,
      color: '',
      message: 'followed your works',
    },
    {
      id: 10004,
      image: '/assets/images/avatar/A4.jpg',
      name: 'Maria Lee',
      orders: 0,
      color: '',
      message: 'liked origmi-creativity agency.',
    },
    {
      id: 10005,
      image: '/assets/images/avatar/A1.jpg',
      name: 'Angelina Joew',
      orders: 4,
      color: '',
      message: 'added courses to the new bucket.',
    },
  ],
  overdueInvoicesBillsData: [
    {
      id: 1,
      name: 'Phone Bill',
      amount: '81,973.32',
    },
    {
      id: 2,
      name: 'Water Supply Bill',
      amount: '45,076.39',
    },
    {
      id: 3,
      name: 'Electricity Bill',
      amount: '43,892.58',
    },
    {
      id: 4,
      name: 'Gas Bill',
      amount: '33,010.29',
    },
    {
      id: 5,
      name: 'Cable TV Bill',
      amount: '29,843.19',
    },
  ],
  revenueData: [
    {
      id: 1,
      name: 'Sports Running Swim',
      value: 85,
    },
    {
      id: 2,
      name: 'DJI Phantom Camera',
      value: 60,
    },
    {
      id: 3,
      name: 'Apple Macbook Display 12 Inch',
      value: 56,
    },
    {
      id: 4,
      name: 'PBluetooth Speaker',
      value: 43,
    },
    {
      id: 5,
      name: 'DJI Phantom Camera',
      value: 60,
    },
    {
      id: 6,
      name: 'Apple Macbook Display 12 Inch',
      value: 56,
    },
    {
      id: 7,
      name: 'Sports Running Swim',
      value: 85,
    },
    {
      id: 8,
      name: 'PBluetooth Speaker',
      value: 43,
    },
  ],
  // overdueInvoicesBillsData: [
  //   {
  //     id: 1,
  //     name: 'ABC Computers',
  //     value: "0.00",
  //   },
  //   {
  //     id: 2,
  //     name: 'ABC Computers',
  //     value: "0.00",
  //   },
  //   {
  //     id: 3,
  //     name: 'ABC Computers',
  //     value: "0.00",
  //   },
  //   {
  //     id: 4,
  //     name: 'ABC Computers',
  //     value: "0.00",
  //   },
  // ],
  billsYouOweData: [
    {
      id: 1,
      name: 'Coming Due',
      value: '80,343.00',
    },
    {
      id: 2,
      name: 'dashboard.30overdue',
      value: '90,423.00',
    },
    {
      id: 3,
      name: 'dashboard.60overdue',
      value: '70,332.00',
    },
    {
      id: 4,
      name: 'dashboard.90overdue',
      value: '12,420.00',
    },
    {
      id: 5,
      name: 'dashboard.90+overdue',
      value: '14,230.00',
    },
  ],
  invoicesPayableToYouData: [
    {
      id: 1,
      name: 'Coming Due',
      value: '30,232.00',
    },
    {
      id: 2,
      name: 'dashboard.30overdue',
      value: '70,232.00',
    },
    {
      id: 3,
      name: 'dashboard.60overdue',
      value: '90,122.00',
    },
    {
      id: 4,
      name: 'dashboard.90overdue',
      value: '14,210.00',
    },
    {
      id: 5,
      name: 'dashboard.90+overdue',
      value: '25,430.00',
    },
  ],
  stateCardsData: [
    {
      id: 3,
      icon: 'domain',
      title: 'common.invoices_title1',
      value: ' 23,289.12',
      growth: 33,
      color: '#54B435',
      currency: 'QAR',
    },
    {
      id: 2,
      icon: 'local_shipping',
      title: 'common.invoices_title2',
      value: ' 56,128.98',
      growth: 33,
      color: '#ff3939',
      currency: 'QAR',
    },
    {
      id: 1,
      icon: 'point_of_sale',
      title: 'common.invoices_title3',
      value: ' 54,807.12',
      growth: 33,
      color: '#0A8FDC',
      currency: 'QAR',
    },
    {
      id: 4,
      icon: 'supervisor_account',
      title: 'common.invoices_title4',
      value: ' 86,213.98',
      growth: 21,
      color: '#F04F47',
      currency: 'QAR',
    },
  ],
  topInquiries: [
    {
      id: 1,
      title: 'COA.CreditCardTitle',
      value: 25,
      color: '#0A8FDC',
    },
    {
      id: 2,
      title: 'dashboard.check',
      value: 35,
      color: '#54B435',
    },
    {
      id: 3,
      title: 'dashboard.moneyWire',
      value: 20,
      color: '#ff3939',
    },
    {
      id: 4,
      title: 'dashboard.cash',
      value: 20,
      color: 'yellow',
    },
  ],
  revenue: [
    {
      id: 1,
      title: 'dashboard.target',
      value: 60,
      color: '#0A8FDC',
    },
    {
      id: 2,
      title: 'dashboard.current',
      value: 40,
      color: '#ff3939',
    },
  ],
  status: [
    {
      id: 1,
      title: 'dashboard.paid',
      value: 60,
      color: '#0A8FDC',
    },
    {
      id: 2,
      title: 'dashboard.partial',
      value: 15,
      color: '#54B435',
    },
    {
      id: 3,
      title: 'common.invoices_unpaid',
      value: 10,
      color: '#ff3939',
    },
    {
      id: 4,
      title: 'common.invoices_title1',
      value: 15,
      color: 'yellow',
    },
  ],
  type: [
    {
      id: 1,
      title: 'sidebar.ecommerce.products',
      value: 40,
      color: '#0A8FDC',
    },
    {
      id: 2,
      title: 'dashboard.services',
      value: 60,
      color: '#54B435',
    },
    {
      id: 3,
      title: 'dashboard.others',
      value: 0,
      color: '#ff3939',
    },
  ],
};
const StyledStack = styled(Stack)`
  padding-right: 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Dashboard = () => {
  const { messages } = useIntl();
  return (
    <>
      {' '}
      <Container style={{ marginBottom: '15px' }}>
        <StyledStack direction="row" spacing={2}></StyledStack>
      </Container>
      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <WelcomeCard data={crmData.welcomeCard} />
          {/* {crmData.stateData.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} lg={3}>
              <StateCard data={data} />
            </Grid>
          ))} */}
          <AppGridContainer>
            <Grid item xs={12} sm={6}>
              <StateCard data={crmData.stateData[0]} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StateCard data={crmData.stateData[1]} />
            </Grid>
          </AppGridContainer>
        </Grid>
        <Grid item xs={12} lg={6}>
          <BalanceSheet
            salesState={crmData.salesState}
            chartData={crmData.salesChartData}
          />
        </Grid>
        {/* {crmData.stateData.map((data) => (
          <Grid key={data.id} item xs={12} sm={6} lg={3}>
            <StateCard data={data} />
          </Grid>
        ))} */}
        <Grid item xs={12} md={9} lg={9}>
          <SalesReport />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <NetProfit />
        </Grid>

        {/* {crmData.reportData.map((data) => (
          <Grid key={data.id} item xs={12} sm={6} lg={3}>
            <ReportCard data={data} />
          </Grid>
        ))} */}

        <Grid item xs={12} md={6}>
          <StatGraphs data={sampleData} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Sold revenueData={crmData.revenueData} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Purchased revenueData={crmData.revenueData} />
        </Grid>

        <Grid item xs={12} sm={12} lg={4}>
          <OverdueInvoicesBills
            dealsTableData={crmData.overdueInvoicesBillsData}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InvoicesPayableToYou
            dealsTableData={crmData.invoicesPayableToYouData}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <BillsYouOwe dealsTableData={crmData.billsYouOweData} />
        </Grid>
        {crmData.stateCardsData.map((data) => (
          <Grid key={data.id} item xs={12} sm={6} lg={3}>
            <StateCard data={data} />
          </Grid>
        ))}
        <Grid item xs={12} md={6} lg={3}>
          <PaymentMethods
            topInquiries={crmData.revenue}
            title={messages['dashboard.revenue'] as string}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <PaymentMethods
            topInquiries={crmData.topInquiries}
            title={messages['sidebar.billing.paymentmethod'] as string}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <PaymentMethods
            topInquiries={crmData.status}
            title={messages['dahboard.invoiceStatus'] as string}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <PaymentMethods
            topInquiries={crmData.type}
            title={messages['dashboard.productType'] as string}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <NewCustomers newCustomers={crmData.newCustomers} />
        </Grid>
        <Grid item xs={12} md={6}>
          <OpportunitiesWon data={crmData.opportunitiesWonGraphData} />
        </Grid>

        {/* <Grid item xs={12} md={8} xl={9}>
          <VisitorPageView data={crmData.visitorsPageView} />
        </Grid>
        <Grid item xs={12} md={4} xl={3}>
          <ActiveVisitors data={crmData.activeVisitors} />
        </Grid>
        <Grid item xs={12} md={9}>
          <AppCard
            sxStyle={{ height: 1 }}
            contentStyle={{ px: 0 }}
            title={<IntlMessages id="dashboard.analytics.ordersTransaction" />}
            action={
              <AppSelect
                menus={['thisWeek', 'lastWeeks', 'lastMonth']}
                defaultValue="thisWeek"
                onChange={function (e: any): void {
                  throw new Error('Function not implemented.');
                }}
              />
            }
          >
            <TransactionTable transactionData={crmData.transactionData} />
          </AppCard>
        </Grid>
        <Grid item xs={12} md={3}>
          <TrafficSource trafficData={crmData.trafficData} />
        </Grid> */}
        {/* <Grid item xs={12} md={12} lg={12} xl={8}>
              <DealsNew dealsTableData={crmData.dealsTableData} />
            </Grid> */}
        {/* <Grid item xs={12} sm={12} md={8}>
          <RecentPatients recentPatients={crmData.recentPatients} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}></Grid> */}
      </AppGridContainer>
      {/* <StatGraphs data={sampleData} />
      <AppCard title="Payable & Owing" style={{ marginTop: '20px' }}>
        <PaybleOwning />
      </AppCard>
      <AppCard title="Net Income" style={{ marginTop: '20px' }}>
        <NetIncome />
      </AppCard> */}
    </>
  );
};

export default Dashboard;
