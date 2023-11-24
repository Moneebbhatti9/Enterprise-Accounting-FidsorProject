import { Body } from '../../../Global/Styling';
import PageHeader from '../../../Global/Components/MainPageHeader';
import DataTable from '../../../Global/Components/DataGrid';
import jsonData from '../../../Global/DummyData/Sales_ProductsServices.json';
import AppLoader from '@crema/components/AppLoader';
import { useState } from 'react';
const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const columns = [
    'id',
    'name',
    'type',
    'description',
    'tax',
    'price',
    'currencyType',
    'actions',
  ];
  const menuItems = [
    { name: 'Import', link: '/salespayment/productservices/import' },
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
  return (
    <>
      {/* <AppGridContainer style={{ paddingBottom: '20px' }}>
        {sampleData.stateData.map((data) => (
          <Grid key={data.id} item xs={12} sm={6} lg={3}>
            <StateCard data={data} />
          </Grid>
        ))}

      // </AppGridContainer> */}

      <Body>
        <PageHeader
          title="common.productServices"
          linkTo="/salespayment/productservices/add"
          intlMessage="productServices.add"
          menuItems={menuItems}
        />
        {/* <Box style={{paddingBottom:'20px'}}>
        <Filter  />

        </Box> */}
        <DataTable
          columns={columns}
          jsonData={jsonData}
          link={'/salespayment/productservices'}
          name={'Products & Services (Sales)'}
        />
      </Body>
    </>
  );
};
export default AllProducts;
