import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Actions from '../Actions';
// import LeftEditAction from '../../customer/Actions/LeftEditAction';
import { CustomLink } from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import { useIntl } from 'react-intl';
interface DataItem {
  id: number;
  name: string;
  price: string;
}
const data: DataItem[] = [
  {
    id: 1,
    name: 'Name 2',
    price: '$250',
  },
  {
    id: 2,
    name: 'Name 3',
    price: '$250',
  },
  {
    id: 3,
    name: 'Name 4',
    price: '$250',
  },
  {
    id: 4,
    name: 'Name 5',
    price: '$250',
  },
  {
    id: 5,
    name: 'Name 6',
    price: '$250',
  },
  {
    id: 6,
    name: 'Name 6',
    price: '$250',
  },
  {
    id: 7,
    name: 'Name 7',
    price: '$250',
  },
  {
    id: 8,
    name: 'Name 8',
    price: '$250',
  },

  // {
  //   id: 11,
  //   name: 'Name 11',
  //   email: 'Email 11',
  //   directDeposit: 'Direct Deposite 11',
  // },
  // {
  //   id: 12,
  //   name: 'Name 12',
  //   email: 'Email 12',
  //   directDeposit: 'Direct Deposite 12',
  // },
  // {
  //   id: 13,
  //   name: 'Name 13',
  //   email: 'Email 13',
  //   directDeposit: 'Direct Deposite 13',
  // },
  // {
  //   id: 14,
  //   name: 'Name 14',
  //   email: 'Email 14',
  //   directDeposit: 'Direct Deposite 14',
  // },
  // {
  //   id: 15,
  //   name: 'Name 15',
  //   email: 'Email 15',
  //   directDeposit: 'Direct Deposite 15',
  // },
  // {
  //   id: 16,
  //   name: 'Name 16',
  //   email: 'Email 16',
  //   directDeposit: 'Direct Deposite 16',
  // },
  // {
  //   id: 17,
  //   name: 'Name 17',
  //   email: 'Email 17',
  //   directDeposit: 'Direct Deposite 17',
  // },
  // {
  //   id: 18,
  //   name: 'Name 18',
  //   email: 'Email 18',
  //   directDeposit: 'Direct Deposite 18',
  // },
];
export default function DataTable() {
  const { messages } = useIntl();
  const actionsColumn: GridColDef<DataItem> = {
    field: 'actions',
    headerName: '',
    sortable: false,
    align: 'right',
    width: 620,
    renderCell: () => <Actions />,
  };
  const editColumn: GridColDef<DataItem> = {
    field: 'edit',
    headerName: '',
    sortable: false,
    align: 'left',
    width: 100,
    renderHeader: (params) => (
      <strong style={{ fontWeight: 'bold' }}>{params.colDef.headerName}</strong>
    ),
    // renderCell: () => <>{/* <LeftEditAction /> */}</>,
  };
  const columns = [
    editColumn,
    {
      field: 'name',
      headerName: messages['common.name'] as string,
      width: 220,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
      ),
      renderCell: (params: any) => (
        <CustomLink to={`/details/${params.row.id}`}>{params.value}</CustomLink>
      ),
    },
    {
      field: '',
      headerName: messages[''] as string,
      width: 220,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
      ),
    },
    {
      field: 'price',
      headerName: messages['common.productservices.price'] as string,
      width: 180,
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
