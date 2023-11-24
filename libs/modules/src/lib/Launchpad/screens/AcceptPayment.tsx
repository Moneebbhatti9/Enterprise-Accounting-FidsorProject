import Box from '@mui/material/Box';
import PageHeaderWithBack from '../../Accounting/Global/Components/PageHeaderWithBack';
import { Button, Stack, Typography, Avatar, Link } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import React from 'react';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

interface Column {
  id: 'name' | 'check' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'check', label: 'ISO\u00a0Code', minWidth: 100, align: 'center' },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  check: React.ReactNode;
  population: React.ReactNode;
  size: React.ReactNode;
  density: React.ReactNode;
}

function createData(
  name: string,
  check: React.ReactNode,
  population: React.ReactNode,
  size: React.ReactNode,
  density: React.ReactNode
): Data {
  return { name, check, population, size, density };
}

const rows = [
  createData(
    'Payment methods available to your customers',
    <Stack direction={'column'} alignItems={'center'}>
      <Typography fontSize={'14px'} fontWeight={'bold'} marginBottom={'8px'}>
        Bank Payment (ACH)
      </Typography>
      <Stack
        direction={'row'}
        display={'inline-flex'}
        gap={'4px'}
        flexWrap={'wrap'}
        alignItems="center"
        justifyContent="center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
            clip-rule="evenodd"
          >
            <path
              fill="#e31837"
              fill-rule="evenodd"
              d="M23.928,37.011C31.507,30.514,42.153,24.199,48,21.925 c-0.902-0.578-2.31-1.408-3.898-2.31c-7.543,2.49-16.349,8.012-24.217,14.256C21.221,34.881,22.628,35.928,23.928,37.011 L23.928,37.011z"
              clip-rule="evenodd"
            />
            <path
              fill="#012169"
              fill-rule="evenodd"
              d="M20.463,19.363c-1.119-0.542-2.346-1.047-3.284-1.48 c-2.851,1.407-6.569,3.537-11.26,6.893c1.011,0.542,2.093,1.191,3.248,1.841C12.776,23.946,16.421,21.42,20.463,19.363z"
              clip-rule="evenodd"
            />
            <path
              fill="#e31837"
              fill-rule="evenodd"
              d="M27.212,16.259c-1.372-0.758-6.135-2.527-9.42-3.284 c-0.974,0.361-2.346,0.902-3.284,1.299c1.191,0.325,5.63,1.516,9.42,3.429C24.902,17.233,26.274,16.656,27.212,16.259 L27.212,16.259z"
              clip-rule="evenodd"
            />
            <path
              fill="#012169"
              fill-rule="evenodd"
              d="M11.079,15.79C6.857,17.739,2.418,20.409,0,21.961 c0.866,0.397,1.732,0.722,2.923,1.299c5.341-3.609,9.528-5.811,11.188-6.532C12.92,16.294,11.801,16.006,11.079,15.79L11.079,15.79 z"
              clip-rule="evenodd"
            />
            <path
              fill="#e31837"
              fill-rule="evenodd"
              d="M30.388,15.14c0.974-0.325,2.094-0.614,3.068-0.903 c-2.815-1.191-6.352-2.454-9.528-3.248c-0.505,0.144-2.021,0.542-3.068,0.866C21.943,12.181,25.515,13.011,30.388,15.14z M12.595,28.71c1.155,0.686,2.382,1.624,3.573,2.418c7.904-6.135,15.699-10.863,24.253-13.534 c-1.191-0.613-2.238-1.154-3.573-1.804C31.723,17.089,22.953,20.589,12.595,28.71L12.595,28.71z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#d32f2f"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
            />
            <path
              fill="#ffca28"
              d="M41.899,38H6.101c0.463,2.282,2.481,4,4.899,4h26C39.419,42,41.436,40.282,41.899,38z"
            />
            <path
              fill="#fafafa"
              d="M22.303,19.58h0.607v2.014h-5.064v-0.733h0.716v-4.432H17.4l-1.475,5.165h-1.171 l-1.196-4.28l-1.23,4.28h-1.171l-1.483-5.165H9v-0.733h2.747v0.733h-0.792l0.986,3.555l1.18-4.288h1.213l1.205,4.297l0.969-3.564 h-0.826v-0.733h7.144v1.912h-0.607l-0.059-0.228c-0.185-0.708-0.379-0.952-0.944-0.952h-1.399v1.778h1.694 c0.064,0.125,0.096,0.264,0.093,0.404c0.004,0.146-0.027,0.291-0.093,0.421h-1.694v1.828h1.458c0.548,0,0.792-0.236,0.961-0.986 L22.303,19.58z M27.627,19.875c-0.169,0.75-0.404,0.986-0.961,0.986h-1.171v-4.432h0.8v-0.733h-2.772v0.733h0.716v4.432h-0.716 l0,0.733h4.777V19.58h-0.607L27.627,19.875z M32.934,19.875c-0.169,0.75-0.404,0.986-0.961,0.986h-1.171v-4.432h0.8v-0.733h-2.772 v0.733h0.716v4.432h-0.716v0.733h4.777V19.58h-0.607L32.934,19.875z M37.374,18.14l-1.07-0.244c-0.623-0.143-0.885-0.388-0.885-0.8 c0-0.497,0.396-0.809,1.171-0.809c0.775,0,1.23,0.278,1.407,0.935l0.076,0.287h0.607V16.05c-0.662-0.341-1.395-0.52-2.14-0.522 c-1.441,0-2.367,0.691-2.367,1.803c0,0.859,0.539,1.491,1.575,1.719l1.07,0.236c0.682,0.152,0.935,0.421,0.935,0.868 c0,0.548-0.413,0.851-1.239,0.851c-0.935,0-1.415-0.371-1.626-1.078l-0.109-0.362h-0.607v1.651 c0.771,0.384,1.625,0.572,2.485,0.548c1.415,0,2.342-0.708,2.342-1.812C39,19.024,38.436,18.384,37.374,18.14z"
            />
            <path
              fill="#fafafa"
              d="M13.23,25.654c0.564,0,0.758,0.244,0.944,0.952l0.059,0.228h0.607v-1.912h-5.08v0.733 h0.716v4.432H9.759v0.733h2.814v-0.733H11.73v-1.719h1.736c0.065-0.131,0.097-0.275,0.093-0.421c0.003-0.14-0.028-0.28-0.093-0.404 H11.73v-1.887L13.23,25.654z M26.069,30.153c0.101,0.219,0.101,0.472,0,0.691c-0.218,0.028-0.437,0.042-0.657,0.042 c-0.817,0-1.213-0.337-1.306-1.121l-0.034-0.295c-0.101-0.851-0.379-1.18-1.306-1.18h-0.463v1.795h0.8v0.733h-5.299v-0.733h0.691 l-0.388-1.053h-2.19l-0.388,1.053h0.708v0.733h-2.233v-0.733h0.59l2.064-5.165h1.121l2.106,5.165h1.162v-4.432h-0.716v-0.733h3.387 c1.205,0,1.988,0.598,1.988,1.559c0,0.952-0.784,1.458-1.542,1.491v0.025c0.767,0.059,1.078,0.489,1.154,1.154l0.034,0.312 c0.051,0.489,0.152,0.708,0.539,0.708C25.952,30.169,26.011,30.164,26.069,30.153L26.069,30.153z M17.838,28.316l-0.826-2.233 l-0.826,2.233H17.838z M24.435,26.598c0-0.615-0.379-0.944-1.137-0.944h-0.994v1.896h0.994 C24.047,27.55,24.435,27.204,24.435,26.598L24.435,26.598z M29.466,28.131c-0.005,0.143,0.027,0.286,0.093,0.413h1.003v1.491 c-0.315,0.13-0.653,0.196-0.994,0.194c-1.213,0-1.845-0.868-1.845-2.367c0-1.5,0.632-2.367,1.778-2.367 c0.671-0.035,1.28,0.393,1.474,1.036l0.093,0.236h0.607v-1.508c-0.693-0.347-1.458-0.526-2.233-0.522c-1.853,0-3.1,1.239-3.1,3.134 c0,1.904,1.213,3.117,3.1,3.117c0.824-0.022,1.632-0.235,2.359-0.624v-2.629h-2.241C29.494,27.857,29.462,27.993,29.466,28.131 L29.466,28.131z M38.845,27.862c-0.005,1.727-1.407,3.125-3.134,3.125s-3.129-1.397-3.134-3.125 c0.005-1.727,1.407-3.125,3.134-3.125S38.84,26.134,38.845,27.862z M37.463,27.862c0-1.491-0.615-2.359-1.752-2.359 c-1.137,0-1.752,0.868-1.752,2.359c0,1.5,0.607,2.359,1.752,2.359C36.857,30.221,37.463,29.361,37.463,27.862L37.463,27.862z"
            />
          </svg>
        </span>
        <Typography
          variant="body2"
          fontSize="12px"
          whiteSpace={'normal'}
          maxWidth={'65px'}
          lineHeight={1.1}
          textAlign={'left'}
        >
          and 2,400+ others
        </Typography>
      </Stack>
    </Stack>,
    <Stack direction={'column'} alignItems={'center'}>
      <Typography fontSize={'14px'} fontWeight={'bold'} marginBottom={'8px'}>
        Credit Card
      </Typography>
      <Stack
        direction={'row'}
        display={'inline-flex'}
        gap={'4px'}
        flexWrap={'wrap'}
        alignItems="center"
        justifyContent="center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="26px"
            height="26px"
          >
            <path
              fill="#1565C0"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
            />
            <path
              fill="#FFF"
              d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
            />
            <path
              fill="#FFC107"
              d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="26px"
            height="26px"
          >
            <path
              fill="#3F51B5"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
            />
            <path
              fill="#FFC107"
              d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"
            />
            <path
              fill="#FF3D00"
              d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="26px"
            height="26px"
          >
            <path
              fill="#E1E7EA"
              d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"
            />
            <path
              fill="#FF6D00"
              d="M45,35c0,2.2-1.8,4-4,4H16c0,0,23.6-3.8,29-15V35z M22,24c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.7-1.3-3-3-3S22,22.3,22,24z"
            />
            <path d="M11.2,21h1.1v6h-1.1V21z M17.2,24c0,1.7,1.3,3,3,3c0.5,0,0.9-0.1,1.4-0.3v-1.3c-0.4,0.4-0.8,0.6-1.4,0.6c-1.1,0-1.9-0.8-1.9-2c0-1.1,0.8-2,1.9-2c0.5,0,0.9,0.2,1.4,0.6v-1.3c-0.5-0.2-0.9-0.4-1.4-0.4C18.5,21,17.2,22.4,17.2,24z M30.6,24.9L29,21h-1.2l2.5,6h0.6l2.5-6h-1.2L30.6,24.9z M33.9,27h3.2v-1H35v-1.6h2v-1h-2V22h2.1v-1h-3.2V27z M41.5,22.8c0-1.1-0.7-1.8-2-1.8h-1.7v6h1.1v-2.4h0.1l1.6,2.4H42l-1.8-2.5C41,24.3,41.5,23.7,41.5,22.8z M39.2,23.8h-0.3v-1.8h0.3c0.7,0,1.1,0.3,1.1,0.9C40.3,23.4,40,23.8,39.2,23.8z M7.7,21H6v6h1.6c2.5,0,3.1-2.1,3.1-3C10.8,22.2,9.5,21,7.7,21z M7.4,26H7.1v-4h0.4c1.5,0,2.1,1,2.1,2C9.6,24.4,9.5,26,7.4,26z M15.3,23.3c-0.7-0.3-0.9-0.4-0.9-0.7c0-0.4,0.4-0.6,0.8-0.6c0.3,0,0.6,0.1,0.9,0.5l0.6-0.8C16.2,21.2,15.7,21,15,21c-1,0-1.8,0.7-1.8,1.7c0,0.8,0.4,1.2,1.4,1.6c0.6,0.2,1.1,0.4,1.1,0.9c0,0.5-0.4,0.8-0.9,0.8c-0.5,0-1-0.3-1.2-0.8l-0.7,0.7c0.5,0.8,1.1,1.1,2,1.1c1.2,0,2-0.8,2-1.9C16.9,24.2,16.5,23.8,15.3,23.3z" />
          </svg>
        </span>
      </Stack>
    </Stack>,
    <Stack direction={'column'} alignItems={'center'}>
      <Typography fontSize={'14px'} fontWeight={'bold'} marginBottom={'8px'}>
        Amex
      </Typography>
      <Stack
        direction={'row'}
        display={'inline-flex'}
        gap={'4px'}
        flexWrap={'wrap'}
        alignItems="center"
        justifyContent="center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="26px"
            height="26px"
          >
            <path
              fill="#1976D2"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
            />
            <path
              fill="#FFF"
              d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"
            />
          </svg>
        </span>
      </Stack>
    </Stack>,
    <RadioButtonUncheckedIcon />
  ),
  createData(
    'Send unlimited invoices',
    <CheckIcon />,
    1403500365,
    9596961,
    <CheckIcon />
  ),
  createData(
    'Get paid directly on your invoices',
    <CheckIcon />,
    60483973,
    301340,
    <RadioButtonUncheckedIcon />
  ),
  createData(
    'Payments are automatically recorded and bookkept',
    <CheckIcon />,
    327167434,
    9833520,
    <RadioButtonUncheckedIcon />
  ),
  createData(
    'Processing fees are automatically bookept, ready for tax time',
    <CheckIcon />,
    37602103,
    9984670,
    <RadioButtonUncheckedIcon />
  ),
  createData(
    'Choose payment method per invoice',
    <CheckIcon />,
    25475400,
    7692024,
    <CheckIcon />
  ),
  createData(
    'Create a unique payment link with checkouts (no invoice needed)',
    <RadioButtonUncheckedIcon />,
    83019200,
    357578,
    <RadioButtonUncheckedIcon />
  ),
  createData(
    'Get paid automatically with recurring invoices',
    <CheckIcon />,
    4857000,
    70273,
    <RadioButtonUncheckedIcon />
  ),
  createData(
    'Access to real, live support agent (chat and email)',
    <CheckIcon />,
    126577691,
    1972550,
    <Stack direction={'column'} alignItems={'center'}>
      <CheckIcon />
      <Typography variant="body2">Conditions apply*</Typography>
    </Stack>
  ),
  createData(
    'Get paid out in',
    <Typography variant="body2">2-7 business days</Typography>,
    <Typography variant="body2">2 business days</Typography>,
    <Typography variant="body2">2 business days</Typography>,
    <RadioButtonUncheckedIcon />
  ),
  createData(
    'Cost',
    <Stack direction={'column'}>
      <Typography variant="h3">1%</Typography>
      <Typography variant="body2">per transaction</Typography>
      <Typography variant="body2">($1.00 minimum fee)</Typography>
    </Stack>,
    <Stack direction={'column'}>
      <Typography variant="h3">2.9% + $0.60</Typography>
      <Typography variant="body2">per transaction</Typography>
    </Stack>,
    <Stack direction={'column'}>
      <Typography variant="h3">3.4% + $0.60</Typography>
      <Typography variant="body2">per transaction</Typography>
    </Stack>,
    <Typography variant="h5">Free</Typography>
  ),
];

