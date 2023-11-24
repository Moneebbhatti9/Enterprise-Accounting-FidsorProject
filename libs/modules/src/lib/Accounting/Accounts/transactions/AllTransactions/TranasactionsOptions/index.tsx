import Stack from '@mui/material/Stack';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import Options from './Options';
export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2} style={{paddingRight: "5px"}}>
      <AddIncome />
      <AddExpense/>
      <Options />
    </Stack>
  );
}
