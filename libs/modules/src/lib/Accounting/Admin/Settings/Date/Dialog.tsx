import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
interface ResuableDialogProps {
  open: boolean;
  onClose: () => void;
}
const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CustomHR = styled.hr`
  height: 1px;
  border: none;
  background-color: #ccc;
  width: 100%;
`;
interface Fields {
  vendorType: string;
  view: string;
  status: string;
}
const DialogTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 3%;
`;
const ResuableDialog: React.FC<ResuableDialogProps> = ({ open, onClose }) => {
  const handleCancel = () => {
    onClose();
  };
  const CustomAsterik = styled.span`
    color: red;
  `;
  const [formData, setFormData] = useState<Fields>({
    vendorType: '',
    view: '',
    status: '',
  });
  const handleVendorTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: Fields) => ({
      ...prevData,
      vendorType: value,
    }));
    // setCompanyNameError(false);
  };
  //   const handleViewChange = (event: SelectChangeEvent<string>) => {
  //     const value = event.target.value;
  //     setFormData((prevData: Fields) => ({
  //       ...prevData,
  //       view: value,
  //     }));
  //     // setCompanyNameError(false);
  //   };
  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setFormData((prevData: Fields) => ({
      ...prevData,
      status: value,
    }));
    // setCompanyNameError(false);
  };
  const [fieldValidation, setFieldValidation] = useState({
    vendorType: true,
    view: true,
    status: true,
  });
  const handleViewChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setFormData((prevData: Fields) => ({
      ...prevData,
      view: value,
    }));
  };
  useEffect(() => {
    // Load the selected currency type from local storage
    const selectedCurrencyType = localStorage.getItem('selectedCurrencyType');
    if (selectedCurrencyType) {
      // Set the selected currency type in the state if it exists in local storage
      setFormData((prevData: Fields) => ({
        ...prevData,
        view: selectedCurrencyType,
      }));
    }
  }, []);
  const handleSave = () => {
    // Save the selected value to local storage
    localStorage.setItem('selectedCurrencyType', formData.view);

    // Close the dialog
    onClose();
  };
  return (
    <Box style={{ width: '50%' }}>
      <Dialog open={open} onClose={handleCancel}>
        <CustomTitleBox>
          <DialogTitle>Add Date Type</DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCancel}
            sx={{ mr: 6 }}
          >
            <CloseIcon />
          </IconButton>
        </CustomTitleBox>
        <CustomHR />
        <Box
          style={{ padding: '2%', paddingRight: '10%', background: '#f4f7fe' }}
        >
          <DialogContent>
            <Grid
              container
              textAlign={{ xs: 'left', sm: 'right' }}
              alignItems={'center'}
              columnSpacing={{ xs: 2, sm: 2, md: 3 }}
              rowSpacing={2}
            >
              {/* <Grid item xs={12} sm={4}>
              <Typography
               variant="subtitle1"
               marginRight={{ xs: '0%', sm: '5%' }}
               marginLeft={{ xs: '0%', sm: '5%' }}
               fontSize="12px"
              >
                Vendor Type
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid> */}
              {/* <Grid item xs={12} sm={8}>
              <TextField
              style={{backgroundColor:'white'}}
              placeholder='Enter Vendor Type'
                variant="outlined"
                fullWidth
                size="small"
                value={formData.vendorType}
                onChange={handleVendorTypeChange}
                error={!fieldValidation.vendorType}
              />
            </Grid> */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Date Type
                  <CustomAsterik>*</CustomAsterik>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} textAlign={'left'}>
                <FormControl fullWidth style={{ backgroundColor: 'white' }}>
                  <Select
                    value={formData.view || 'MM/dd/yyyy'}
                    onChange={handleViewChange}
                    error={!fieldValidation.view}
                  >
                    <MenuItem value={'MM/dd/yyyy'}>MM/DD/YYYY</MenuItem>
                    <MenuItem value={'dd/MM/yyyy'}>DD/MM/YYYY</MenuItem>
                    <MenuItem value={'yyyy-MM-dd'}>YYYY-MM-DD</MenuItem>
                    <MenuItem value={'MM-yyyy'}>MM-YYYY</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
        </Box>
        <CustomHR />
        <DialogActions sx={{ padding: '2%' }}>
          <Button
            onClick={handleCancel}
            color="primary"
            variant="outlined"
            size="medium"
            sx={{ borderRadius: '8px' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            size="medium"
            sx={{ minWidth: '78px', borderRadius: '8px' }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResuableDialog;
