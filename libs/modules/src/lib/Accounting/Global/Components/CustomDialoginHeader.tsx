import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { DialogTitle, CustomTitleBox, CustomHR } from '../Styling';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Input, StyledSelect } from './CustomDialoginHeaderStyling';
// import {
//   FormBuilder,
//   FieldControl,
//   FieldGroup,
//   AbstractControl,
// } from 'react-reactive-form';
import { Grid } from '@mui/material';
interface DeliveryInstructionsModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
  titleBackground: string;
  footerBg: string;
  yesColor: string;
  id: string;
  url: string;
  name: string;
}
const useStyles = makeStyles((theme) => ({
  smallLabel: {
    '@media (max-width: 399px)': {
      fontSize: '8px',
    },
    '@media (min-width: 400px) and (max-width: 510px)': {
      fontSize: '10px',
    },
  },
  closeButton: {
    '@media (max-width: 510px)': {
      marginRight: '10px',
    },
  },
}));
const Delete: React.FC<DeliveryInstructionsModalProps> = ({
  open,
  onClose,
  title,
  text,
  titleBackground,
  footerBg,
  yesColor,
  id,
  url,
  name,
}) => {
  const classes = useStyles();
  const handleCancel = () => {
    onClose();
  };
  // const [myForm] = useState(() =>
  //   FormBuilder.group({
  //     vendor_type: '',
  //     view: '',
  //     status: '',
  //   })
  // );
  // const handleSubmit = () => {
  //   if (myForm.value.vendor_type && myForm.value.view && myForm.value.status) {
  //     onClose();
  //   } else {
  //     alert('Please fill in all required fields.');
  //   }
  // };
  // const handleSubmit = useCallback(
  //   (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //     alert(`You submitted \n ${JSON.stringify(myForm.value, null, 2)}`);
  //   },
  //   [myForm]
  // );
  // const TextInput = ({
  //   handler,
  //   meta: { label, placeholder },
  // }: AbstractControl) => (
  //   <div>
  //     <label>{label}:</label>
  //     <Input placeholder={placeholder} {...handler()} required />
  //   </div>
  // );
  // const SelectBox = ({ handler }: AbstractControl) => (
  //   <div>
  //     <label>View:</label>
  //     <StyledSelect {...handler()} required>
  //       <option value="" disabled>
  //         Select
  //       </option>
  //       <option value="contractor">Contractor</option>
  //       <option value="regular">Regular</option>
  //     </StyledSelect>
  //   </div>
  // );
  // const StatusSelectBox = ({ handler }: AbstractControl) => (
  //   <div>
  //     <label>Status:</label>
  //     <StyledSelect {...handler()} required>
  //       <option value="" disabled>
  //         Select
  //       </option>
  //       <option value="active">Active</option>
  //       <option value="inactive">Inactive</option>
  //     </StyledSelect>
  //   </div>
  // );
  return (
    <Dialog open={open} onClose={onClose}>
      {/* <CustomTitleBox>
        <DialogTitle>Add Vendor Type</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCancel}
          sx={{ mr: 6 }}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </CustomTitleBox>
      <CustomHR />
      <Box
        style={{ padding: '2%', paddingRight: '10%', background: '#f4f7fe' }}
      >
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <FieldGroup
              control={myForm}
              render={({ pristine, value }: AbstractControl) => (
                <form onSubmit={handleSubmit}>
                  <FieldControl
                    name="vendor_type"
                    render={TextInput}
                    meta={{
                      label: 'Vendor Type',
                      placeholder: 'Enter vendor type',
                    }}
                  />
                  <FieldControl name="view" render={SelectBox} />
                  <FieldControl name="status" render={StatusSelectBox} />
                </form>
              )}
            />
          </Grid>
        </DialogContent>
      </Box>
      <CustomHR />
      <DialogActions sx={{ padding: '2%', background: footerBg }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="outlined"
          size="medium"
          sx={{ borderRadius: '8px' }}
        >
          Cancel
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          size="medium"
          sx={{ minWidth: '78px', borderRadius: '8px' }}
        >
          Save
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};
export default Delete;
