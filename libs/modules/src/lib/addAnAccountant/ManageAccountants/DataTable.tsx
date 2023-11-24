import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Actions from './Actions/index';
import {
  CustomLink,
  StyledHeader,
} from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';

import { useIntl } from 'react-intl';
// import LeftEditAction from '../../customer/Actions/LeftEditAction';
interface DataItem {
  id: number;
  name: string;
  accountType: string;
  detailType: string;
  balance: string;
  bankBalance: string;
  email: string;
}
const data: DataItem[] = [
  {
    id: 1,
    name: 'Account 1',
    accountType: 'Account Type 1',
    detailType: 'Detailed Type 1',
    balance: 'Balance 1',
    bankBalance: 'Bank Balance 1',
    email: 'email 1',
  },
  {
    id: 2,
    name: 'Account 2',
    accountType: 'Account Type 2',
    detailType: 'Detailed Type 2',
    balance: 'Balance 2',
    bankBalance: 'Bank Balance 2',
    email: 'email 1',
  },
  {
    id: 3,
    name: 'Account 3',
    accountType: 'Account Type 3',
    detailType: 'Detailed Type 3',
    balance: 'Balance 3',
    bankBalance: 'Bank Balance 3',
    email: 'email 1',
  },
  {
    id: 4,
    name: 'Account 4',
    accountType: 'Account Type 4',
    detailType: 'Detailed Type 4',
    balance: 'Balance 4',
    bankBalance: 'Bank Balance 4',
    email: 'email 1',
  },
  {
    id: 5,
    name: 'Account 5',
    accountType: 'Account Type 5',
    detailType: 'Detailed Type 5',
    balance: 'Balance 5',
    bankBalance: 'Bank Balance 5',
    email: 'email 1',
  },
  {
    id: 6,
    name: 'Account 6',
    accountType: 'Account Type 6',
    detailType: 'Detailed Type 6',
    balance: 'Balance 6',
    bankBalance: 'Bank Balance 6',
    email: 'email 1',
  },
  {
    id: 7,
    name: 'Account 7',
    accountType: 'Account Type 7',
    detailType: 'Detailed Type 7',
    balance: 'Balance 7',
    bankBalance: 'Bank Balance 7',
    email: 'email 1',
  },
  {
    id: 8,
    name: 'Account 8',
    accountType: 'Account Type 8',
    detailType: 'Detailed Type 8',
    balance: 'Balance 8',
    bankBalance: 'Bank Balance 8',
    email: 'email 1',
  },
  {
    id: 9,
    name: 'Account 9',
    accountType: 'Account Type 9',
    detailType: 'Detailed Type 9',
    balance: 'Balance 9',
    bankBalance: 'Bank Balance 9',
    email: 'email 1',
  },
  {
    id: 10,
    name: 'Account 10',
    accountType: 'Account Type 10',
    detailType: 'Detailed Type 10',
    balance: 'Balance 10',
    bankBalance: 'Bank Balance 10',
    email: 'email 1',
  },
];
export default function DataTable() {
  const { messages } = useIntl();
  const actionsColumn: GridColDef<DataItem> = {
    field: 'actions',
    headerName: '',
    sortable: false,
    align: 'right',
    width: 140,
    renderCell: () => (
      <>
        <Actions />
      </>
    ),
  };
  const editColumn: GridColDef<DataItem> = {
    field: 'edit',
    headerName: '',
    sortable: false,
    align: 'left',
    width: 100,

    renderCell: () => <>{/* <LeftEditAction /> */}</>,
  };
  const columns = [
    editColumn,
    {
      field: 'name',
      headerName: messages['accountant.name'] as string,
      width: 360,
      renderHeader: (params: any) => (
        <StyledHeader>{params.colDef.headerName}</StyledHeader>
      ),
      renderCell: (params: any) => (
        <CustomLink to={`/details/${params.row.id}`}>{params.value}</CustomLink>
      ),
    },
    {
      field: 'email',
      headerName: messages['common.email'] as string,
      width: 200,
      renderHeader: (params: any) => (
        <StyledHeader>{params.colDef.headerName}</StyledHeader>
      ),
    },
    actionsColumn,
  ];
  return (
    <>
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
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </>
  );
}
