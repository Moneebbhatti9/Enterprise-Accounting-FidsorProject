import React, { useState } from 'react';
import CustomDialog, { FormData } from '../Components/Dialog';
import CreditCard from './Components/CreditCard';
import CustomerPrePayments from './Components/CustomerPrePayments&CC';
import DueforPayroll from './Components/DueForPayroll';
import DueToYouBO from './Components/DueToYou&OtherBO';
import ExpectedPayments from './Components/ExpectedPayments';
import LoanAndLineOfCredit from './Components/LoanAndLineOfCredit';
import OtherLongTermLiability from './Components/OtherLongTerm';
import OtherShortTerm from './Components/OtherShortTerm';
import SalesTax from './Components/SalesTax';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Title } from '../AllAccount/GlobalStyling';

const LiabilitiesCC: React.FC = () => {
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

  const handleEdit = (entry: FormData) => {
    setEditEntry(entry);
    setOpen(true);
  };

  return (
    <>
      <CustomDialog
        open={open}
        onClose={handleClose}
        onSubmit={handleDialogSubmit}
        currentTable={currentTable}
        editEntry={editEntry} 
        fetchData={function (value: boolean): void {
          throw new Error('Function not implemented.');
        } }       
      />
      <Title>
        <IntlMessages id="chartOfAccountApp.liabilities" />
      </Title>
      <CreditCard
        data={creditCardsData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <LoanAndLineOfCredit
        data={loanAndLineOfCreditData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <ExpectedPayments
        data={expectedPaymentsData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <SalesTax
        data={salesTaxData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <DueforPayroll
        data={dueForPayrollData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <DueToYouBO
        data={dueToYouBOData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <CustomerPrePayments
        data={customerPrePaymentsData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <OtherShortTerm
        data={otherShortTermData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <OtherLongTermLiability
        data={otherLongTermLiabilityData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default LiabilitiesCC;
