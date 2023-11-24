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
import { messages } from '@crema/fakedb/data';
import { useIntl } from 'react-intl';

const LossOnForeignExchange = () => {
  const { messages } = useIntl();
  return (
    <Grid container sx={{ py: 1 }}>
      <COAGrid1 item xs={12}>
        <SubSectionDiv>
          <SubSectionHeading>
            {messages['COA.LFETitle'] as string}
            <COAHelpIcon />
          </SubSectionHeading>
        </SubSectionDiv>
      </COAGrid1>
      <COAGrid6 item xs="auto" md={1}>
        <COABox1></COABox1>
      </COAGrid6>
      <COAGrid7 item xs={8} sm={8} md={4}>
        <COABox4>{messages['COA.LFENoEntries'] as string}</COABox4>
        <COABox2>{messages['COA.NoTransactions'] as string}</COABox2>
      </COAGrid7>
      <COAGrid6 item xs={10} sm={10} md={4}>
        <COABox1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada
          nunc vel risus commodo. Sed nisi lacus sed viverra tellus. Sem nulla
          pharetra diam sit. Quisque non tellus orci ac auctor augue mauris
          augue. Odio morbi quis commodo odio aenean. Magna sit amet purus
          gravida quis blandit. In hac habitasse platea dictumst. Vitae congue
          mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
          Aliquam ultrices sagittis orci a scelerisque purus semper. Metus
          aliquam eleifend mi in nulla posuere. Volutpat blandit aliquam etiam
          erat velit scelerisque in.
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

export default LossOnForeignExchange;
