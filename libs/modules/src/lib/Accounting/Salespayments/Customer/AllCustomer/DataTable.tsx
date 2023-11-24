import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { CustomLink, StyledHeader } from '../../../Global/Styling';
import { useIntl } from 'react-intl';
import { Stack } from '@mui/material';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
interface DataTableProps {
  jsonData: any[];
  columns: string[];
}
interface DataItem {
  [key: string]: string;
}
const StyledActionHeader = styled.strong`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  text-align: right;
  padding-right: 31px;
`;
const DataTable: React.FC<DataTableProps> = ({ columns, jsonData }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);
  const { messages } = useIntl();
  const [allColumnsRendered, setAllColumnsRendered] = useState(false);
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
    renderCell: (params: any) => (
      <div>{/* <Actions customerId={params.row.id} /> */}</div>
    ),
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
              e.currentTarget.style.textDecoration = 'underline';
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
    width: 200,
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
              e.currentTarget.style.textDecoration = 'underline';
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
    width: 150,
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
          <span style={{ ...cellStyle, textAlign: 'right' }}>
            {numericValue.toLocaleString()}
          </span>
        </Stack>
      );
    },
  };

  const currencyTypeColumn: GridColDef = {
    field: 'currencyType',
    headerName: messages['customer.currencyType'] as string,
    width: 130,
    renderHeader: (params) => <StyledHeader>Currency Type</StyledHeader>,
    renderCell: (params: any) => <strong>{params.value}</strong>,
  };
  const statusColumn: GridColDef = {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderHeader: (params) => <StyledHeader>Status</StyledHeader>,
    renderCell: (params: any) => (
      <strong style={{ color: params.value === 'Active' ? 'green' : 'red' }}>
        {params.value}
      </strong>
    ),
  };
  const amountColumn: GridColDef = {
    field: 'amount',
    headerName: 'Amount',
    width: 130,
    renderHeader: (params) => <StyledHeader>Amount</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const dateColumn: GridColDef = {
    field: 'date',
    headerName: 'Date',
    width: 130,
    renderHeader: (params) => <StyledHeader>Date</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const typeColumn: GridColDef = {
    field: 'type',
    headerName: 'Type',
    width: 130,
    renderHeader: (params) => <StyledHeader>Type</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const descriptionColumn: GridColDef = {
    field: 'description',
    headerName: 'Description',
    width: 130,
    renderHeader: (params) => <StyledHeader>Description</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const taxColumn: GridColDef = {
    field: 'tax',
    headerName: 'TAX/VAT',
    width: 130,
    renderHeader: (params) => <StyledHeader>TAX/VAT</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const priceColumn: GridColDef = {
    field: 'price',
    headerName: 'Price',
    width: 130,
    renderHeader: (params) => <StyledHeader>Price</StyledHeader>,
    renderCell: (params: any) => <span>{params.value}</span>,
  };
  const otherColumns: GridColDef<DataItem>[] = columns
    .filter((colName) => colName !== 'actions')
    .map((colName) => {
      if (colName === 'name') {
        return {
          field: 'name',
          headerName: messages['common.name'] as string,
          flex: 1,
          minWidth: 70,
          renderHeader: (params: any) => (
            <StyledHeader>{params.colDef.headerName}</StyledHeader>
          ),
          renderCell: (params: any) => (
            <CustomLink to={`view/${params.row.id}`}>{params.value}</CustomLink>
          ),
        };
      } else if (colName === 'email' && !isMobileView) {
        return emailColumn;
      } else if (colName === 'phone' && !isMobileView) {
        return phoneColumn;
      } else if (colName === 'currencyType') {
        return currencyTypeColumn;
      } else if (colName === 'balanceOverdue') {
        return balanceOverdueColumn;
      } else if (colName === 'status') {
        return statusColumn;
      } else if (colName === 'date') {
        return dateColumn;
      } else if (colName === 'amount') {
        return amountColumn;
      } else if (colName === 'description') {
        return descriptionColumn;
      } else if (colName === 'price') {
        return priceColumn;
      } else if (colName === 'tax') {
        return taxColumn;
      } else if (colName === 'type') {
        return typeColumn;
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
    }
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [jsonData, columns]);
  return data.length > 0 ? (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={data}
          columns={[
            ...otherColumns,
            ...(allColumnsRendered ? [actionsColumn] : []),
          ]}
          disableColumnMenu
          disableColumnSelector
          disableDensitySelector
          disableRowSelectionOnClick={true}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          getRowId={(row) => row.id}
        />
      </div>
    </div>
  ) : null;
};
export default DataTable;
