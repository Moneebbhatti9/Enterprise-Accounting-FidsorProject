import { Box, Grid, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';

export default function AgedReceivablesGrid() {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
      }}
    >
      <Box sx={{ width: '100%', px: 2 }}>
        <Grid container>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 900 }}>Accounts</h4>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <p style={{ fontSize: '14px', fontWeight: 900 }}>Jul 31, 2023</p>
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={{ py: 1 }}>
        <Grid
          item
          xs={12}
          sx={{
            padding: 0,
            backgroundColor: '#ECF0F3',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5
              style={{
                margin: 3,
                paddingLeft: 5,
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: 900,
              }}
            >
              Assets
            </h5>
          </div>
        </Grid>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px' }}>Total Cash and Bank</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px' }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px' }}>Total Other Current Assets</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px' }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px' }}>Total Long Term Assets</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px' }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px', fontWeight: 900 }}>Total Assets</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px', fontWeight: 900 }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid container sx={{ py: 1, mt: 5 }}>
        <Grid
          item
          xs={12}
          sx={{
            padding: 0,
            backgroundColor: '#ECF0F3',
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5
              style={{
                margin: 3,
                paddingLeft: 5,
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: 900,
              }}
            >
              Liabilities
            </h5>
          </div>
        </Grid>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px' }}>Total Current Liabilities</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px' }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px' }}>Total Long Term Liabilities</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px' }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px', fontWeight: 900 }}>
                Total Liabilities
              </p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px', fontWeight: 900 }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid container sx={{ py: 1, mt: 5 }}>
        <Grid
          item
          xs={12}
          sx={{
            padding: 0,
            backgroundColor: '#ECF0F3',
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h5
              style={{
                margin: 3,
                paddingLeft: 5,
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: 900,
              }}
            >
              Equity
            </h5>
          </div>
        </Grid>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px' }}>Total Other Equity</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px' }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px' }}>Total Retained Earning</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px' }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: '100%',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: '#979797',
          }}
        >
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px', fontWeight: 900 }}>Total Equity</p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px', fontWeight: 900 }}>$0.00</p>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Button variant="outlined">Show Summary</Button>
      </Box>
    </Box>
  );
}
