import { Body } from '../../../Global/Styling';
import PageHeader from '../../../Global/Components/MainPageHeader';
import DataGrid from '../../../Global/ImprovedComponents/DataGrid';
import { useState, useEffect } from 'react';
import { getAllPurchasesProductServices,deleteProductServices } from '../../../../../../../services/PurchasesProductServices/ProductServices';
import AppLoader from '@crema/components/AppLoader';
const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };
  const columns = [
    'id',
    'name',
    'description',
    'saleTax',
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
  const [productsData, setProductsData] = useState([]);
  async function fetchProducts() {
    try {
      setLoading(true);
      const data = await getAllPurchasesProductServices();
      console.log(data);
      const reversedData = data.reverse();
      setProductsData(reversedData);
      setFetchData(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
      setFetchData(false);
    }
  }
  async function deletedProducts(pId: string) {
    try {
      await deleteProductServices(pId);
      console.log('Products deleted successfully');
      setDeleteRecord(false);
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  }
  useEffect(() => {
    if (fetchData) {
      fetchProducts();
      setFetchData(false);
    }
    if (deleteRecord) {
      deletedProducts(clickedCellId);
      setDeleteRecord(false);
    }
    fetchProducts();
  }, [fetchData]);
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
            title="common.productServicesPurchase"
            linkTo="/purchases/productservices/add"
            intlMessage="productServices.add"
            menuItems={menuItems}
          />
          {/* <Box style={{paddingBottom:'20px'}}>
        <Filter  />

        </Box> */}
          <DataGrid
            columns={columns}
            jsonData={productsData}
            link={'/purchases/productservices'}
            name={'Products & Services (Purchases)'}
            fetchData={setFetchData}
            deleteRecord={setDeleteRecord}
            onCellClick={handleCellClick}
            actionItems={[]}
            canDelete={true}
          />
        </Body>
      )}
    </>
  );
};
export default AllProducts;
