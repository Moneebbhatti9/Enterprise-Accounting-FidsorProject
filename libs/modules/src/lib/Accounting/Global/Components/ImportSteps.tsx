import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormControl, MenuItem, Select } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import Dropzone from '../DropZone';
import DataTable from 'react-data-table-component';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import DownloadFile from './DownloadFile';
import { CustomTextField } from '../Styling';
import {
  StyledBox,
  CustomButton,
  CustomLabel,
  LabelTopRow,
  LabelAccount,
} from '../Styling';
import { customStepStyle } from '../Styling';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
interface StepProps {
  completed?: boolean;
}
interface LabelProps {
  optional?: React.ReactNode;
}
const steps = ['Upload', 'Map Data', 'Import'];

interface StepsProps {
  head: string[];
  link: string;
  importCustomer: string;
  mainHeading: string;
}
export default function Steps({
  head,
  link,
  importCustomer,
  mainHeading,
}: StepsProps) {
  const [headers, setHeaders] = useState<string[]>([]);
  const [list, setList] = useState<string[]>([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [selectedFieldEmail, setSelectedFieldEmail] = useState<string>('');
  const [selectedFieldName, setSelectedFieldName] = useState<string>('');
  const [selectedFieldPhone, setSelectedFieldPhone] = useState<string>('');
  const [selectedFieldType, setSelectedFieldType] = useState<string>('');
  const [selectedFieldDetailType, setSelectedFieldDetailType] =
    useState<string>('');
  const [selectedFieldBankBalance, setSelectedFieldBankBalance] =
    useState<string>('');
  const [selectedFieldDirectDeposit, setSelectedFieldDirectDeposit] =
    useState<string>('');
  const [selectedFieldTax, setSelectedFieldTax] = useState<string>('');
  const [selectedFieldSaveCards, setSelectedFieldSaveCards] =
    useState<string>('');
  const [selectedFieldBalance, setSelectedFieldBalance] = useState<string>('');

  const [selectedFieldAccountType, setSelectedFieldAccountType] =
    useState<string>('');
  const [selectedFieldbalance, setSelectedFieldbalance] = useState<string>('');
  const CustomDivider = styled(Divider)`
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 0px;
    margin-right: 0px;
  `;
  const createCustomSelector =
    (
      header: string,
      selectedFieldName: string,
      selectedFieldAccountType: string,
      selectedFieldEmail: string,
      selectedFieldDirectDeposit: string,
      selectedFieldType: string,
      selectedFieldTax: string,
      selectedFieldPhone: string,
      selectedFieldSaveCards: string,
      selectedFieldBalance: string,
      selectedFieldBankBalance: string,
      selectedFieldDetailType: string,
      selectedFieldbalance: string
    ) =>
    (row: any) => {
      switch (header) {
        case 'Name':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldName]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldName, e.target.value)
              }
            />
          );
        case 'Account Type':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldAccountType]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldAccountType, e.target.value)
              }
            />
          );
        case 'Email':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldEmail]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldEmail, e.target.value)
              }
            />
          );
        case 'Type':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldType]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldType, e.target.value)
              }
            />
          );
        case 'TAX/VAT':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldTax]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldTax, e.target.value)
              }
            />
          );
        case 'Phone':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldPhone]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldPhone, e.target.value)
              }
            />
          );
        case 'Currency Type':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldSaveCards]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldSaveCards, e.target.value)
              }
            />
          );
        case 'Direct Deposit':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldDirectDeposit]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldDirectDeposit, e.target.value)
              }
            />
          );
        case 'Balance | Overdue':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldBalance]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldBalance, e.target.value)
              }
            />
          );

        case 'Detailed Type':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldDetailType]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldDetailType, e.target.value)
              }
            />
          );
        case 'Balance':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldbalance]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldbalance, e.target.value)
              }
            />
          );
        case 'Bank Balance':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldBankBalance]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldBankBalance, e.target.value)
              }
            />
          );
        default:
          return row[header];
      }
    };

  const handleCellEdit = (row: any, header: string, value: string) => {
    const rowIndex = list.findIndex((r) => r === row);

    const updatedRow = { ...row, [header]: value };

    const updatedList = [...list];
    updatedList[rowIndex] = updatedRow;

    setList(updatedList);
  };

  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleFileSelected = () => {
    setIsFileSelected(true);
  };

  const handleFileRemoved = () => {
    setIsFileSelected(false);
  };
  // const handleCancel = () => {
  //   // Add code here to perform the cancel action
  //   console.log('Cancel button clicked');
  //   // You can add additional logic or redirect to another page if needed
  // };
  const getSelectedFieldValue = (header: string) => {
    switch (header) {
      case 'Name':
        return selectedFieldName;
      case 'Account Type':
        return selectedFieldAccountType;
      case 'Email':
        return selectedFieldEmail;
      case 'Phone':
        return selectedFieldPhone;
      case 'Currency Type':
        return selectedFieldSaveCards;
      case 'Type':
        return selectedFieldType;
      case 'TAX/VAT':
        return selectedFieldTax;
      case 'Balance | Overdue':
        return selectedFieldBalance;
      case 'Direct Deposit':
        return selectedFieldDirectDeposit;

      case 'Detailed Type':
        return selectedFieldDetailType;
      case 'Balance':
        return selectedFieldbalance;
      case 'Bank Balance':
        return selectedFieldBankBalance;

      default:
        return '';
    }
  };

  const handleSelectChange = (header: string, value: string) => {
    switch (header) {
      case 'Name':
        setSelectedFieldName(value);
        break;
      case 'Account Type':
        setSelectedFieldAccountType(value);
        break;
      case 'Email':
        setSelectedFieldEmail(value);
        break;
      case 'Phone':
        setSelectedFieldPhone(value);
        break;
      case 'Currency Type':
        setSelectedFieldSaveCards(value);
        break;
      case 'Type':
        setSelectedFieldType(value);
        break;
      case 'TAX/VAT':
        setSelectedFieldTax(value);
        break;
      case 'Direct Deposit':
        setSelectedFieldDirectDeposit(value);
        break;
      case 'Balance | Overdue':
        setSelectedFieldBalance(value);
        break;

      case 'Detailed Type':
        setSelectedFieldDetailType(value);
        break;
      case 'Balance':
        setSelectedFieldbalance(value);
        break;
      case 'Bank Balance':
        setSelectedFieldBankBalance(value);
        break;
      default:
        break;
    }
  };

  return (
    <StyledBox>
      <Stepper
        activeStep={activeStep}
        style={{ paddingBottom: '40px', paddingTop: '40px' }}
      >
        {steps.map((label, index) => {
          const stepProps: StepProps = {};
          const labelProps: LabelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} style={customStepStyle}>
              <StepLabel {...labelProps} style={customStepStyle}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && (
        <>
          {importCustomer === 'Import Account' ? (
            <>
              <CustomLabel>
                <IntlMessages id="account.firsttime" />
              </CustomLabel>
              <LabelAccount>
                <IntlMessages id="account.allyour" />
              </LabelAccount>
              <LabelTopRow>
                <IntlMessages id="account.thetoprow" />
              </LabelTopRow>
            </>
          ) : (
            <p style={{ paddingBottom: '5px', paddingTop: '5px' }}>
              {mainHeading}
            </p>
          )}

          <Dropzone
            setHeaders={setHeaders}
            setList={setList}
            onFileSelected={handleFileSelected}
            onFileRemoved={handleFileRemoved}
          />
          <DownloadFile />
        </>
      )}

      {activeStep === 1 && (
        <>
          <p style={{ paddingBottom: '30px', paddingLeft: '20px' }}>
            <IntlMessages id="account.mapYourField" />
          </p>
          {head.map((header, index) => (
            <Grid container key={index} style={{ marginBottom: '10px' }}>
              <Grid
                item
                xs={3}
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  paddingRight: '40px',
                }}
              >
                <h5>
                  <IntlMessages id={`common.${header.toLowerCase()}`} />
                </h5>
              </Grid>
              <Grid item xs={3}>
                <FormControl
                  style={{ minWidth: '200px', minHeight: '0.4375em' }}
                >
                  <Select
                    value={getSelectedFieldValue(header)}
                    onChange={(e) => handleSelectChange(header, e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Select a Field</em>
                    </MenuItem>
                    {headers.map((item, itemIndex) => (
                      <MenuItem key={itemIndex} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          ))}
        </>
      )}
      {activeStep === 2 && (
        <>
          <p>
            <IntlMessages id="account.ready" />
          </p>
          {list.length > 0 ? (
            <DataTable
              pagination
              highlightOnHover
              columns={head.map((header) => ({
                name: header,

                selector: createCustomSelector(
                  header,
                  selectedFieldName,
                  selectedFieldAccountType,
                  selectedFieldEmail,
                  selectedFieldType,
                  selectedFieldTax,
                  selectedFieldPhone,
                  selectedFieldDirectDeposit,
                  selectedFieldSaveCards,
                  selectedFieldBalance,
                  selectedFieldDetailType,
                  selectedFieldbalance,
                  selectedFieldBankBalance
                ),
              }))}
              data={list}
            />
          ) : (
            <p style={{ padding: 20 }}>There are no records to display.</p>
          )}
        </>
      )}

      {activeStep === steps.length ? (
        <React.Fragment>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            All records imported <strong>successfully!</strong>
          </Alert>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CustomDivider style={{ paddingTop: '40px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {activeStep === 0 ? (
              <Link to={link}>
                <CustomButton color="primary" size="medium" variant="outlined">
                  Cancel
                </CustomButton>
              </Link>
            ) : (
              <CustomButton
                color="primary"
                size="medium"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </CustomButton>
            )}
            <Box sx={{ flex: '1 1 auto' }} />

            <CustomButton
              color="primary"
              size="medium"
              variant="contained"
              onClick={handleNext}
              disabled={
                activeStep === steps.length - 1
                  ? false
                  : activeStep === 0
                  ? !isFileSelected
                  : list.length === 0
              }
            >
              {activeStep === steps.length - 1 ? importCustomer : 'Next'}
            </CustomButton>
          </Box>
        </React.Fragment>
      )}
    </StyledBox>
  );
}
