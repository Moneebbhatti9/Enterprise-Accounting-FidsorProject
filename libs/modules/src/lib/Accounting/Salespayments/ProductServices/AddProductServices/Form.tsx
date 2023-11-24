import IntlMessages from '@crema/helpers/IntlMessages';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import { makeStyles } from '@mui/styles';

import {
  CustomAsterik,
  CustomCustomerGridLabel,
  CustomCustomerName,
  StyledTextField,
  StyledTypography,
} from '../../Customer/AddCustomer/Components/AddCustomerStyled';

const SectionMainGrid = styled(Grid)`
  padding: 3%;
`;
const useStyles = makeStyles(() => ({
  gridLabel: {
    '@media (min-width: 600px)': {
      justifyContent: 'end',
    },
  },
  disabledText: {
    '@media (min-width: 600px)': {
      justifyContent: 'center',
    },
  },
  disabledField: {
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: '#f1f1f1',
    },
  },
  labelStyle: {
    fontSize: '12px',
  },
}));
const Form = () => {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [description, setDescription] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setNameError(false);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
    setDescriptionError(false);
  };
  return (
    <SectionMainGrid container>
      <Grid container spacing={2} style={{ marginBottom: '10px' }}>
        <CustomCustomerGridLabel
          item
          xs={12}
          sm={4}
          className={classes.gridLabel}
        >
          <StyledTypography variant="subtitle1">
            <IntlMessages id="common.name" />
            <CustomAsterik>*</CustomAsterik>
          </StyledTypography>
        </CustomCustomerGridLabel>
        <CustomCustomerName
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.gridLabel}
        >
          <StyledTextField
            value={name}
            onChange={handleNameChange}
            fullWidth
            error={nameError}
            size="small"
            helperText={nameError && 'Name is required'}
          />
        </CustomCustomerName>
      </Grid>
      <Grid container spacing={2}>
        <CustomCustomerGridLabel
          item
          xs={12}
          sm={4}
          className={classes.gridLabel}
        >
          <StyledTypography variant="subtitle1">
            <IntlMessages id="common.description" />
          </StyledTypography>
        </CustomCustomerGridLabel>
        <CustomCustomerName
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className={classes.gridLabel}
        >
          <StyledTextField
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            size="small"
          />
        </CustomCustomerName>
      </Grid>
    </SectionMainGrid>
  );
};

export default Form;
