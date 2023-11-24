import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Actions from '../Actions';
import { CustomLink } from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
interface DataItem {
  id: number;
  name: string;
  price: string;
}
const data: DataItem[] = [
  {
    id: 1,
    name: 'Name 1',
    price: '$250',
  },
  {
    id: 2,
    name: 'Name 2',
    price: '$250',
  },
  {
    id: 3,
    name: 'Name 3',
    price: '$250',
  },
  {
    id: 4,
    name: 'Name 4',
    price: '$250',
  },
  {
    id: 5,
    name: 'Name 5',
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
  {
    id: 9,
    name: 'Name 9',
    price: '$250',
  },
  {
    id: 10,
    name: 'Name 10',
    price: '$250',
  },
  {
    id: 11,
    name: 'Name 11',
    price: '$250',
  },
  {
    id: 12,
    name: 'Name 12',
    price: '$250',
  },
  {
    id: 13,
    name: 'Name 13',
    price: '$250',
  },
  {
    id: 14,
    name: 'Name 14',
    price: '$250',
  },
  {
    id: 15,
    name: 'Name 15',
    price: '$250',
  },
  {
    id: 16,
    name: 'Name 16',
    price: '$250',
  },
  {
    id: 17,
    name: 'Name 17',
    price: '$250',
  },
  {
    id: 18,
    name: 'Name 18',
    price: '$250',
  },
];
export default function DataTable() {
  const actionsColumn: GridColDef<DataItem> = {
    field: 'actions',
    headerName: '',
    sortable: false,
    align: 'right',
    width: 220,
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
    renderHeader: (params) => (
      <strong style={{ fontWeight: 'bold' }}>{params.colDef.headerName}</strong>
    ),
    renderCell: () => (
      <>
        {/* <LeftEditAction /> */}
      </>
    ),
  };
  const columns = [
    editColumn,
    {
      field: 'name',
      headerName: 'Name',
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
      field: 'directDeposit',
      headerName: '',
      width: 180,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
      ),
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 220,
      renderHeader: (params: any) => (
        <strong style={{ fontWeight: 'bold', fontSize: '16px' }}>
          {params.colDef.headerName}
        </strong>
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
            quickFilterProps: { debounceMs: 400 },
          },
        }}
        style={{ paddingLeft: '90px', paddingRight: '90px' }}
      />
    </>
  );
}
