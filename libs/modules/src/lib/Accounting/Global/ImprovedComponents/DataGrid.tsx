import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridOverlay,
} from '@mui/x-data-grid';
import Actions from './Actions';
import { StyledHeader } from '../Styling';
import { useIntl } from 'react-intl';
import { Avatar, Box, Chip, Stack } from '@mui/material';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { formatDistanceToNow, format } from 'date-fns';
const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        flexDirection: 'column',
        '& .ant-empty-img-1': {
          fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
        },
        '& .ant-empty-img-2': {
          fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
        },
        '& .ant-empty-img-3': {
          fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
        },
        '& .ant-empty-img-4': {
          fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
        },
        '& .ant-empty-img-5': {
          fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
          fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
        },
      },
      label: {
        marginTop: theme.spacing(1),
      },
      tableStyle: {
        border: 'none',
        minHeight: '450px',
        height: '450px',
      },
    }),
  { defaultTheme }
);
function CustomNoRowsOverlay() {
  const classes = useStyles();
  return (
    <GridOverlay className={classes.root}>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <div className={classes.label}>No Rows</div>
    </GridOverlay>
  );
}
interface DataTableProps {
  jsonData: any[];
  columns: string[];
  link: string;
  name: string;
  fetchData: (value: boolean) => void;
  deleteRecord: (value: boolean) => void;
  onCellClick: (id: string) => void;
  actionItems: Array<{ name: string, }>;
  canDelete:boolean;
}
interface DataItem {
  [key: string]: string;
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111827;
  &:hover {
    color: #0a8fdc;
  }
`;
const StyledActionHeader = styled.strong`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  text-align: right;
  padding-right: 31px;
`;
const DataTable: React.FC<DataTableProps> = ({
  columns,
  jsonData,
  link,
  name,
  fetchData,
  deleteRecord,
  onCellClick,
  actionItems,
  canDelete,
}) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);
  const { messages } = useIntl();
  const [allColumnsRendered, setAllColumnsRendered] = useState(false);
  const classes = useStyles();
  const getDateFormatFromLocalStorage = () => {
    return localStorage.getItem('selectedCurrencyType') || 'MM/dd/yyyy';
  };
  const [selectedType, setSelectedType] = useState(() => {
    const storedValue = localStorage.getItem('selectedType');
    return storedValue || 'Standard';
  });
  const formatDate = (date: string) => {
    const date1 = new Date(date);
    if (selectedType === 'Friendly') {
      const timeAgo = formatDistanceToNow(date1, { addSuffix: true });
      return timeAgo;
    } else {
      const dateFormat = getDateFormatFromLocalStorage();
      const formattedDate = format(date1, dateFormat);
      return formattedDate;
    }
  };
  const actionsColumn: GridColDef<DataItem> = {
    field: 'actions',
    headerName: messages['common.action'] as string,
    sortable: false,
    align: 'right',
    width: 100,
    headerAlign: 'right',
    renderHeader: (params) => (
      <StyledActionHeader>{params.colDef.headerName}</StyledActionHeader>
    ),
    renderCell: (params: any) => {
      const id = params.row.id; 
      return (
        <div onClick={() => onCellClick(id)}>
          <Actions
            customerId={id}
            name={name}
            link={link}
            fetchData={fetchData}
            deleteRecord={deleteRecord}
            actionItems={actionItems}
            canDelete={canDelete}
          />
        </div>
      );
    },
  };
  const emailColumn: GridColDef = {
    field: 'email',
    headerName: messages['common.email'] as string,
    width: 220,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params) => {
      const email = params.value;
      if (email && !isMobileView) {
        return (
          <a
            href={`mailto:${email}`}
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#1976d2';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textDecoration = 'none';
              e.currentTarget.style.color = '#000';
            }}
          >
            {email}
          </a>
        );
      }
      return null;
    },
  };
  const phoneColumn: GridColDef = {
    field: 'phone',
    headerName: messages['common.phone'] as string,
    width: 180,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params) => {
      const phoneNumber = params.value;
      if (phoneNumber && !isMobileView) {
        return (
          <a
            href={`tel:${phoneNumber}`}
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#1976d2';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textDecoration = 'none';
              e.currentTarget.style.color = '#000';
            }}
          >
            {phoneNumber}
          </a>
        );
      }
      return null;
    },
  };
  const mobileColumn: GridColDef = {
    field: 'mobile',
    headerName: messages['"quotation.grid.Mobile#"'] as string,
    width: 180,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params) => {
      const phoneNumber = params.value;
      if (phoneNumber && !isMobileView) {
        return (
          <a
            href={`tel:${phoneNumber}`}
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#1976d2';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textDecoration = 'none';
              e.currentTarget.style.color = '#000';
            }}
          >
            {phoneNumber}
          </a>
        );
      }
      return null;
    },
  };
  const balanceOverdueColumn: GridColDef = {
    field: 'balanceOverdue',
    headerName: messages['customer.balanceOverdue'] as string,
    width: 170,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params) => {
      const value = params.value;
      const numericValue = parseFloat(
        value.replace(/,/g, '').replace('(', '-').replace(')', '')
      );
      const textColor = numericValue < 0 ? 'red' : 'green';
      const cellStyle = {
        color: textColor,
        textAlign: 'right',
      };
      return (
        <Stack
          direction={'row'}
          justifyContent={'space-around'}
          style={{ width: '100%' }}
        >
          <strong style={{ ...cellStyle, textAlign: 'right' }}>
            {numericValue.toLocaleString()}
          </strong>
        </Stack>
      );
    },
  };
  const currencyTypeColumn: GridColDef = {
    field: 'currencyType',
    headerName: messages['quotation.grid.Currency'] as string,
    width: 80,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName} </StyledHeader>
    ),
    renderCell: (params: any) => <strong>{params.value}</strong>,
  };
  const currencyColumn: GridColDef = {
    field: 'currencyId',
    headerName: messages['quotation.grid.Currency'] as string,
    width: 190,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName} </StyledHeader>
    ),
    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right' }}>{params.value}</strong>
      </Stack>
    ),
  };
  const statusColumn: GridColDef = {
    field: 'status',
    headerName: messages['common.status'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => {
      const bgcolor =
        params.value === 'Active' ||params.value === 'false' || params.value === 'Paid'
          ? '#0080003d'
          : params.value === 'Sent'
          ? '#2997ff3d'
          : params.value === 'Cancelled'
          ? '#8080803d'
          : '#ff00003d';
      const color =
        params.value === 'Active' ||params.value === 'true' || params.value === 'Paid'
          ? 'green'
          : params.value === 'Sent'
          ? '#0A8FDC'
          : params.value === 'Cancelled'
          ? 'gray'
          : 'red';

      return (
        <>
          <Chip
            label={params.value}
            style={{
              backgroundColor: bgcolor,
              color: color,
              fontSize: '10px',
              height: '50%',
            }}
          />
        </>
      );
    },
  };

  const numberColumn: GridColDef = {
    field: 'number',
    headerName: messages['common.estimate.number'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),

    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right' }}>{params.value}</strong>
      </Stack>
    ),
  };
  const amountColumn: GridColDef = {
    field: 'amount',
    headerName: messages['common.amount'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right' }}>{params.value}</strong>
      </Stack>
    ),
  };
  const dateColumn: GridColDef = {
    field: 'date',
    headerName: messages['common.date'] as string,
    width: 100,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => <span>{formatDate(params.value)}</span>,
  };
  const MAX_DESCRIPTION_LENGTH = 20;
  const accountTypeColumn: GridColDef = {
    field: 'accountType',
    headerName: messages['accountApp.accountType'] as string,
    width: 190,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const detailTypeColumn: GridColDef = {
    field: 'DetailType',
    headerName: 'Detailed Type',
    width: 130,
    renderHeader: (params) => <StyledHeader>Detailed Type</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const balanceColumn: GridColDef = {
    field: 'balance',
    headerName: messages['accountApp.balance'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const bankBalanceColumn: GridColDef = {
    field: 'bankBalance',
    headerName: 'Bank Balance',
    width: 130,
    renderHeader: (params) => <StyledHeader>Bank Balance</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const typeColumn: GridColDef = {
    field: 'type',
    headerName: messages['common.type'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => {
      const bgcolor =
        params.value === 'Sell' || params.value === 'Full Time'
          ? '#0080003d'
          : params.value === 'Part Time'
          ? '#2997ff3d'
          : params.value === 'Buy'
          ? '#ff00003d'
          : params.value === 'Dismissed'
          ? '#ff00003d'
          : params.value === 'Active'
          ? '#0080003d'
          : params.value === 'Regular'
          ? 'rgb(0 140 255 / 23%)'
          : '#8080803d';
      const color =
        params.value === 'Sell' || params.value === 'Full Time'
          ? 'green'
          : params.value === 'Part Time'
          ? '#0A8FDC'
          : params.value === 'Buy'
          ? 'red'
          : params.value === 'Dismissed'
          ? 'red'
          : params.value === 'Active'
          ? 'green'
          : params.value === 'Regular'
          ? 'rgb(10, 143, 220)'
          : 'gray';

      return (
        <Chip
          label={params.value}
          style={{
            backgroundColor: bgcolor,
            color: color,
            fontSize: '10px',
            height: '50%',
          }}
        />
      );
    },
  };

  const descriptionColumn: GridColDef = {
    field: 'description',
    headerName: messages['common.description'] as string,
    flex: 3,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <span title={params.value}>
        {params.value.length > MAX_DESCRIPTION_LENGTH
          ? `${params.value.slice(0, MAX_DESCRIPTION_LENGTH)}...`
          : params.value}
      </span>
    ),
  };

  const taxColumn: GridColDef = {
    field: 'tax',
    headerName: messages['common.tax/vat'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),

    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right' }}>{params.value}</strong>
      </Stack>
    ),
  };
  const salesTaxColumn: GridColDef = {
    field: 'saleTax',
    headerName: messages['common.tax/vat'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),

    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right' }}>{params.value}</strong>
      </Stack>
    ),
  };
  const priceColumn: GridColDef = {
    field: 'price',
    headerName: messages['dashboard.price'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right' }}>{params.value}</strong>
      </Stack>
    ),
  };
  const directDepositColumn: GridColDef = {
    field: 'directDeposit',
    headerName: messages['vendors.directDeposit'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right', width: '100%' }}>
          {params.value}
        </strong>
      </Stack>
    ),
  };
  const salaryColumn: GridColDef = {
    field: 'salary',
    headerName: messages['quotation.grid.Salary|Currency'] as string,
    width: 130,
    renderHeader: (params) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right', width: '100%' }}>
          {params.value}
        </strong>
      </Stack>
    ),
  };
  const nameColumn: GridColDef = {
    field: 'name',
    headerName: messages['common.name'] as string,
    flex: 3,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <StyledLink to={`${link}/view/${params.row.id}`}>
        {params.value}
      </StyledLink>
    ),
  };
  const vendorTypeColumn: GridColDef = {
    field: 'vendorType',
    headerName: messages['vendor.vendorTypes'] as string,
    flex: 3,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => <StyledLink to="">{params.value}</StyledLink>,
  };
  const vendorViewColumn: GridColDef = {
    field: 'view',
    headerName: messages['common.view'] as string,
    width: 250,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <Stack>
        <span>{params.value}</span>
      </Stack>
    ),
  };
  const fullNameColumn: GridColDef = {
    field: 'name',
    headerName: messages['common.fullName'] as string,
    width: 190,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <>
        {' '}
        <Box style={{ paddingRight: '5px' }}>
          <Avatar
            sx={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
            }}
            src={params.imageUrl || 'placeholder.jpg'}
            alt={params.value}
          />
        </Box>
        <StyledLink to={`${link}/view/${params.row.id}`}>
          {params.value}
        </StyledLink>
      </>
    ),
  };
  const invoiceNameColumn: GridColDef = {
    field: 'customerName',
    headerName: messages['customer.customerName'] as string,
    flex: 3,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <StyledLink to={`/salespayment/customer/view/${params.row.id}`}>
        {params.value}
      </StyledLink>
    ),
  };
  const estimateNameColumn: GridColDef = {
    field: 'name',
    headerName: messages['customer.customerName'] as string,
    flex: 3,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <StyledLink to={`/salespayment/customer/view/${params.row.id}`}>
        {params.value}
      </StyledLink>
    ),
  };
  const invoiceNoColumn: GridColDef = {
    field: 'invoiceNumber',
    headerName: messages['invoice.number'] as string,
    width: 90,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <StyledLink to={`${link}/view/${params.row.id}`}>
        {params.value}
      </StyledLink>
    ),
  };
  const estimateNoColumn: GridColDef = {
    field: 'estimate#',
    headerName: messages['quotation.grid.QuotationNumber'] as string,
    width: 90,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <StyledLink to={`${link}/view/${params.row.id}`}>
        {params.value}
      </StyledLink>
    ),
  };
  const vnameColumn: GridColDef = {
    field: 'vendorName',
    headerName: messages['common.name'] as string,
    flex: 1,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <StyledLink to={`${link}/view/${params.row.id}`}>
        {params.value}
      </StyledLink>
    ),
  };
  const titleColumn: GridColDef = {
    field: 'accountTitle',
    headerName: messages['common.name'] as string,
    flex: 1,

    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <StyledLink to={`${link}/view/${params.row.id}`}>
        {params.value}
      </StyledLink>
    ),
  };
  const dueDateColumn: GridColDef = {
    field: 'dueDate',
    headerName: messages['common.dueDate'] as string,

    width: 100,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    // renderCell: (params: any) => <span>{params.value}</span>,
    renderCell: (params: any) => <span>{formatDate(params.value)}</span>,
  };
  const expireDateColumn: GridColDef = {
    field: 'expireDate',
    headerName: messages['quotation.grid.ExpireDate'] as string,
    width: 100,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const hireDateColumn: GridColDef = {
    field: 'hireDate',
    headerName: messages['common.hireDate'] as string,
    width: 100,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const amountDueColumn: GridColDef = {
    field: 'amountDue',
    headerName: messages['common.amountDue'] as string,
    width: 130,
    renderHeader: (params: any) => (
      <StyledHeader>{params.colDef.headerName}</StyledHeader>
    ),
    renderCell: (params: any) => (
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        style={{ width: '100%' }}
      >
        <strong style={{ textAlign: 'right' }}>{params.value}</strong>
      </Stack>
    ),
  };
  const otherColumns: GridColDef<DataItem>[] = columns
    .filter((colName) => colName !== 'actions')
    .map((colName) => {
      if (colName === 'name' && name === 'Employee') {
        return fullNameColumn;
      } else if (colName === 'name' && name === 'Quotations') {
        return estimateNameColumn;
      } else if (colName === 'vendorName') {
        return vnameColumn;
      } else if (colName === 'vendorType') {
        return vendorTypeColumn;
      } else if (colName === 'expireDate') {
        return expireDateColumn;
      } else if (colName === 'view') {
        return vendorViewColumn;
      } else if (colName === 'name') {
        return nameColumn;
      } else if (colName === 'saleTax' && !isMobileView) {
        return salesTaxColumn;
      }else if (colName === 'invoiceNumber') {
        return invoiceNoColumn;
      } else if (colName === 'estimate#') {
        return estimateNoColumn;
      } else if (colName === 'accountTitle') {
        return titleColumn;
      } else if (colName === 'customerName') {
        return invoiceNameColumn;
      } else if (colName === 'email' && !isMobileView) {
        return emailColumn;
      } else if (colName === 'phone' && !isMobileView) {
        return phoneColumn;
      } else if (colName === 'mobile' && !isMobileView) {
        return mobileColumn;
      } else if (colName === 'currencyType' && !isMobileView) {
        return currencyTypeColumn;
      } else if (colName === 'salary' && !isMobileView) {
        return salaryColumn;
      } else if (colName === 'currencyId' && !isMobileView) {
        return currencyColumn;
      } else if (colName === 'balanceOverdue' && !isMobileView) {
        return balanceOverdueColumn;
      } else if (colName === 'status' && !isMobileView) {
        return statusColumn;
      } else if (colName === 'date' && !isMobileView) {
        return dateColumn;
      } else if (colName === 'hireDate' && !isMobileView) {
        return hireDateColumn;
      } else if (colName === 'amount' && !isMobileView) {
        return amountColumn;
      } else if (colName === 'description' && !isMobileView) {
        return descriptionColumn;
      } else if (colName === 'price' && !isMobileView) {
        return priceColumn;
      } else if (colName === 'tax' && !isMobileView) {
        return taxColumn;
      } else if (colName === 'type' && !isMobileView) {
        return typeColumn;
      } else if (colName === 'directDeposit' && !isMobileView) {
        return directDepositColumn;
      } else if (colName === 'number' && !isMobileView) {
        return numberColumn;
      } else if (colName === 'dueDate' && !isMobileView) {
        return dueDateColumn;
      } else if (colName === 'amountDue' && !isMobileView) {
        return amountDueColumn;
      } else if (colName === 'bankBalance' && !isMobileView) {
        return bankBalanceColumn;
      } else if (colName === 'balance' && !isMobileView) {
        return balanceColumn;
      } else if (colName === 'DetailType' && !isMobileView) {
        return detailTypeColumn;
      } else if (colName === 'accountType' && !isMobileView) {
        return accountTypeColumn;
      }
      return null;
    })
    .filter(Boolean) as GridColDef<DataItem>[];
  useEffect(() => {
    if (columns.includes('actions')) {
      setAllColumnsRendered(true);
    }
    if (Array.isArray(jsonData)) {
      const transformedData = jsonData.map((item) => {
        const transformedItem: DataItem = {};
        columns.forEach((colName) => {
          transformedItem[colName] = item[colName] || '';
        });
        return transformedItem;
      });
      setData(transformedData);
      transformedData.forEach((row) => {
        console.log('Row ID:', row.id);
      });
    }
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [jsonData, columns]);

  return (
    <DataGrid
      classes={{ root: classes.tableStyle }}
      density="compact"
      pagination
      rows={data}
      columns={[
        ...otherColumns,
        ...(allColumnsRendered ? [actionsColumn] : []),
      ]}
      disableColumnMenu
      disableColumnFilter={isMobileView}
      disableColumnSelector
      disableDensitySelector
      disableRowSelectionOnClick={true}
      slots={{
        toolbar: GridToolbar,
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      getRowId={(row) => row.id}
      initialState={{
        pagination: { paginationModel: { pageSize: 25 } },
      }}
    />
  );
};
export default DataTable;
