import PageHeader from '../../../../Accounting/Global/Components/MainPageHeader';
import DataTable from '../../../../Accounting/Global/Components/DataGrid';
import { Body } from '../../../../Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import { getAllEstimates } from '../../../../../../../services/EstimateService/EstimateService';
import { useEffect, useState } from 'react';
import AppLoader from '@crema/components/AppLoader';
const AllEstimates = () => {
  const [loading, setLoading] = useState(true);
  const columns = [
    'id',
    'estimate#',
    'name',
    'date',
    'expireDate',
    'amount',
    'currencyType',
    'status',
    'actions',
  ];
  const sampleData = {
    stateData: [
      {
        id: 3,
        icon: 'domain',
        title: 'Total Estimates',
        value: '54679.78',
        growth: 500,
        color: '#54B435',
        currency: 'QAR ',
      },
      {
        id: 2,
        icon: 'local_shipping',
        title: 'Pending for approval Estimates',
        value: '26733.87',
        growth: 33,
        color: '#ff3939',
        currency: 'QAR ',
      },
      {
        id: 1,
        icon: 'point_of_sale',
        title: 'Send to Customers',
        value: '16723.65',
        growth: 33,
        color: '#0A8FDC',
        currency: 'QAR ',
      },
      {
        id: 4,
        icon: 'supervisor_account',
        title: 'Expired Customers',
        value: '67644.78',
        growth: 21,
        color: '#F04F47',
        currency: 'QAR ',
      },
    ],
  };
  const menuItems = [{ name: '', link: '' }];
  const [estimateData, setEstimateData] = useState([]);
  useEffect(() => {
    async function fetchEstimates() {
      try {
        setLoading(true);
        const data = await getAllEstimates();
        const reversedData = data.reverse();
        console.log(reversedData);
        setEstimateData(reversedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching estimates:', error);
        setLoading(false);
      }
    }
    fetchEstimates();
  }, []);
  return (
    <>
      {/* <AppGridContainer style={{paddingBottom:'20px'}}>
      {sampleData.stateData.map((data) => (
        <Grid key={data.id} item xs={12} sm={6} lg={3}>
          <StateCard data={data} />
        </Grid>
      ))}
    </AppGridContainer> */}
       {loading ? (
        <AppLoader />
      ) : (
      <Body>
        <PageHeader
          title="common.estimates"
          linkTo="/salespayment/quotations/createquotation"
          intlMessage="common.estimate.createestimate"
          menuItems={menuItems}
        />
        {/* <Box style={{paddingBottom:'20px'}}>
        <Filter  />

        </Box> */}
        <DataTable
          columns={columns}
          jsonData={estimateData}
          name={'Quotations'}
          link={'/salespayment/quotations'}
        />
      </Body>
       )}
    </>
  );
};

export default AllEstimates;
