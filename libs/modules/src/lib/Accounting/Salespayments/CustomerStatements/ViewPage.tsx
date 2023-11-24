import { useRef } from 'react';
import InvoiceDetails from './Details';
import { Grid, Button, Stack, Box } from '@mui/material';

import { useReactToPrint } from 'react-to-print';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const CustomerViewPage = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
  });

  const generatePDF = async () => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current);

      const imageData = canvas.toDataURL('image/png');

      const pdf = new JsPDF('portrait', 'pt', 'a4');

      const width = pdf.internal.pageSize.width;
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imageData, 'PNG', 0, 0, width, height);

      const blob = pdf.output('blob');

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'CustomerStatement.pdf';
      link.click();
    }
  };

  return (
    <Grid
      container
      sx={{ backgroundColor: '#fff', padding: '2%', borderRadius: '20px' }}
    >
      <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
        <Stack direction="column">
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={handlePrint}>
              Print
            </Button>
            <Button variant="outlined" onClick={generatePDF}>
              Export as PDF
            </Button>
          </Stack>
          <Box ref={componentRef} sx={{ padding: '2%' }}>
         <InvoiceDetails/>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default CustomerViewPage;
