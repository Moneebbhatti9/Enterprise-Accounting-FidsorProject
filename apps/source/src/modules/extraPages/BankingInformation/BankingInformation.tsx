import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { Body } from '../../../../../../libs/modules/src/lib/Accounting/Global/Styling';
import { useNavigate } from 'react-router-dom';
import SimpleHeader from '../../../../../../libs/modules/src/lib/Accounting/Global/Components/SimpleHeader';
const validationSchema = Yup.object().shape({
  accountHolder: Yup.string().required('Account holder name is required'),
  accountNumber: Yup.string()
    .required('Account number is required')
    .matches(/^\d{6,10}$/, 'Account number must be 6-10 digits'),
  bankName: Yup.string().required('Bank name is required'),
  ifscCode: Yup.string().required('IBAN code is required'),
  // .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC code'),
});

const BankDetailForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    accountHolder: '',
    accountNumber: '',
    bankName: '',
    ifscCode: '',
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    navigate('/settings/businesses/add');
  };

  return (
    <Body
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
      }}
    >
      <SimpleHeader title="Bank Information" />
      <Container>
        <Box textAlign="center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Field
                    name="accountHolder"
                    render={({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="Account Holder Name"
                        variant="outlined"
                      />
                    )}
                  />
                  <ErrorMessage name="accountHolder">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="accountNumber"
                    render={({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="Account Number"
                        variant="outlined"
                      />
                    )}
                  />
                  <ErrorMessage name="accountNumber">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="bankName"
                    render={({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="Bank Name"
                        variant="outlined"
                      />
                    )}
                  />
                  <ErrorMessage name="bankName">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="ifscCode"
                    render={({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="IBAN Number"
                        variant="outlined"
                      />
                    )}
                  />
                  <ErrorMessage name="ifscCode">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>
              </Grid>
              <Box textAlign="center">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Container>
    </Body>
  );
};

export default BankDetailForm;
