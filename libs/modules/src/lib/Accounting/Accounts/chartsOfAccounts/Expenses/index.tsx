import React, { useState } from 'react';
import CustomDialog, { FormData } from '../Components/Dialog';
import OperatingExpenseTable from './Components/OperatingExpense';
import CostOfGoodsSoldTable from './Components/CostOfGoodsSold';
import PaymentFeeExpenseTable from './Components/PaymentFeeExpense';
import PayrollExpenseTable from './Components/PayrollExpense';
import UnCategorizedExpense from './Components/UncategorizedExpense';
import LossOnForeignExchange from './Components/LossOnForeignExchange';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Title } from '../AllAccount/GlobalStyling';

const Expenses: React.FC = () => {
  const [operatingExpenseData, setOperatingExpenseData] = useState<FormData[]>(
    []
  );
  const [costofGoodsSoldData, setCostOfGoodsSoldData] = useState<FormData[]>(
    []
  );
  const [paymentFeeExpenseData, setPaymentFeeExpenseData] = useState<
    FormData[]
  >([]);
  const [payrollExpenseData, setPayrollExpenseData] = useState<FormData[]>([]);
  const [open, setOpen] = useState(false);
  const [currentTable, setCurrentTable] = useState('');
  const [editEntry, setEditEntry] = useState<FormData | null>(null);

  const handleDialogSubmit = (data: FormData) => {
    if (editEntry) {
      if (data.AccountTypeId === 'operatingExpense') {
        setOperatingExpenseData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'costofGoodsSold') {
        setCostOfGoodsSoldData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'paymentFeeExpense') {
        setPaymentFeeExpenseData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'payrollExpense') {
        setPayrollExpenseData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      }
    } else {
      if (data.AccountTypeId === 'operatingExpense') {
        setOperatingExpenseData([...operatingExpenseData, data]);
      } else if (data.AccountTypeId === 'costofGoodsSold') {
        setCostOfGoodsSoldData([...costofGoodsSoldData, data]);
      } else if (data.AccountTypeId === 'paymentFeeExpense') {
        setPaymentFeeExpenseData([...paymentFeeExpenseData, data]);
      } else if (data.AccountTypeId === 'payrollExpense') {
        setPayrollExpenseData([...payrollExpenseData, data]);
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
        <IntlMessages id="chartOfAccountApp.expenses" />
      </Title>
      <OperatingExpenseTable
        data={operatingExpenseData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <CostOfGoodsSoldTable
        data={costofGoodsSoldData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <PaymentFeeExpenseTable
        data={paymentFeeExpenseData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <PayrollExpenseTable
        data={payrollExpenseData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <UnCategorizedExpense />
      <LossOnForeignExchange />
    </>
  );
};

export default Expenses;
