import React, { useState } from 'react';
import CustomDialog, { FormData } from '../Components/Dialog';
import Income from './Components/Income';
import Discount from './Components/Discount';
import OtherIncome from './Components/OtherIncome';
import UnCategorizedIncome from './Components/UnCategorizedIncome';
import GainOnForeignExchange from './Components/GainOnForeignExchange';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Title } from '../AllAccount/GlobalStyling';

const IncomeDialog: React.FC = () => {
  const [incomeData, setIncomeData] = useState<FormData[]>([]);
  const [discountData, setDiscountData] = useState<FormData[]>([]);
  const [otherIncomeData, setOtherIncomeData] = useState<FormData[]>([]);
  const [open, setOpen] = useState(false);
  const [currentTable, setCurrentTable] = useState('');
  const [editEntry, setEditEntry] = useState<FormData | null>(null);

  const handleDialogSubmit = (data: FormData) => {
    if (editEntry) {
      if (data.AccountTypeId === 'income') {
        setIncomeData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'discount') {
        setDiscountData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'otherIncome') {
        setOtherIncomeData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      }
    } else {
      if (data.AccountTypeId === 'income') {
        setIncomeData([...incomeData, data]);
      } else if (data.AccountTypeId === 'discount') {
        setDiscountData([...discountData, data]);
      } else if (data.AccountTypeId === 'otherIncome') {
        setOtherIncomeData([...otherIncomeData, data]);
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
        <IntlMessages id="chartOfAccountApp.income" />
      </Title>
      <Income
        data={incomeData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <Discount
        data={discountData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <OtherIncome
        data={otherIncomeData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <UnCategorizedIncome />
      <GainOnForeignExchange />
    </>
  );
};

export default IncomeDialog;
