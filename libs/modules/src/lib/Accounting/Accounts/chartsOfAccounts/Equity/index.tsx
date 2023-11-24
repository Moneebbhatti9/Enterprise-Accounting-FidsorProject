import React, { useState } from 'react';
import CustomDialog, { FormData } from '../Components/Dialog';
import RetainedEarnings from './Components/RetainedEarnings';
import BusinessOwnerCD from './Components/BusinessOwner';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Title } from '../AllAccount/GlobalStyling';

const Equity: React.FC = () => {
  const [retainedEarningsData, setRetainedEarningsData] = useState<FormData[]>(
    []
  );
  const [businessOwnerCDData, setBusinessOwnerCDData] = useState<FormData[]>(
    []
  );

  const [open, setOpen] = useState(false);
  const [currentTable, setCurrentTable] = useState('');
  const [editEntry, setEditEntry] = useState<FormData | null>(null);

  const handleDialogSubmit = (data: FormData) => {
    if (editEntry) {
      if (data.AccountTypeId === 'retainedEarnings') {
        setRetainedEarningsData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'businessOwnerCD') {
        setBusinessOwnerCDData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      }
    } else {
      if (data.AccountTypeId === 'retainedEarnings') {
        setRetainedEarningsData([...retainedEarningsData, data]);
      } else if (data.AccountTypeId === 'businessOwnerCD') {
        setBusinessOwnerCDData([...businessOwnerCDData, data]);
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
        <IntlMessages id="chartOfAccountApp.equity" />
      </Title>
      <BusinessOwnerCD
        data={businessOwnerCDData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <RetainedEarnings
        data={retainedEarningsData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default Equity;
