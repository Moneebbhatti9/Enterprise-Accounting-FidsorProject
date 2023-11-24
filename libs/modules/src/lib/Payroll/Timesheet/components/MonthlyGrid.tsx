import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RowData } from '../index';

interface MonthlyGridProps {
  rowData: RowData[];
  onDataChange: (data: RowData[]) => void;
}

const MonthlyGrid: React.FC<MonthlyGridProps> = ({ rowData, onDataChange }) => {
  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowIndex: number,
    valueArray: number[],
    setData: (data: number[]) => void
  ) => {
    const newValueArray = [...valueArray];
    newValueArray[rowIndex] = parseFloat(e.target.value);
    setData(newValueArray);
    onDataChange([...rowData]); // Pass the updated data to the parent component
  };
  const calculateTotal = (values: number[]) => {
    return values.reduce((acc, value) => acc + value, 0);
  };

  return (
    <Grid container rowSpacing={4} columnSpacing={2}>
      {rowData.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <Grid item sm={3}>
            <Stack>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Typography fontSize={'12px'} fontWeight={'500'}>
                  {row.name}
                </Typography>
              </Stack>
              <Typography
                fontSize={'12px'}
                fontWeight={'400'}
                color={'#606060'}
              >
                {row.type}
              </Typography>
            </Stack>
          </Grid>
          {row.values.map((value, columnIndex) => (
            <Grid
              item
              sm={1}
              display={'flex'}
              justifyContent={'center'}
              key={columnIndex}
            >
              <TextField
                placeholder={'0.00'}
                style={{ width: '55px' }}
                value={value}
                onChange={(e) =>
                  handleValueChange(e, columnIndex, row.values, (data) => {
                    row.values = data; // Update the row data
                  })
                }
              />
            </Grid>
          ))}
          <Grid item sm={2} display={'flex'} justifyContent={'end'}>
            <TextField
              placeholder={calculateTotal(row.values).toFixed(2)}
              style={{ width: '70px' }}
              disabled
            />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default MonthlyGrid;
