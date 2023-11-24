import { useState } from 'react';
import { CustomTitleBox, DialogTitle, CustomHR } from './StyledComponents';
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
} from '@mui/material';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import ListItemIcon from '@mui/material/ListItemIcon';

import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Collapse from '@mui/material/Collapse';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    '@media (max-width: 510px)': {
      marginRight: '10px', // Override margin for screens with max-width 399px
    },
  },
  tabStyling: {
    '@media (max-width: 460px)': {
      fontSize: '10px',
      minWidth: '40px',
      padding: '12px 4px',
    },
    '@media (min-width: 461px) and (max-width: 767px)': {
      fontSize: '12px',
      minWidth: '40px',
      padding: '12px 16px',
    },
    '@media (min-width: 768px)': {
      fontSize: '12px',
    },
  },
}));

interface AccountDialogProps {
  showDialog: boolean;
  handleCloseDialog: () => void;
  selectedTab: number;
  handleTabChange: (event: any, newValue: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  handleSaveValue: (value: string) => void;
  selectedOption: string | null;
  tab0Options: string[]; // Use the correct prop names here
  tab1Options: string[];
  tab2Options: string[];
  tab3Options: string[];
  tab4Options: string[];
}

const AccountDialog: React.FC<AccountDialogProps> = ({
  showDialog,
  handleCloseDialog,
  selectedTab,
  handleTabChange,
  searchQuery,
  setSearchQuery,
  tab0Options, // Correct the prop names here
  tab1Options,
  tab2Options,
  tab3Options,
  tab4Options,
  handleSaveValue,
  selectedOption,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={showDialog} onClose={handleCloseDialog}>
      <CustomTitleBox>
        <DialogTitle>Create a new account</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCloseDialog}
          sx={{ mr: 6 }}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </CustomTitleBox>
      <CustomHR />
      <DialogContent>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Typography variant="subtitle1" gutterBottom>
              Search for an account, or browse the account categories.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Search by account name
            </InputLabel>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              sx={{}}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginTop: '5%',
          }}
        >
          <Tabs value={selectedTab} onChange={handleTabChange} centered>
            <Tab label="Asset" disabled className={classes.tabStyling} />
            <Tab
              label="Liability/Credit Card"
              disabled
              className={classes.tabStyling}
            />
            <Tab label="Income" className={classes.tabStyling} />
            <Tab label="Expense" disabled className={classes.tabStyling} />
            <Tab label="Equity" disabled className={classes.tabStyling} />
          </Tabs>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'none',
            }}
          >
            <ListItemButton onClick={handleClick} sx={{ p: 0, pl: 3 }}>
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <FolderOpenIcon sx={{ fontSize: '18px' }} />
              </ListItemIcon>
              <ListItemText primary="Cost Of Goods" />
            </ListItemButton>
            {selectedTab === 0 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tab0Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSaveValue(option)}
                        sx={{
                          display: 'flex',
                          justifyContent: 'start',

                          p: 0,
                          pl: 12,
                          backgroundColor:
                            selectedOption === option ? 'grey' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <span style={{ marginRight: '8px', fontSize: '18px' }}>
                          •
                        </span>
                        <ListItemText primary={option} />
                      </Button>
                    ))}
                </List>
              </Collapse>
            )}

            {selectedTab === 1 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tab1Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSaveValue(option)}
                        sx={{
                          display: 'flex',
                          justifyContent: 'start',

                          p: 0,
                          pl: 12,
                          backgroundColor:
                            selectedOption === option ? 'grey' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <span style={{ marginRight: '8px', fontSize: '18px' }}>
                          •
                        </span>
                        <ListItemText primary={option} />
                      </Button>
                    ))}
                </List>
              </Collapse>
            )}
            {selectedTab === 2 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tab2Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSaveValue(option)}
                        sx={{
                          display: 'flex',
                          justifyContent: 'start',

                          p: 0,
                          pl: 12,
                          backgroundColor:
                            selectedOption === option ? 'grey' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <span style={{ marginRight: '8px', fontSize: '18px' }}>
                          •
                        </span>
                        <ListItemText primary={option} />
                      </Button>
                    ))}
                </List>
              </Collapse>
            )}
            {selectedTab === 3 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tab3Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSaveValue(option)}
                        sx={{
                          display: 'flex',
                          justifyContent: 'start',

                          p: 0,
                          pl: 12,
                          backgroundColor:
                            selectedOption === option ? 'grey' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <span style={{ marginRight: '8px', fontSize: '18px' }}>
                          •
                        </span>
                        <ListItemText primary={option} />
                      </Button>
                    ))}
                </List>
              </Collapse>
            )}
            {selectedTab === 4 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tab4Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSaveValue(option)}
                        sx={{
                          display: 'flex',
                          justifyContent: 'start',

                          p: 0,
                          pl: 12,
                          backgroundColor:
                            selectedOption === option ? 'grey' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <span style={{ marginRight: '8px', fontSize: '18px' }}>
                          •
                        </span>
                        <ListItemText primary={option} />
                      </Button>
                    ))}
                </List>
              </Collapse>
            )}
          </List>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountDialog;
