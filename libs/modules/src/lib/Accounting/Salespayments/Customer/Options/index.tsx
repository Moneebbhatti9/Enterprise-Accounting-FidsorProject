import CreateButton from './CreateCustomer';
import Options from './Options';
import { StyledStack } from '../customerStyling';
export default function MainOptions() {
  return (
    <StyledStack direction="row" spacing={2}>
      <CreateButton />
      <Options />
    </StyledStack>
  );
}
