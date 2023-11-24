import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Actions from '../Actions';
import { CustomLink } from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import { useIntl } from 'react-intl';
interface DataItem {
  id: number;
  status: string;
  date: string;
  number: number;
  customer: string;
  amount: string;
}
const data: DataItem[] = [
  {
    id: 1,
    status: 'Active',
    date: '2023/08/15',
    number: 2,
    customer: 'Designing',
    amount: '$100',
  },
  {
    id: 2,
    status: 'Active',
    date: '2023/08/15',
    number: 3,
    customer: 'Designing',
    amount: '$100',
  },
  {
    id: 3,
    status: 'Expired',
    date: '2023/08/15',
    number: 4,
    customer: 'Designing',
    amount: '$100',
  },
  {
    id: 4,
    status: 'Active',
    date: '2023/08/15',
    number: 5,
    customer: 'Designing',
    amount: '$100',
  },
  {
    id: 5,
    status: 'Expired',
    date: '2023/08/15',
    number: 6,
    customer: 'Designing',
    amount: '$100',
  },
  {
    id: 6,
    status: 'Active',
    date: '2023/08/15',
    number: 1,
    customer: 'Designing',
    amount: '$100',
  },
];
export default function DataTable() {
  const { messages } = useIntl();
  const actionsColumn: GridColDef<DataItem> = {
    field: 'actions',
    headerName: '',
    sortable: false,
    align: 'right',
    width: 250,
    renderCell: () => <Actions />,
  };
  const editColumn: GridColDef<DataItem> = {
    field: 'edit',
    headerName: '',
    sortable: false,
    align: 'left',
    renderHeader: (params) => (
      <strong style={{ fontWeight: 'bold' }}>{params.colDef.headerName}</strong>
    ),
    renderCell: () => <>{/* <LeftEditAction /> */}</>,
  };
  const columns = [
    editColumn,
    {
      field: 'status',
      headerName: messages['common.estimate.status'] as string,
      width: 250,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: (params: any) => {
        const statusValue = params.value;
        let textColor = 'black'; // Default color

        if (statusValue === 'Active') {
          textColor = 'green';
        } else if (statusValue === 'Expired') {
          textColor = 'red';
        }

        const cellStyle = {
          color: textColor,
        };

        return (
          <CustomLink to={`/details/${params.row.id}`} style={cellStyle}>
            {statusValue}
          </CustomLink>
        );
      },
    },
    {
      field: 'date',
      headerName: messages['common.estimate.date'] as string,
      width: 250,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
      ),
    },
    {
      field: 'customer',
      headerName: messages['common.estimate.customer'] as string,
      width: 250,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
      ),
    },
    {
      field: 'amount',
      headerName: messages['common.estimate.amount'] as string,
      width: 250,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
      ),
    },
    actionsColumn,
  ];
  return (
    <DataGrid
      rows={data}
      columns={columns}
      disableColumnMenu
      disableColumnSelector
      disableDensitySelector
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 400 },
        },
      }}
    />
  );
}
