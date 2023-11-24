import { DataGrid } from '@mui/x-data-grid';
import jsonData from '../../../Global/DummyData/Customer.json';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Age',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'balanceOverdue',
    headerName: 'Balance Overdue',
    type: 'string',
    width: 150,
    editable: true,
  },
];

interface DataItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  balanceOverdue: string;
}

export default function DataGrid1() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    console.log(jsonData);
    setData(jsonData);
  }, []);

  return data.length > 0 ? (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  ) : null;
}
