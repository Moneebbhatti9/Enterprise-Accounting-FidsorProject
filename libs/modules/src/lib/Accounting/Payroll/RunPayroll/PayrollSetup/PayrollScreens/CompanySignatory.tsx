import { Body } from '../../../../Global/Styling';
import CompanySignatoryFields from './CompanySignatoryComponents/CompanySignatoryFields';
import PageHeaderWithBack from '../../../../Global/Components/PageHeaderWithBack';

const CompanySignatory = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Run Payroll'} url="/payroll/employees" />
      <CompanySignatoryFields />
    </Body>
  );
};

export default CompanySignatory;
