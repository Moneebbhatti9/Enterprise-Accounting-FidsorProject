import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormControl, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import IntlMessages from '@crema/helpers/IntlMessages';
import Button from '@mui/material/Button';
import Dropzone from '../../../chartsOfAccounts/AllAccount/ImportAccount/DropZone';
import Link from '@mui/material/Link';
import DataTable from 'react-data-table-component';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import DownloadFile from '../../../chartsOfAccounts/AllAccount/ImportAccount/downloadFile';
import TextField from '@mui/material/TextField';
import {
  CustomStepLabel,
  CustomGridContainer,
  CustomFormControl,
  CustomSelect,
  CustomTextField,
  CustomButton,
} from '../../../chartsOfAccounts/AllAccount/ImportAccount/ImportAccountStyling';
interface StepProps {
  completed?: boolean;
}
interface LabelProps {
  optional?: React.ReactNode;
}
const steps = ['Upload', 'Map Data', 'Import'];
const head = ['Name', 'Email', 'Direct Deposit'];
const customStepStyle = {
  fontSize: '20px',
};
export default function Steps() {
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
  const [selectedFieldDirectDeposit, setSelectedFieldDirectDeposit] =
    useState<string>('');

  const handleSelectChangeEmail = (event: SelectChangeEvent<string>) => {
    const selectedValueEmail = event.target.value;
    setSelectedFieldEmail(selectedValueEmail);
  };
  const handleSelectChangeName = (event: SelectChangeEvent<string>) => {
    const selectedValueName = event.target.value;
    setSelectedFieldName(selectedValueName);
  };
  const handleSelectChangeDirectDeposit = (
    event: SelectChangeEvent<string>
  ) => {
    const selectedValueDirectDeposit = event.target.value;
    setSelectedFieldDirectDeposit(selectedValueDirectDeposit);
  };

  const [editingCell, setEditingCell] = useState<{
    row: any;
    header: string;
  } | null>(null);
  const createCustomSelector =
    (
      header: string,
      selectedFieldEmail: string,
      selectedFieldName: string,
      selectedFieldDirectDeposit: string
    ) =>
    (row: any) => {
      switch (header) {
        case 'Name':
          return (
            <TextField
              style={{
                height: '10px',
                minWidth: '200px',
                minHeight: '30px',
                paddingLeft: '5px',
                paddingBottom: 'inherit',
              }}
              type="text"
              value={row[selectedFieldName]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldName, e.target.value)
              }
            />
          );

        case 'Email':
          return (
            <TextField
              style={{
                height: '10px',
                minWidth: '200px',
                minHeight: '30px',
                paddingLeft: '5px',
                paddingBottom: 'inherit',
              }}
              type="text"
              value={row[selectedFieldEmail]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldEmail, e.target.value)
              }
            />
          );
        case 'Direct Deposit':
          return (
            <TextField
              style={{
                height: '10px',
                minWidth: '200px',
                minHeight: '30px',
                paddingLeft: '5px',
                paddingBottom: 'inherit',
              }}
              type="text"
              value={row[selectedFieldDirectDeposit]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldDirectDeposit, e.target.value)
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

  const handleDownload = () => {
    // debugger
    // // Replace this with the actual path to your sample XLS file
    // const sampleFilePath = 'example.xls';
    // const anchor = document.createElement('a');
    // anchor.href = sampleFilePath;
    // anchor.download = 'example.xls'; // Optional: Set the default download file name
    // anchor.style.display = 'none';
    // // Append the anchor to the body
    // document.body.appendChild(anchor);
    // // Trigger the click event on the anchor
    // anchor.click();
    // // Remove the anchor from the body after the download starts
    // window.addEventListener('focus', () => {
    //   document.body.removeChild(anchor);
    // });
  };
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleFileSelected = () => {
    setIsFileSelected(true);
  };

  const handleFileRemoved = () => {
    setIsFileSelected(false);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        activeStep={activeStep}
        style={{
          paddingBottom: '40px',
          paddingTop: '40px',
          paddingRight: '0px',
          paddingLeft: '0px',
        }}
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
          <p style={{ paddingBottom: '40px' }}>
            <IntlMessages id="vendor.importVendorText" />
          </p>
          <Dropzone
            setHeaders={setHeaders}
            setList={setList}
            onFileSelected={handleFileSelected}
            onFileRemoved={handleFileRemoved}
          />
          <DownloadFile />
          {/* <Link
            style={{ paddingTop: '5px', paddingBottom: '30px' }}
            component="button"
            variant="body2"
            onClick={handleDownload}
          >
            Download Sample
          </Link> */}
        </>
      )}

      {activeStep === 1 && (
        <>
          <p style={{ paddingBottom: '30px' }}>
            <IntlMessages id="account.mapYourField" />
          </p>

          <Grid container style={{ marginBottom: '10px' }}>
            <Grid item xs={3}>
              <h3
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  paddingRight: '40px',
                }}
              >
                <IntlMessages id="account.enterpriseConnectField" />
              </h3>
            </Grid>
            <Grid item xs={3}>
              <h3>
                <IntlMessages id="account.yourField" />
              </h3>
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '10px' }}>
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
                <IntlMessages id="common.name" />
              </h5>
            </Grid>
            <Grid item xs={3}>
              <FormControl style={{ minWidth: '200px', height: '50px' }}>
                <Select
                  value={selectedFieldName}
                  onChange={handleSelectChangeName}
                >
                  <MenuItem value="">
                    <em>Select a Field</em>
                  </MenuItem>
                  {headers.map((header, index) => (
                    <MenuItem key={index} value={header}>
                      {header}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '10px' }}>
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
                <IntlMessages id="common.email" />
              </h5>
            </Grid>
            <Grid item xs={3}>
              <FormControl style={{ minWidth: '200px', height: '50px' }}>
                <Select
                  value={selectedFieldEmail}
                  onChange={handleSelectChangeEmail}
                >
                  <MenuItem value="">
                    <em>Select a Field</em>
                  </MenuItem>
                  {headers.map((header, index) => (
                    <MenuItem key={index} value={header}>
                      {header}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '10px' }}>
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
                <IntlMessages id="vendors.directDeposit" />
              </h5>
            </Grid>
            <Grid item xs={3}>
              <FormControl style={{ minWidth: '200px', height: '50px' }}>
                <Select
                  value={selectedFieldDirectDeposit}
                  onChange={handleSelectChangeDirectDeposit}
                >
                  <MenuItem value="">
                    <em>Select a Field</em>
                  </MenuItem>
                  {headers.map((header, index) => (
                    <MenuItem key={index} value={header}>
                      {header}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
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
                  selectedFieldEmail,
                  selectedFieldDirectDeposit
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
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <CustomButton
              color="primary"
              size="medium"
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </CustomButton>
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
              {activeStep === steps.length - 1 ? 'Import Vendors' : 'Next'}
            </CustomButton>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
