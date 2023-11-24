import { useState } from 'react';
import {
  CustomTitleBox,
  DialogTitle,
  CustomHR,
  TabBox,
  List1,
  ListItemButton1,
  OptionButton,
  CustomListItemIcon,
  CustomFolderOpenIcon,
  BulletSpan,
} from './StyledComponents';
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
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
  showBuyDialog: boolean;
  handleCloseDialog: () => void;
  selectedBuyTab: number;
  handleBuyTabChange: (event: any, newValue: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleBuyValue: (value: string) => void;
  selectedBuyOption: string | null;
  tabBuy0Options: string[]; // Use the correct prop names here
  tabBuy1Options: string[];
  tabBuy2Options: string[];
  tabBuy3Options: string[];
  tabBuy4Options: string[];
}

const ExpenseDialog: React.FC<AccountDialogProps> = ({
  showBuyDialog,
  handleCloseDialog,
  selectedBuyTab,
  handleBuyTabChange,
  searchQuery,
  setSearchQuery,
  tabBuy0Options, // Correct the prop names here
  tabBuy1Options,
  tabBuy2Options,
  tabBuy3Options,
  tabBuy4Options,
  handleBuyValue,
  selectedBuyOption,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={showBuyDialog} onClose={handleCloseDialog}>
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
        <TabBox>
          <Tabs value={selectedBuyTab} onChange={handleBuyTabChange} centered>
            <Tab label="Asset" disabled className={classes.tabStyling} />
            <Tab
              label="Liability/Credit Card"
              disabled
              className={classes.tabStyling}
            />
            <Tab label="Income" disabled className={classes.tabStyling} />
            <Tab label="Expense" className={classes.tabStyling} />
            <Tab label="Equity" disabled className={classes.tabStyling} />
          </Tabs>
          <List1>
            <ListItemButton1 onClick={handleClick}>
              <CustomListItemIcon>
                <CustomFolderOpenIcon />
              </CustomListItemIcon>
              <ListItemText primary="Cost Of Goods" />
            </ListItemButton1>
            {selectedBuyTab === 0 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tabBuy0Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <OptionButton
                        key={index}
                        onClick={() => handleBuyValue(option)}
                        sx={{
                          backgroundColor:
                            selectedBuyOption === option
                              ? 'grey'
                              : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <BulletSpan>•</BulletSpan>
                        <ListItemText primary={option} />
                      </OptionButton>
                    ))}
                </List>
              </Collapse>
            )}

            {selectedBuyTab === 1 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tabBuy1Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <OptionButton
                        key={index}
                        onClick={() => handleBuyValue(option)}
                        sx={{
                          backgroundColor:
                            selectedBuyOption === option
                              ? 'grey'
                              : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <BulletSpan>•</BulletSpan>
                        <ListItemText primary={option} />
                      </OptionButton>
                    ))}
                </List>
              </Collapse>
            )}
            {selectedBuyTab === 2 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tabBuy2Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <OptionButton
                        key={index}
                        onClick={() => handleBuyValue(option)}
                        sx={{
                          backgroundColor:
                            selectedBuyOption === option
                              ? 'grey'
                              : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <BulletSpan>•</BulletSpan>
                        <ListItemText primary={option} />
                      </OptionButton>
                    ))}
                </List>
              </Collapse>
            )}
            {selectedBuyTab === 3 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tabBuy3Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <OptionButton
                        key={index}
                        onClick={() => handleBuyValue(option)}
                        sx={{
                          backgroundColor:
                            selectedBuyOption === option
                              ? 'grey'
                              : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <BulletSpan>•</BulletSpan>
                        <ListItemText primary={option} />
                      </OptionButton>
                    ))}
                </List>
              </Collapse>
            )}
            {selectedBuyTab === 4 && (
              <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tabBuy4Options
                    .filter((option) =>
                      option.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((option, index) => (
                      <OptionButton
                        key={index}
                        onClick={() => handleBuyValue(option)}
                        sx={{
                          backgroundColor:
                            selectedBuyOption === option
                              ? 'grey'
                              : 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                        }}
                      >
                        <BulletSpan>•</BulletSpan>
                        <ListItemText primary={option} />
                      </OptionButton>
                    ))}
                </List>
              </Collapse>
            )}
          </List1>
        </TabBox>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExpenseDialog;
