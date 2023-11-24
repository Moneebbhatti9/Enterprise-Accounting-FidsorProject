import { Grid } from '@mui/material';

import {
  SubSectionHeading,
  SubSectionDiv,
  COABox1,
  COABox2,
  COABox3,
  COABox4,
  COAGrid1,
  COAGrid6,
  COAGrid7,
  COAIconButton,
  COAEditIcon,
  COAHelpIcon,
  COAGrid8,
} from '../../Components/StyledComponents';
import { useIntl } from 'react-intl';

const UnCategorizedExpense = () => {
  const { messages } = useIntl();
  return (
    <Grid container sx={{ py: 1 }}>
      <COAGrid1 item xs={12}>
        <SubSectionDiv>
          <SubSectionHeading>
            {messages['COA.UCETitle'] as string}
            <COAHelpIcon />
          </SubSectionHeading>
        </SubSectionDiv>
      </COAGrid1>
      <COAGrid6 item xs="auto" md={1}>
        <COABox1></COABox1>
      </COAGrid6>
      <COAGrid7 item xs={8} sm={8} md={4}>
        <COABox4>{messages['COA.UCETitle'] as string}</COABox4>
        <COABox2>{messages['COA.UCELT'] as string}</COABox2>
      </COAGrid7>
      <COAGrid6 item xs={10} sm={10} md={4}>
        <COABox1>
          
          A business cost you haven't categorized yet. Categorize it now to keep
          your records accurate.
        </COABox1>
      </COAGrid6>
      <COAGrid8 item xs={2} sm={2} md={2}>
        <COABox3>
          <COAIconButton
            sx={{ color: '#57B8C9' }}
            //onClick={() => handleEdit(entry)}
          >
            <COAEditIcon />
          </COAIconButton>
        </COABox3>
      </COAGrid8>
    </Grid>
  );
};

export default UnCategorizedExpense;
