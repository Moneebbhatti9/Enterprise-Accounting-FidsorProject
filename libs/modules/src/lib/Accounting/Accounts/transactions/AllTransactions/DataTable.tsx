import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Actions from './Actions/index';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import { FormControl, Grid, TextField, Tooltip } from '@mui/material';
import Stack from '@mui/material/Stack';
import { MenuItem, Select} from '@mui/material';
import { getAllAccounts } from '../../../../../../../services/AccountsService/AccountsService';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CategoryDropdown from './CategoryDropdown';
import AccountDropdown from './TAccountDropdown';
import DialogTitle from '@mui/material/DialogTitle';;
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { datePickerStyles } from '../../../Global/Styling';

interface DataItem {
  id: number;
  date: string;
  description: string;
  category: string;
  account: string;
  amount: string;
}
const data: DataItem[] = [
  {
    id: 1,
    date: '3/3/2000',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  {
    id: 2,
    date: '4/4/2001',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  {
    id: 3,
    date: '2/2/2000',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  {
    id: 4,
    date: '5/3/2004',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  {
    id: 5,
    date: '9/4/2000',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  {
    id: 6,
    date: '7/6/2003',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  {
    id: 7,
    date: '7/92004',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  {
    id: 8,
    date: '3/3/2002',
    description: 'Description 1',
    category: 'Category 1',
    account: 'Account 1',
    amount: 'Amount 1',
  },
  
];

const handleKeyPress = (event: { key: any; preventDefault: () => void }) => {
  const inputValue = event.key;
  const regex = /^[0-9.-]*$/; //
  if (!regex.test(inputValue)) {
    event.preventDefault();
  }
};

const AdditionalFSelectGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export default function DataTable() {
  const dateStyle = datePickerStyles()
  const [isTModalOpen, setIsTModalOpen] = useState(false);
  const handleOpenTModal = () => {
    setIsTModalOpen(true);
  };
  const handleCloseTModal = () => {
    setIsTModalOpen(false);
  };
  const [dialogOpenMerge, setMergeDialogOpen] = useState(false);
  const handleMergeIconClick = () => {
    setMergeDialogOpen(true);
  };
  const { messages } = useIntl();
  const [clickCount, setClickCount] = useState(0);
  const actionsColumn: GridColDef<DataItem> = {
    field: 'actions',
    headerName: '',
    sortable: false,
    align: 'right',
    headerAlign: 'right', 
    flex: 1,
    renderCell: (params) => {
      return (
        <>
          <Actions />
        </>
      );
    },
  };
  const columns = [
    {
      field: 'date',
      headerName: messages['common.date'] as string,
      width: 180,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: (params: any) => (
        <DatePicker
          sx={{ fontSize: '10px' }}
          className={dateStyle.pickerInput}
          onChange={(selectedDate) => {
            console.log('Selected date:', selectedDate);
          }}
        />
      ),
    },
    {
      field: 'description',
      headerName: messages['common.description'] as string,
      width: 300,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: (params: any) => {
        const handleDescriptionChange = (event: { target: { value: any } }) => {
          console.log('Description:', event.target.value);
        };

        return (
          <TextField
          fullWidth
          variant="outlined"
          size="small"
          sx={{
            height: '100%',
            borderRadius: '8px',
            fontSize: '12px',
          }}
         
          onChange={handleDescriptionChange}
        />
        );
      },
    },
    {
      field: 'account',
      headerName: messages['sidebar.pages.extraPages.account'] as string,
      width: 300,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: (params: any) => <AccountDropdown />,
    },

    {
      field: 'category',
      headerName: messages['common.category'] as string,
      width: 300,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: (params: any) => <CategoryDropdown />,
    },
    {
      field: 'amount',
      headerName: messages['common.amount'] as string,
      width: 190,

      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '12px' }}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: () => (
        <>
          {' '}
          <strong style={{ fontSize: '12px', paddingRight: '15px' }}>
            AED
          </strong>
          <TextField
            inputProps={{
             
              onKeyPress: handleKeyPress,
            }}
            fullWidth
            variant="outlined"
            size="small"
            sx={{
              height: '100%',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
        </>
      ),
    },

    actionsColumn,
  ];
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const handleRowSelection = (selection: any) => {
    setSelectedRows(selection);
  };

  let iconClassName = '';
  if (clickCount === 1) {
    iconClassName = 'enabled';
  } else if (clickCount === 2) {
    iconClassName = 'green';
  }

  const StyledEditIcon = styled(EditIcon)`
    && {
      border: solid 1px #007bff; /* Blue border */
      color: #007bff; /* Blue color */
      padding: 4px;
      border-radius: 50%;
      font-size: 25px;
      &:hover,
      &:focus {
        color: #ffffff; /* White color on hover/focus */
        background-color: #007bff; /* Blue background on hover/focus */
      }

      & .MuiSvgIcon-root {
        font-size: 20px;
      }

      @media only screen and (min-width: 1200px) and (max-width: 1399px) {
        padding: 4px;

        & .MuiSvgIcon-root {
          font-size: 16px;
        }
      }
    }
  `;
  const StyledDeleteIcon = styled(DeleteIcon)`
    && {
      border: solid 1px #007bff; /* Blue border */
      color: #007bff; /* Blue color */
      border-radius: 50%;
      padding: 4px;
      font-size: 25px;
      &:hover,
      &:focus {
        color: #ffffff; /* White color on hover/focus */
        background-color: #007bff; /* Blue background on hover/focus */
      }

      & .MuiSvgIcon-root {
        font-size: 20px;
      }

      @media only screen and (min-width: 1200px) and (max-width: 1399px) {
        padding: 4px;

        & .MuiSvgIcon-root {
          font-size: 16px;
        }
      }
    }
  `;
  const StyledCompareArrowsIcon = styled(CompareArrowsIcon)`
    && {
      border: solid 1px #007bff; /* Blue border */
      color: #007bff; /* Blue color */
      border-radius: 50%;
      padding: 4px;
      font-size: 25px;

      &:hover,
      &:focus {
        color: #ffffff; /* White color on hover/focus */
        background-color: #007bff; /* Blue background on hover/focus */
      }

      & .MuiSvgIcon-root {
        font-size: 32px;
      }

      @media only screen and (min-width: 1200px) and (max-width: 1399px) {
        padding: 4px;

        & .MuiSvgIcon-root {
          font-size: 24px;
        }
      }
    }
  `;
  const IconContainer = styled.div`
    display: flex;
    gap: 8px; /* Adjust the spacing between icons */
    margin-bottom: 8px;
  `;
  const [open, setOpen] = useState(false);
  const handleIconClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
 
  interface Account {
    id: string;
    accountTitle: string;
  }
  const [accountData, setAccountData] = useState<Account[]>([]);
  useEffect(() => {
    async function fetchAccounts() {
      try {
        const data = await getAllAccounts();
        console.log(data);

        setAccountData(data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    }

    fetchAccounts();
  }, []);
  return (
    <>
      <Box style={{ fontSize: '12px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <AdditionalFSelectGrid
              item
              xs={12}
              md={12}
              style={{
                paddingBottom: '10px',
                fontSize: '12px',
                width: '200px',
              }}
            >
              <FormControl fullWidth size="small">
                <Select fullWidth value={selectedValue} onChange={handleChange}>
                  <MenuItem disabled value="">
                    <em style={{ fontStyle: 'unset' }}>All Accounts</em>
                  </MenuItem>
                  {accountData.map((account) => (
                    <MenuItem key={account.id} value={account.accountTitle}>
                      {account.accountTitle}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </AdditionalFSelectGrid>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              justifyContent="flex-end"
              style={{ fontSize: '12px' }}
            >
              <Stack
                direction="row"
                spacing={2}
                style={{ paddingRight: '5px' }}
              >
                <IconContainer>
                  <Stack direction="row" spacing={2}>
                    <Tooltip title="Delete Tranasaction">
                      {selectedRows.length > 0 ? (
                        <StyledDeleteIcon
                          onClick={handleIconClick}
                          style={{ cursor: 'pointer' }}
                        />
                      ) : (
                        <DeleteIcon
                          style={{
                            color: 'gray',
                            fontSize: '25px',
                            border: 'solid 1px gray',
                            borderRadius: '50%',
                            padding: '4px',
                            cursor: 'pointer',
                          }}
                        />
                      )}
                    </Tooltip>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Tooltip title="Edit Tranasaction">
                      {selectedRows.length > 1 ? (
                        <StyledEditIcon
                          style={{ cursor: 'pointer' }}
                          onClick={handleMergeIconClick}
                        />
                      ) : (
                        <EditIcon
                          style={{
                            color: 'gray',
                            fontSize: '25px',
                            border: 'solid 1px gray',
                            borderRadius: '50%',
                            padding: '4px',
                            cursor: 'pointer',
                          }}
                        />
                      )}
                    </Tooltip>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Tooltip title="Merge Tranasaction">
                      {selectedRows.length == 2 ? (
                        <StyledCompareArrowsIcon
                          style={{ cursor: 'pointer' }}
                          onClick={handleOpenTModal}
                        />
                      ) : (
                        <CompareArrowsIcon
                          style={{
                            color: 'gray',
                            fontSize: '25px',
                            border: 'solid 1px gray',
                            borderRadius: '50%',
                            padding: '4px',
                            cursor: 'pointer',
                          }}
                        />
                      )}
                    </Tooltip>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Tooltip title="Reviewed Tranasaction">
                      <CheckIcon
                        style={{
                          color: 'gray',
                          fontSize: '25px',
                          border: 'solid 1px gray',
                          borderRadius: '50%',
                          padding: '4px',
                          cursor: 'pointer',
                        }}
                      />
                    </Tooltip>
                  </Stack>
                </IconContainer>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose} style={{ fontSize: '12px' }}>
        <DialogTitle style={{ fontSize: '12px' }}>Delete Item</DialogTitle>
        <DialogContent style={{ fontSize: '12px' }}>
          <DialogContentText style={{ fontSize: '12px' }}>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ fontSize: '12px' }}>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ fontSize: '12px' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ fontSize: '12px' }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isTModalOpen} onClose={handleCloseTModal}>
        <DialogTitle>
          Merge Tranasactions{' '}
          <IconButton
            aria-label="close"
            onClick={handleCloseTModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <p>These 2 tranasactions are going to merge.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTModal}>Close </Button>
        </DialogActions>
      </Dialog>
      <DataGrid
      style={{height:'95%'}}
        density="compact"
        rows={data}
        columns={columns}
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 400 },
          },
        }}
        onRowSelectionModelChange={handleRowSelection}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </>
  );
}
