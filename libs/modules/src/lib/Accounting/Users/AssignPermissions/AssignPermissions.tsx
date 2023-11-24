import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import {
  Checkbox,
  Button,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
} from '@mui/material';
import SimpleHeader from '../../Global/Components/SimpleHeader';
import { Body } from '../../Global/Styling';
import { Role } from '../../../../../interfaces/Role/Role';
import { getAllRoles } from 'libs/services/RolesService/RolesService';

interface FormValues {
  manager: string;
  permissions: {
    customers: {
      create: boolean;
      view: boolean;
      edit: boolean;
      delete: boolean;
    };
    vendors: {
      create: boolean;
      view: boolean;
      edit: boolean;
      delete: boolean;
    };
    users: {
      create: boolean;
      view: boolean;
      edit: boolean;
      delete: boolean;
    };
  };
}

const AssignPermissions = () => {
  const [businessData, setBusinessData] = useState<Role[]>([]);
  const initialValues: FormValues = {
    manager: '',
    permissions: {
      customers: { create: false, view: false, edit: false, delete: false },
      vendors: { create: false, view: false, edit: false, delete: false },
      users: { create: false, view: false, edit: false, delete: false },
    },
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Form values submitted:', values);
    // Your other logic or API calls can go here
  };
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await getAllRoles();
        setBusinessData(data);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };
    fetchRoles();
  }, []);
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });
  return (
    <Body>
      <SimpleHeader title="Assign Permissions" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <label htmlFor="manager">Role:</label>
            <Grid item xs={4}>
              <Field as={Select} type="number" id="role" name="role" fullWidth>
                {/* <Field type="number" id="role" name="role" fullWidth> */}
                {businessData.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
                {/* </Field> */}
              </Field>
            </Grid>
          </div>
          {/* <Grid item xs={6}></Grid>
          <Grid item xs={12} sm={4} md={2} textAlign={'right'}>
            <Typography variant="subtitle1">Role</Typography>
          </Grid>
          <Grid item xs={4}>
            <Field type="number" id="role" name="role" fullWidth>
              {businessData.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Field>
          </Grid>
          <Grid item xs={6}></Grid> */}
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                Edit
              </Grid>
              <Grid item xs={2}>
                Update
              </Grid>
              <Grid item xs={2}>
                Delete
              </Grid>
              <Grid item xs={2}>
                View
              </Grid>
              <Grid item xs={2}>
                Create
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                Customer
              </Grid>

              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                Vendor
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                Users
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
              <Grid item xs={2}>
                <Checkbox />
              </Grid>
            </Grid>
          </Box>
          {/* <Grid container spacing={0}> */}
          {/* <Grid item xs={4}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <FormControl style={{ flexDirection: 'row' }}>
                <Grid item xs={2}>
                  <label style={{ paddingTop: '10px' }}>Customers:</label>
                </Grid>
                <FormGroup style={{ flexDirection: 'row' }}>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={<Checkbox name="permissions.customers.create" />}
                      label="Create"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={<Checkbox name="permissions.customers.view" />}
                      label="View"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={<Checkbox name="permissions.customers.edit" />}
                      label="Edit"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={<Checkbox name="permissions.customers.delete" />}
                      label="Delete"
                    />
                  </Grid>
                </FormGroup>
              </FormControl>
            </Grid> */}
          {/* </Grid> */}
          {/* </Grid> */}

          {/* <Grid item xs={4}>
                <FormControl>
                  <label>Vendors:</label>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox name="permissions.vendors.create" />}
                      label="Create"
                    />
                    <FormControlLabel
                      control={<Checkbox name="permissions.vendors.view" />}
                      label="View"
                    />
                    <FormControlLabel
                      control={<Checkbox name="permissions.vendors.edit" />}
                      label="Edit"
                    />
                    <FormControlLabel
                      control={<Checkbox name="permissions.vendors.delete" />}
                      label="Delete"
                    />
                  </FormGroup>
                </FormControl>
              </Grid> */}

          {/* <Grid item xs={4}>
                <FormControl>
                  <label>Users:</label>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox name="permissions.customers.create" />}
                      label="Create"
                    />
                    <FormControlLabel
                      control={<Checkbox name="permissions.users.view" />}
                      label="View"
                    />
                    <FormControlLabel
                      control={<Checkbox name="permissions.users.edit" />}
                      label="Edit"
                    />
                    <FormControlLabel
                      control={<Checkbox name="permissions.users.delete" />}
                      label="Delete"
                    />
                  </FormGroup>
                </FormControl>
              </Grid> */}
          {/* </Grid> */}

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </Body>
  );
};

export default AssignPermissions;
