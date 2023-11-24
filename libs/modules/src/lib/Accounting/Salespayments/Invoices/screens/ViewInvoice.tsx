import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
import { AiOutlineDownload } from 'react-icons/ai';
import {
  Body,
  BusinessInfo,
  CustomerInfo,
  InfoStack,
  InvBody,
  InvoiceInfo,
  InvoiceStack,
  Totaling,
} from '../styles/ViewInvoiceStyle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ViewInvoice = () => {
  const handleDownloadPDF = async () => {
    try {
      const input = document.getElementById('invoice-content');
      if (input) {
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({ orientation: 'portrait' });
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('Invoice.pdf');
      } else {
        console.error('Element with ID "invoice-content" not found.');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  return (
    <Body>
      <PageHeaderWithBack title="View Invoice" url="/salespayment/invoices" />
      <InvBody>
        <Box width={'100%'} padding={'40px 10%'} id="invoice-content">
          <InfoStack>
            <CustomerInfo spacing={2}>
              <Stack width={'75%'} padding={'0px 12px 12px 0px'} spacing={2}>
                <Typography fontSize={'14px'} fontWeight={'600'}>
                  EcoVacs Tech Pvt Ltd
                </Typography>
                <Typography fontSize={'12px'}>Suresh Singh</Typography>
                <Typography fontSize={'12px'}>
                  Bhiwandi , 123132 , Maharashtra , India
                </Typography>
                <Typography fontSize={'12px'}>
                  VAT ID: IDSIUAHD93E923UIU
                </Typography>
              </Stack>
            </CustomerInfo>
            <BusinessInfo>
              <Stack spacing={2} width={'fit-content'}>
                <Typography fontSize={'14px'} fontWeight={'600'}>
                  EcoVacs Tech Pvt Ltd.
                </Typography>
                <Typography fontSize={'12px'}>
                  New York
                  <br />
                  827102
                </Typography>
                <Typography fontSize={'12px'}>
                  +91 9372371278
                  <br />
                  abc@email.com
                </Typography>
                <Typography fontSize={'12px'}>
                  VAT ID: KH239J88JJ22UI
                  <br />
                  Tax ID: SAK31234JK21
                </Typography>
              </Stack>
            </BusinessInfo>
          </InfoStack>
          <InvoiceStack spacing={2}>
            <Typography fontSize={'14px'} fontWeight={'600'}>
              Invoice
            </Typography>
            <InvoiceInfo>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography fontSize={'12px'}>
                  Invoice ID:&nbsp;<span>MDAS001</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography fontSize={'12px'}>Invoice Date:&nbsp;</Typography>
                <span style={{ fontSize: '12px' }}>24/Nov/2022</span>
              </Box>
            </InvoiceInfo>
            <Box width={'fit-content'}>
              <Typography
                sx={{
                  fontSize: '12px',
                }}
              >
                New Invoice Start
              </Typography>
            </Box>
          </InvoiceStack>

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
            <Totaling>
              <Grid
                container
                maxWidth={{ xs: '100%', md: '35%' }}
                rowSpacing={4}
                columnSpacing={4}
                alignItems={'center'}
              >
                <Grid item xs={6}>
                  <Typography fontSize={'14px'} color={'#6b7280'}>
                    Subtotal:
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign={'end'}>
                  <Typography fontSize={'14px'} color={'#6b7280'}>
                    $ 60.00
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontSize={'14px'} color={'#6b7280'}>
                    VAT(12%):
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign={'end'}>
                  <Typography fontSize={'14px'} color={'#6b7280'}>
                    $ 12.00
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontSize={'14px'} color={'#6b7280'}>
                    Total:
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign={'end'}>
                  <Typography fontSize={'14px'} color={'#6b7280'}>
                    $88.00
                  </Typography>
                </Grid>
              </Grid>
            </Totaling>
          </Box>

          <Box
            sx={{
              width: '100%',
              margin: '40px 0px',
            }}
          >
            <Typography fontSize={'14px'} fontWeight={'600'}>
              Payment Terms
              <br />
              <span style={{ fontSize: '12px', fontWeight: '400' }}>
                Please Pay within 30 days of receiving this invoice.
              </span>
            </Typography>
          </Box>
          <Box width={'fit-content'}>
            <Typography
              sx={{
                fontSize: '12px',
              }}
            >
              New Invoice End
            </Typography>
          </Box>
          <Box width={'100%'} margin={'12px 0px'}>
            <Divider />
          </Box>
          <Stack
            padding={'12px'}
            border={'1px solid #eee'}
            borderRadius={'8px'}
            width={'fit-content'}
            spacing={2}
          >
            <Typography fontSize={'14px'} fontWeight={'600'}>
              Bank Account
            </Typography>
            <Box>
              <Typography fontSize={'12px'}>
                Receiver: EcoVacs Tech Pvt. Ltd
              </Typography>
              <Typography fontSize={'12px'}>Bank Name: Canara Bank</Typography>
              <Typography fontSize={'12px'}>Country of bank: India</Typography>
              <Typography fontSize={'12px'}>
                Account Number: 312718521635726626
              </Typography>
              <Typography fontSize={'12px'}>SWIFT/BIC: CNRBINBBXXX</Typography>
              <Typography fontSize={'12px'}>IFSC: CNRB0000540</Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          width={'100%'}
          padding={'40px 10px'}
          display={'flex'}
          justifyContent={'end'}
        >
          <Button
            variant="contained"
            endIcon={<AiOutlineDownload />}
            sx={{ width: 'fit-content', margin: '12px 0px' }}
            onClick={handleDownloadPDF}
          >
            Download Invoice
          </Button>
        </Box>
      </InvBody>
    </Body>
  );
};

export default ViewInvoice;