const AcceptPayment = () => {
  return (
    <Box
      style={{
        backgroundColor: '#FFF',
        padding: '2% 2%',
        borderRadius: '10px',
      }}
    >
      <PageHeaderWithBack
        title="Accept Payments"
        url="professional-invoicing"
      />
      <Box
        style={{ display: 'flex', flexDirection: 'column', padding: '5% 10%' }}
      >
        <Box>
          <Typography
            style={{ fontSize: '14px', fontWeight: 'bold', color: '#9453e4' }}
          >
            Online Payments
          </Typography>
          <Typography
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#000',
              margin: '10px 0px',
            }}
          >
            Sell it and collect it
          </Typography>
          <Typography style={{ fontSize: '1 px', color: '#000' }}>
            Get paid fast by securely accepting credit cards, bank payments
            <br />
            (ACH), and Apple Pay directly on your invoices.
          </Typography>
          <Button
            variant="outlined"
            style={{ fontSize: '12px', margin: '10px 0px' }}
          >
            Get Started
          </Button>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#D3E8EE',
            borderRadius: '12px',
            padding: '48px 8px',
            margin: '15px 0px',
          }}
        >
          <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Grow your business and get a good night sleep
          </Typography>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            style={{ width: '70%', margin: '32px 0px' }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CheckIcon style={{ fontSize: '38px' }} />
              <Typography style={{ fontSize: '14px', textAlign: 'center' }}>
                Accept client's
                <br />
                online payments
              </Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CheckIcon style={{ fontSize: '38px' }} />
              <Typography style={{ fontSize: '14px', textAlign: 'center' }}>
                No monthly fees,
                <br />
                no cost to get started
              </Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CheckIcon style={{ fontSize: '38px' }} />
              <Typography style={{ fontSize: '14px', textAlign: 'center' }}>
                Get paid fast
                <br />
                in 2 business days
              </Typography>
            </Box>
          </Stack>
          <Stack direction={'row'} style={{ width: '70%' }}>
            <Box
              style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="https://illustrations.waveapps.com/2.11.0/spots/lp-payments--flow.png"
                alt=""
                style={{ height: '280px' }}
              />
            </Box>
            <Box
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>
                Watch your cash flow
                <br />
                <br />
              </Typography>
              <Typography style={{ fontSize: '12px' }}>
                Reduce the time between sending an invoice and getting paid. Get
                paid in as fast as 2 business days.
                <br />
                <br />
                Accept credit cards, Apple Pay, and bank payments for as little
                as 1% per transaction. Zero additional fees or commitments.
                <br />
                <br />
                Plus, with auto-charged cards and automated reminders, you'll
                get paid even faster with zero follow-ups needed. On-time and
                hassle-free.
              </Typography>
            </Box>
          </Stack>
          <Stack direction={'row'} style={{ width: '70%', margin: '32px 0px' }}>
            <Box
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>
                More control so you can grow
                <br />
                <br />
              </Typography>
              <Typography style={{ fontSize: '12px' }}>
                Customers care a lot about how they pay. Make them comfortable
                and they'll stay a while. Take online payments directly from
                your invoice and offer them your prefered method.
                <br />
                <br />
                Everyone is different. Customize an invoice to be paid with
                credit card, bank payments (ACH), both, or none. Use what you
                need. Only pay for what you use.
              </Typography>
            </Box>
            <Box
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <img
                src="https://illustrations.waveapps.com/2.11.0/spots/lp-payments--grow.png"
                alt=""
                style={{ height: '280px' }}
              />
            </Box>
          </Stack>
          <Stack direction={'row'} style={{ width: '70%' }}>
            <Box
              style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="https://illustrations.waveapps.com/2.11.0/spots/lp-payments--show.png"
                alt=""
                style={{ height: '280px' }}
              />
            </Box>
            <Box
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>
                You're the star of the Wave show
                <br />
                <br />
              </Typography>
              <Typography style={{ fontSize: '12px' }}>
                Wave helps you be the boss, not the bookkeeper. Take control and
                automate your business.
                <br />
                <br />
                Invoicing and Payments are both automatically bookkept. You'll
                never lose track of payments again, and you'll be all set at tax
                time. Your job just got easier.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFF',
            borderRadius: '12px',
            // padding: '25px',
            margin: '15px 0px',
            border: '1px solid #626567',
          }}
        >
          <Stack
            direction={'row'}
            style={{
              padding: '24px 40px',
              width: '100%',
              alignItems: 'center',
              borderBottom: '1px solid #b4c2cb',
            }}
          >
            <Box
              style={{
                width: '90%',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>
                Priced right for small businesses
              </Typography>
              <Typography style={{ fontSize: '12px' }}>
                Strictly pay-per-use. No hidden fees.
              </Typography>
            </Box>
            <Box
              style={{ width: '10%', display: 'flex', justifyContent: 'end' }}
            >
              <RemoveIcon style={{ fontSize: '38px', color: '#626567' }} />
            </Box>
          </Stack>
          <Stack
            direction={'row'}
            style={{
              padding: '24px 8px',
              width: '100%',
              alignItems: 'center',
              borderBottom: '1px solid #b4c2cb',
            }}
          >
            <Box
              style={{
                width: '90%',
                flexDirection: 'column',
              }}
            >
              <Typography
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                When you get started, you'll be able to control how you get paid
                on each invoice by switching payments on or off.
              </Typography>
            </Box>
          </Stack>
          <Paper sx={{ width: '100%', boxShadow: 'none' }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={1}></TableCell>
                    <TableCell align="center" colSpan={3}>
                      ON
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      OFF
                    </TableCell>
                  </TableRow>
                  {/* <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ top: 57, minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow> */}
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ width: '20%' }}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Typography
            margin="16px 8px"
            variant="body2"
            display="flex"
            alignSelf="start"
          >
            *Available to customers that finished payments onboarding and get
            paid by credit card or bank payments (ACH) at least once every 60
            days. How does Wave support work?{' '}
            <Link href="#" underline="hover">
              How does support work?
            </Link>
          </Typography>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFF',
            borderRadius: '12px',
            padding: '40px 80px',
            marginTop: '64px',
            border: '1px solid #626567',
            background: '#d3e8ee',
          }}
        >
          <Stack direction="row">
            <Avatar
              src="https://next.waveapps.com/2de8e6a2b679dd43ecde.jpeg"
              sx={{ height: '144px', width: '144px', marginRight: '40px' }}
            />
            <Stack direction="column">
              <Typography variant="body1" fontSize="19px" margin={'16px 0'}>
                It’s a blessing the online payment platform is integrated. I
                tell clients: however you want to pay, just click it. It's a
                secure portal. My clients are like “this is awesome.” Then, I
                get a notification and send them a receipt. The app is huge.
              </Typography>
              <Typography variant="h3">Giancarlo</Typography>
              <Typography variant="body1">
                PAWELEC Photo Inc., Photography
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#FFF',
            // borderRadius: '12px',
            padding: '40px 20px',
            marginTop: '64px',
            // border: '1px solid #626567',
          }}
        >
          <Box
            width={'50%'}
            padding="0 12px"
            display="flex"
            flexDirection={'row'}
          >
            <Box>
              <SupportOutlinedIcon fontSize="large" />
            </Box>
            <Box marginLeft="16px">
              <Typography variant="h4" marginBottom="8px">
                Support when you need it
              </Typography>
              <Typography variant="body1" margin="16px 0">
                When you activate Payments, you get access to a real, live
                customer support agent. Chat or email Monday to Friday from 9 AM
                to 4:45 PM EST.
              </Typography>
              <Stack direction="column">
                <Button
                  variant="outlined"
                  sx={{ width: '30%', marginBottom: '24px' }}
                >
                  Contact Support
                </Button>
                <Link href="#" underline="hover">
                  How does Account Dash Support Works?
                </Link>
              </Stack>
            </Box>
          </Box>
          <Box
            width={'50%'}
            padding="0 12px"
            display="flex"
            flexDirection={'row'}
          >
            <Box>
              <TipsAndUpdatesOutlinedIcon fontSize="large" />
            </Box>
            <Box marginLeft="16px">
              <Typography variant="h4" marginBottom="8px">
                Advisors at your service
              </Typography>
              <Typography variant="body1" margin="16px 0">
                Our bookkeeping and accounting experts can coach you — or do the
                work for you — during the year, when you’re closing year-end, or
                at tax time.
              </Typography>
              <Stack direction="column">
                <Button
                  variant="outlined"
                  sx={{ width: '40%', marginBottom: '24px' }}
                >
                  Book a free consultation
                </Button>
                <Link href="#" underline="hover">
                  Who are Advisors?
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{
            backgroundColor: '#FFF',
            borderRadius: '12px',
            padding: '40px 80px',
            marginTop: '64px',
            border: '1px solid #626567',
            background: '#dbc6f6',
          }}
        >
          <Typography variant="h3">
            Get paid in as fast as 2 business days.
          </Typography>
          <Button variant="contained" sx={{ width: '20%' }}>
            Try it now
          </Button>
        </Stack>
        <Stack direction="column" alignItems="center">
          <Typography variant="body1" margin="16px 0">
            Not ready to try it now?{' '}
            <Link href="#" underline="hover">
              Check out how to get started with Payments
            </Link>
          </Typography>
          <Typography variant="body2" margin="16px 0" marginTop={'40px'}>
            By continuing, you are agreeing to the Wave Payments{' '}
            <Link href="#" underline="hover">
              Terms of Service
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default AcceptPayment;
