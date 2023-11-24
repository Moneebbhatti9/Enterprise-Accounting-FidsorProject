import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { Button as MuiButton } from '@mui/material';
import MainHeaderOptions from './MainHeaderOptions';
import IntlMessages from '@crema/helpers/IntlMessages';
import { CustomH1 } from '../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';
import CustomDialog, {
  FormData,
} from '../../Accounts/chartsOfAccounts/Components/Dialog';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledStack = styled(Stack)`
  padding-right: 5px;
`;
interface StyledButtonProps {
  floatStyle?: string;
}
const StyledButton = styled(MuiButton)<StyledButtonProps>`
  float: ${(props) => (props.floatStyle ? props.floatStyle : 'none')};
  font-size: 12px;
`;
interface HeaderwithDialogProps {
  title: string;
  intlMessage: string;
  menuItems: Array<{ name: string; link: string }>;
  fetchData: (value: boolean) => void;
}

const HeaderwithDialog = ({
  title,
  intlMessage,
  menuItems,
  fetchData,
}: HeaderwithDialogProps) => {
  const [creditCardsData, setCreditCardsData] = useState<FormData[]>([]);
  const [customerPrePaymentsData, setCustomerPrePaymentsData] = useState<
    FormData[]
  >([]);
  const [dueForPayrollData, setDueForPayrollData] = useState<FormData[]>([]);
  const [dueToYouBOData, setDueToYouBOData] = useState<FormData[]>([]);
  const [expectedPaymentsData, setExpectedPaymentsData] = useState<FormData[]>(
    []
  );
  const [loanAndLineOfCreditData, setLoanAndLineOfCreditData] = useState<
    FormData[]
  >([]);
  const [otherLongTermLiabilityData, setOtherLongTermLiabilityData] = useState<
    FormData[]
  >([]);
  const [otherShortTermData, setOtherShortTermData] = useState<FormData[]>([]);
  const [salesTaxData, setSalesTaxData] = useState<FormData[]>([]);
  const [open, setOpen] = useState(false);
  const [currentTable, setCurrentTable] = useState('');
  const [editEntry, setEditEntry] = useState<FormData | null>(null);

  const handleDialogSubmit = (data: FormData) => {
    if (editEntry) {
      if (data.AccountTypeId === 'creditCards') {
        setCreditCardsData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'customerPrePayments') {
        setCustomerPrePaymentsData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'dueForPayroll') {
        setDueForPayrollData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'dueToYou&OtherBO') {
        setDueToYouBOData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'expectedPayments') {
        setExpectedPaymentsData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'loanAndLineOfCredit') {
        setLoanAndLineOfCreditData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'otherLongTermLiability') {
        setOtherLongTermLiabilityData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'otherShortTermLiability') {
        setOtherShortTermData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'salesTaxes') {
        setSalesTaxData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      }
    } else {
      if (data.AccountTypeId === 'creditCards') {
        setCreditCardsData([...creditCardsData, data]);
      } else if (data.AccountTypeId === 'customerPrePayments') {
        setCustomerPrePaymentsData([...customerPrePaymentsData, data]);
      } else if (data.AccountTypeId === 'dueForPayroll') {
        setDueForPayrollData([...dueForPayrollData, data]);
      } else if (data.AccountTypeId === 'dueToYou&OtherBO') {
        setDueToYouBOData([...dueToYouBOData, data]);
      } else if (data.AccountTypeId === 'expectedPayments') {
        setExpectedPaymentsData([...expectedPaymentsData, data]);
      } else if (data.AccountTypeId === 'loanAndLineOfCredit') {
        setLoanAndLineOfCreditData([...loanAndLineOfCreditData, data]);
      } else if (data.AccountTypeId === 'otherLongTermLiability') {
        setOtherLongTermLiabilityData([...otherLongTermLiabilityData, data]);
      } else if (data.AccountTypeId === 'otherShortTermLiability') {
        setOtherShortTermData([...otherShortTermData, data]);
      } else if (data.AccountTypeId === 'salesTaxes') {
        setSalesTaxData([...salesTaxData, data]);
      }
    }

    setOpen(false);
    setEditEntry(null);
  };

  const handleOpen = (table: string) => {
    setCurrentTable(table);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditEntry(null);
  };

  // const handleEdit = (entry: FormData) => {
  //   setEditEntry(entry);
  //   setOpen(true);
  // };

  return (
    <Container style={{ marginBottom: '15px' }}>
      <CustomH1 className="text" style={{ marginLeft: '8px' }}>
        <IntlMessages id={title} />
      </CustomH1>
      <StyledStack direction="row" spacing={2}>
        <StyledButton
          variant="outlined"
          startIcon={<PersonAddIcon />}
          onClick={() => handleOpen('allAccounts')}
        >
          <IntlMessages id={intlMessage} />
        </StyledButton>
        {/* <AddAccountDialog open={dialogOpen} onClose={handleCloseDialog} /> */}
        <CustomDialog
          open={open}
          onClose={handleClose}
          onSubmit={handleDialogSubmit}
          currentTable={currentTable}
          editEntry={editEntry}
          fetchData={fetchData}
        />

        <MainHeaderOptions menuItems={menuItems} />
      </StyledStack>
    </Container>
  );
};
export default HeaderwithDialog;
