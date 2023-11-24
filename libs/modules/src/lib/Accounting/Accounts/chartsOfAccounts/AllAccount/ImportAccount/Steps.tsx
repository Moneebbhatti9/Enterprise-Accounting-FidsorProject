import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormControl, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import IntlMessages from '@crema/helpers/IntlMessages';
import Button from '@mui/material/Button';
import Dropzone from './DropZone';
import Link from '@mui/material/Link';
import DataTable from 'react-data-table-component';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import DownloadFile from './downloadFile';
import TextField from '@mui/material/TextField';
import {
  CustomStepLabel,
  CustomGridContainer,
  StyledHeading3,
  CustomFormControl,
  LabelAccount,
  LabelTopRow,
  CustomSelect,
  StyledBoxFlex,
  StyledGrid,
  CustomLabel,
  LabelMap,
  CustomTextField,
  StyledBox,
  StyledFlexBox,
  StyledFormControl,
  StyledParagraph,
  StyledStepper,
  CustomButton,
  StyledTextField,
} from './ImportAccountStyling';
interface StepProps {
  completed?: boolean;
}
interface LabelProps {
  optional?: React.ReactNode;
}
const steps = ['Upload', 'Map Data', 'Import'];
const head = [
  'Account Type',
  'Account Name',
  'Account Id',
  'Account Currency',
  'Description',
];
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

  const [selectedFieldType, setSelectedFieldType] = useState<string>('');
  const [selectedFieldName, setSelectedFieldName] = useState<string>('');
  const [selectedFieldId, setSelectedFieldId] = useState<string>('');
  const [selectedFieldCurrency, setSelectedFieldCurrency] =
    useState<string>('');
  const [selectedFieldDescription, setSelectedFieldDescription] = useState<
    any | undefined
  >(undefined);
  const handleSelectChangeType = (event: SelectChangeEvent<string>) => {
    const selectedValueType = event.target.value;
    setSelectedFieldType(selectedValueType);
  };
  const handleSelectChangeName = (event: SelectChangeEvent<string>) => {
    const selectedValueName = event.target.value;
    setSelectedFieldName(selectedValueName);
  };
  const handleSelectChangeId = (event: SelectChangeEvent<string>) => {
    const selectedValueId = event.target.value;
    setSelectedFieldId(selectedValueId);
  };
  const handleSelectChangeCurrency = (event: SelectChangeEvent<string>) => {
    const selectedValueCurrency = event.target.value;
    setSelectedFieldCurrency(selectedValueCurrency);
  };
  const handleSelectChangeDescription = (event: SelectChangeEvent<string>) => {
    const selectedValueDescription = event.target.value;
    setSelectedFieldDescription(selectedValueDescription);
  };
  const [editingCell, setEditingCell] = useState<{
    row: any;
    header: string;
  } | null>(null);
  const createCustomSelector =
    (
      header: string,
      selectedFieldType: string,
      selectedFieldName: string,
      selectedFieldId: string,
      selectedFieldCurrency: string,
      selectedFieldDescription: string
    ) =>
    (row: any) => {
      switch (header) {
        case 'Account Type':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldType]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldType, e.target.value)
              }
            />
          );

        case 'Account Name':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldName]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldName, e.target.value)
              }
            />
          );
        case 'Account Id':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldId]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldId, e.target.value)
              }
            />
          );
        case 'Account Currency':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldCurrency]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldCurrency, e.target.value)
              }
            />
          );
        case 'Description':
          return (
            <CustomTextField
              type="text"
              value={row[selectedFieldDescription]}
              onChange={(e) =>
                handleCellEdit(row, selectedFieldDescription, e.target.value)
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
  return (
    <StyledBox>
      <StyledStepper activeStep={activeStep}>
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
      </StyledStepper>
      {activeStep === 0 && (
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
          <LabelMap>
            <IntlMessages id="account.mapYourField" />
          </LabelMap>

          <CustomGridContainer container>
            <Grid item xs={3}>
              <StyledHeading3>
                <IntlMessages id="account.enterpriseConnectField" />
              </StyledHeading3>
            </Grid>
            <Grid item xs={3}>
              <h3>
                <IntlMessages id="account.yourField" />
              </h3>
            </Grid>
          </CustomGridContainer>
          <CustomGridContainer container>
            <StyledGrid item xs={3}>
              <h5>
                <IntlMessages id="account.accountType" />
              </h5>
            </StyledGrid>
            <Grid item xs={3}>
              <StyledFormControl>
                <Select
                  value={selectedFieldType}
                  onChange={handleSelectChangeType}
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
              </StyledFormControl>
            </Grid>
          </CustomGridContainer>
          <CustomGridContainer container>
            <StyledGrid item xs={3}>
              <h5>
                <IntlMessages id="account.accountName" />
              </h5>
            </StyledGrid>
            <Grid item xs={3}>
              <StyledFormControl>
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
              </StyledFormControl>
            </Grid>
          </CustomGridContainer>
          <CustomGridContainer container>
            <StyledGrid item xs={3}>
              <h5>
                <IntlMessages id="account.accopuntId" />
              </h5>
            </StyledGrid>
            <Grid item xs={3}>
              <StyledFormControl>
                <Select value={selectedFieldId} onChange={handleSelectChangeId}>
                  <MenuItem value="">
                    <em>Select a Field</em>
                  </MenuItem>
                  {headers.map((header, index) => (
                    <MenuItem key={index} value={header}>
                      {header}
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
            </Grid>
          </CustomGridContainer>
          <CustomGridContainer container>
            <StyledGrid item xs={3}>
              <h5>
                <IntlMessages id="account.accountCurrency" />
              </h5>
            </StyledGrid>
            <Grid item xs={3}>
              <StyledFormControl>
                <Select
                  value={selectedFieldCurrency}
                  onChange={handleSelectChangeCurrency}
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
              </StyledFormControl>
            </Grid>
          </CustomGridContainer>
          <CustomGridContainer container>
            <StyledGrid item xs={3}>
              <h5>
                <IntlMessages id="account.accountDescription" />
              </h5>
            </StyledGrid>
            <Grid item xs={3}>
              <StyledFormControl>
                <Select
                  value={selectedFieldDescription}
                  onChange={handleSelectChangeDescription}
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
              </StyledFormControl>
            </Grid>
          </CustomGridContainer>
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
                  selectedFieldType,
                  selectedFieldName,
                  selectedFieldId,
                  selectedFieldCurrency,
                  selectedFieldDescription
                ),
              }))}
              data={list}
            />
          ) : (
            <StyledParagraph>There are no records to display.</StyledParagraph>
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
          <StyledFlexBox>
            <CustomButton
              color="primary"
              size="medium"
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </CustomButton>
            <StyledBoxFlex />

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
              {activeStep === steps.length - 1 ? 'Import Accounts' : 'Next'}
            </CustomButton>
          </StyledFlexBox>
        </React.Fragment>
      )}
    </StyledBox>
  );
}
