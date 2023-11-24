import PageHeader from '../../Accounting/Global/Components/MainPageHeader';
import DataTable from '../../Accounting/Salespayments/Customer/AllCustomer/DataTable';
import jsonData from '../../Accounting/Global/DummyData/Estimate.json';
import { Body } from '../../Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
const AllEstimates = () => {
  const columns = [
    'id',
    'name',
    'date',
    'currencyType',
    'amount',
    'status',
    'actions',
  ];
  const menuItems = [
    { name: 'Import from CSV', link: '' },
    { name: 'Import from Google', link: '' },
  ];
  return (
    <Body>
      <PageHeader
        title={'Quotations'}
        linkTo="/salespayment/quotations/createquotation"
        intlMessage="common.estimate.createestimate"
        menuItems={menuItems}
      />
      <DataTable columns={columns} jsonData={jsonData} />
    </Body>
  );
};

export default AllEstimates;
