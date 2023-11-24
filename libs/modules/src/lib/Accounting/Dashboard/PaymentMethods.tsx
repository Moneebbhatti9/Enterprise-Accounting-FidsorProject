import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { Box, Typography } from '@mui/material';
import InquiriesChart from './PaymentsMethodChart';
import { styled } from '@mui/material/styles';
import AppList from '@crema/components/AppList';
import type { TopInquiriesType } from '@crema/models/dashboards/Ecommerce';
// import AppLoader from '@crema/components/AppLoader';

// const [loading, setLoading] = useState<boolean>(true);

const TopInquiryRow = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginLeft: -8,
    marginRight: -8,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    '& .top-inquiry-col': {
      width: '100%',
      paddingLeft: 8,
      paddingRight: 8,
      [theme.breakpoints.up('sm')]: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
      },
      '& > div': {
        width: '100%',
      },
    },
    '& .top-inquiry-chart': {
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  };
});

type InquiriesCellProps = {
  inquiry: TopInquiriesType;
};

const InquiriesCell = ({ inquiry }: InquiriesCellProps) => {
  const { messages } = useIntl();
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
      }}
      className="item-hover"
    >
      <Box
        sx={{
          mt: 1.5,
          bgcolor: inquiry.color,
          minWidth: 10,
          height: 10,
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          ml: 2,
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: 12,
          }}
          component="h5"
        >
          {messages[inquiry.title] as string}- {inquiry.value}%
        </Typography>
        {/* <Box
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: 14,
          }}
        >
          {inquiry.value}%
        </Box> */}
      </Box>
    </Box>
  );
};

type TopInquiriesProps = {
  topInquiries: TopInquiriesType[];
  title: string;
};
// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
const PaymentMethods = ({ topInquiries, title }: TopInquiriesProps) => {
  const { messages } = useIntl();

  const handleSelectionType = (data: string) => {
    console.log('data: ', data);
  };

  return (
    <>
      {/* {loading ? (
        <AppLoader />
      ) : ( */}
      {/* <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      > */}
      {/* <Stack direction="row" > */}
      <AppCard
        contentStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        title={title}
      >
        <TopInquiryRow>
          <div className="top-inquiry-col top-inquiry-chart">
            <InquiriesChart data={topInquiries} />
          </div>

          <div className="top-inquiry-col">
            <AppList
              data={topInquiries}
              renderRow={(data) => (
                <InquiriesCell key={'inquiry-' + data.id} inquiry={data} />
              )}
            />
          </div>
        </TopInquiryRow>
      </AppCard>

      {/* </Stack>
        <Stack direction="row" >
        <AppCard
          contentStyle={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          title={messages['sidebar.billing.paymentmethod'] as string}
        >
          <TopInquiryRow>
            <div className="top-inquiry-col top-inquiry-chart">
              <InquiriesChart data={topInquiries} />
            </div>

            <div className="top-inquiry-col">
              <AppList
                data={topInquiries}
                renderRow={(data) => (
                  <InquiriesCell key={'inquiry-' + data.id} inquiry={data} />
                )}
              />
            </div>
          </TopInquiryRow>
        </AppCard> */}
      {/* </Stack> */}
      {/* </Box>  */}

      {/* )} */}
    </>
  );
};

export default PaymentMethods;
