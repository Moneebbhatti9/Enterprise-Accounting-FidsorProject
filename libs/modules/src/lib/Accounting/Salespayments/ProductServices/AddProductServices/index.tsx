import { Body } from '../../../Global/Styling';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
import Dashboard from './Dashboard';
const AddProductServices = () => {
  return (
    <Body>
      <PageHeaderWithBack
        title={'Add Product & Services'}
        url="/salespayment/productservices"
      />
      {/* <Form /> */}
      <Dashboard />
    </Body>
  );
};
export default AddProductServices;
