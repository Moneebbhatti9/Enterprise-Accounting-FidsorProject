import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import {
  COAParagraph,
  SubSectionHeading,
  SubSectionDiv,
  COABox1,
  COABox2,
  COABox3,
  COABox4,
  COAGrid1,
  COAGrid2,
  COAGrid3,
  COAGrid4,
  COAGrid5,
  COAIconButton,
  COAEditIcon,
  COAAddIcon,
  COAHelpIcon,
} from '../../Components/StyledComponents';
import { useIntl } from 'react-intl';

interface TableProps {
  data: { AccountTitle: string; AccountCode: number; Description: string }[];
  handleOpen: (table: string) => void;
  handleEdit: (entry: any) => void;
}

const DueforPayroll: React.FC<TableProps> = ({
  data,
  handleOpen,
  handleEdit,
}) => {
  const { messages } = useIntl();
  return (
    <Grid container sx={{ py: 1 }}>
      <COAGrid1 item xs={12}>
        <SubSectionDiv>
          <SubSectionHeading>
            {messages['COA.DPRTitle'] as string}
            <COAHelpIcon />
          </SubSectionHeading>
        </SubSectionDiv>
      </COAGrid1>
      {data.length === 0 ? (
        <COAGrid2 item xs={12}>
          <COAParagraph>{messages['COA.DPRNoEntries'] as string}</COAParagraph>
        </COAGrid2>
      ) : (
        <>
          {data.map((entry, index) => (
            <React.Fragment key={index}>
              <COAGrid3 item xs={4} sm={4} md={2}>
                <COABox1>{entry.AccountCode}</COABox1>
              </COAGrid3>
              <COAGrid4 item xs={8} sm={8} md={4}>
                <COABox4>{entry.AccountTitle}</COABox4>
                <COABox2>
                  <Typography variant="body2">
                    {messages['COA.NoTransactions'] as string}
                  </Typography>
                </COABox2>
              </COAGrid4>
              <COAGrid3 item xs={10} sm={10} md={4}>
                <COABox1>{entry.Description}</COABox1>
              </COAGrid3>
              <COAGrid5 item xs={2} sm={2} md={2}>
                <COABox3>
                  <COAIconButton
                    color="primary"
                    onClick={() => handleEdit(entry)}
                  >
                    <COAEditIcon />
                  </COAIconButton>
                </COABox3>
              </COAGrid5>
            </React.Fragment>
          ))}
        </>
      )}
      <Grid item xs={12}>
        <Button
          onClick={() => handleOpen('dueForPayroll')}
          variant="text"
          sx={{ color: '#57B8C9' }}
        >
          <COAAddIcon />
          {messages['COA.addAccount'] as string}
        </Button>
      </Grid>
    </Grid>
  );
};

export default DueforPayroll;
