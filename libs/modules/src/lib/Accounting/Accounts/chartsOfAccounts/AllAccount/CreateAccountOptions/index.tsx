import Stack from '@mui/material/Stack';
import CreateButton from '././CreateButton';
import Options from './Options';
export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <CreateButton />
      <Options />
    </Stack>
  );
}
