import { Body } from '../../Global/Styling';
import PageHeaderWithBack from '../../Global/Components/PageHeaderWithBack';
import UserFields from './Components/AdduserFields';

const AddUser = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Add User'} url="/users/user" />
      <UserFields />
    </Body>
  );
};
export default AddUser;
