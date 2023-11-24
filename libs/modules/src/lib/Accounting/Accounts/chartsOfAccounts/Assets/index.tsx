import React, { useState } from 'react';
import CustomDialog, { FormData } from '../Components/Dialog';
import CashAndBank from './Components/CashandBank';
import MoneyInTransit from './Components/MoneyinTransit';
import ExpectedPaymentsFromCustomers from './Components/ExpectedPaymentsFromCustomers';
import PropertyPlantEquipment from './Components/PropertyPlantEquipment';
import Inventory from './Components/Inventory';
import DepreciationAndAmortization from './Components/DepreciationAndAmortization';
import OtherLongTermLiability from './Components/OtherLongTerm';
import OtherShortTerm from './Components/OtherShortTerm';
import VendorPrepaymentAndVendorCredits from './Components/VendorPPAndVC';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Title } from '../AllAccount/GlobalStyling';

const Assets: React.FC = () => {
  const [cashAndBankData, setCashAndBankData] = useState<FormData[]>([]);
  const [moneyInTransitData, setMoneyInTransitData] = useState<FormData[]>([]);
  const [
    expectedPaymentsFromCustomersData,
    setExpectedPaymentsFromCustomersData,
  ] = useState<FormData[]>([]);
  const [propertyPlantEquipmentData, setPropertyPlantEquipmentData] = useState<
    FormData[]
  >([]);
  const [inventoryData, setInventoryData] = useState<FormData[]>([]);
  const [depreciationAndAmortizationData, setDepreciationAndAmortizationData] =
    useState<FormData[]>([]);
  const [otherLongTermLiabilityData, setOtherLongTermLiabilityData] = useState<
    FormData[]
  >([]);
  const [otherShortTermData, setOtherShortTermData] = useState<FormData[]>([]);
  const [
    vendorPrepaymentAndVendorCreditsData,
    setVendorPrepaymentAndVendorCreditsData,
  ] = useState<FormData[]>([]);

  const [open, setOpen] = useState(false);
  const [currentTable, setCurrentTable] = useState('');
  const [editEntry, setEditEntry] = useState<FormData | null>(null); // New state for handling editing

  const handleDialogSubmit = (data: FormData) => {
    if (editEntry) {
      // If there's an editEntry, update the existing entry in the data array
      if (data.AccountTypeId === 'cashAndBank') {
        setCashAndBankData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'moneyInTransit') {
        setMoneyInTransitData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'expectedPaymentsFromCustomers') {
        setExpectedPaymentsFromCustomersData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'dueToYou&OtherBO') {
        setPropertyPlantEquipmentData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'inventory') {
        setInventoryData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      } else if (data.AccountTypeId === 'depreciationAndAmortization') {
        setDepreciationAndAmortizationData((prevData) =>
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
      } else if (data.AccountTypeId === 'vendorPrepaymentAndVendorCredits') {
        setVendorPrepaymentAndVendorCreditsData((prevData) =>
          prevData.map((entry) =>
            entry.AccountCode === editEntry.AccountCode ? data : entry
          )
        );
      }
    } else {
      if (data.AccountTypeId === 'cashAndBank') {
        setCashAndBankData([...cashAndBankData, data]);
      } else if (data.AccountTypeId === 'moneyInTransit') {
        setMoneyInTransitData([...moneyInTransitData, data]);
      } else if (data.AccountTypeId === 'expectedPaymentsFromCustomers') {
        setExpectedPaymentsFromCustomersData([
          ...expectedPaymentsFromCustomersData,
          data,
        ]);
      } else if (data.AccountTypeId === 'dueToYou&OtherBO') {
        setPropertyPlantEquipmentData([...propertyPlantEquipmentData, data]);
      } else if (data.AccountTypeId === 'inventory') {
        setInventoryData([...inventoryData, data]);
      } else if (data.AccountTypeId === 'depreciationAndAmortization') {
        setDepreciationAndAmortizationData([
          ...depreciationAndAmortizationData,
          data,
        ]);
      } else if (data.AccountTypeId === 'otherLongTermLiability') {
        setOtherLongTermLiabilityData([...otherLongTermLiabilityData, data]);
      } else if (data.AccountTypeId === 'otherShortTermLiability') {
        setOtherShortTermData([...otherShortTermData, data]);
      } else if (data.AccountTypeId === 'vendorPrepaymentAndVendorCredits') {
        setVendorPrepaymentAndVendorCreditsData([
          ...vendorPrepaymentAndVendorCreditsData,
          data,
        ]);
      }
    }

    setOpen(false);
    setEditEntry(null); // Reset editEntry state after submitting
  };

  const handleOpen = (table: string) => {
    setCurrentTable(table);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditEntry(null); // Reset editEntry state after closing the dialog
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
        <IntlMessages id="chartOfAccountApp.assets" />
      </Title>
      <CashAndBank
        data={cashAndBankData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <MoneyInTransit
        data={moneyInTransitData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />

      <ExpectedPaymentsFromCustomers
        data={expectedPaymentsFromCustomersData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <Inventory
        data={inventoryData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <PropertyPlantEquipment
        data={propertyPlantEquipmentData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />

      <DepreciationAndAmortization
        data={depreciationAndAmortizationData}
        handleOpen={handleOpen}
        handleEdit={handleEdit}
      />
      <VendorPrepaymentAndVendorCredits
        data={vendorPrepaymentAndVendorCreditsData}
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

export default Assets;
