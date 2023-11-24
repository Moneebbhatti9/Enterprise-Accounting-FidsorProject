import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';

const ProductTable = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: '40px' }}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
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
            <TableCell align="center">
              <Typography fontSize={'14px'} fontWeight={'500'}>
                Ammount
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button
                startIcon={<AiOutlinePlus style={{ fontSize: '12px' }} />}
                variant="text"
                sx={{
                  fontSize: '12px !important',
                  color: '#0A8FDC',
                  width: 'fit-content',
                }}
              >
                Add Product
              </Button>
            </TableCell>
            <TableCell align="center">
              <TextField variant="outlined" />
            </TableCell>
            <TableCell align="center">
              <TextField variant="outlined" />
            </TableCell>
            <TableCell align="center">
              <Typography fontSize={'12px'}>60</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell align="center">
              <Typography fontSize={'14px'} fontWeight={'500'}>
                Subtotal
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography fontSize={'14px'} fontWeight={'500'}>
                60
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell align="center">
              <Typography fontSize={'14px'} fontWeight={'500'}>
                Tax
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography fontSize={'14px'} fontWeight={'500'}>
                42.76
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell align="center">
              <Typography fontSize={'14px'} fontWeight={'500'}>
                Total
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography fontSize={'14px'} fontWeight={'500'}>
                653.64
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
