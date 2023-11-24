import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AddProduct, Totaling } from '../styles/CreateInvoiceStyle';

const ProductTable = () => {
  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{
          marginTop: '40px',
          boxShadow: 'none',
          borderRadius: '0px',
        }}
      >
        <Table
          style={{
            minWidth: 700,
          }}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography fontSize={'14px'} fontWeight={'500'}>
                  Products
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={'14px'} fontWeight={'500'}>
                  Quantity
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={'14px'} fontWeight={'500'}>
                  Price
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography fontSize={'14px'} fontWeight={'500'}>
                  Amount
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography fontSize={'12px'}>Apple</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={'12px'}>1</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={'12px'}>60</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography pr={'15px'} fontSize={'12px'}>
                  60
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <AddProduct>
        <Box width={'50%'}>
          <Button
            variant="text"
            startIcon={<AiOutlinePlus style={{ fontSize: '12px' }} />}
            sx={{ fontSize: '12px !important' }}
          >
            Add Product
          </Button>
        </Box>
        <Totaling>
          <Grid
            container
            width={{ xs: '100%', md: '75%' }}
            rowSpacing={4}
            columnSpacing={4}
            alignItems={'center'}
          >
            <Grid item xs={4}>
              Subtotal:
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} textAlign={'end'}>
              $60.00
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value={1}>VAT</MenuItem>
                  <MenuItem value={2}>CGST + SGST</MenuItem>
                  <MenuItem value={3}>IGST</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value={4}>0%</MenuItem>
                  <MenuItem value={5}>5%</MenuItem>
                  <MenuItem value={6}>12%</MenuItem>
                  <MenuItem value={7}>18%</MenuItem>
                  <MenuItem value={8}>28%</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} textAlign={'end'}>
              $60.00
            </Grid>
            <Grid item xs={4}>
              Total:
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <Select>
                  <MenuItem value={4}>INR</MenuItem>
                  <MenuItem value={5}>USD</MenuItem>
                  <MenuItem value={6}>EUR</MenuItem>
                  <MenuItem value={7}>GBP</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} textAlign={'end'}>
              $60.00
            </Grid>
          </Grid>
        </Totaling>
      </AddProduct>
    </Box>
  );
};

export default ProductTable;
