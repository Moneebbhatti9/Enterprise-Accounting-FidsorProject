import {
  StyledTabsList,
  StyledTab,
  StyledTabPanel,
  ParentTab,
} from '../styles/TabsStyle';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IntlMessages from '@crema/helpers/IntlMessages';
import SummaryGrid from '../../components/SummaryGrid';
import DetailsGrid from '../../components/DetailsGrid';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(0),
  },
}));

export default function Tabs() {
  return (
    <ParentTab defaultValue={0} sx={{ width: '100%' }}>
      <Root>
        <Divider>
          <StyledTabsList>
            <StyledTab value={0}>
              <IntlMessages id="reports.tabswitchvalue1" />
            </StyledTab>
            <StyledTab value={1}>
              <IntlMessages id="reports.tabswitchvalue2" />
            </StyledTab>
          </StyledTabsList>
        </Divider>
      </Root>
      <StyledTabPanel value={0}>
        <SummaryGrid />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button variant="outlined">Show Summary</Button>
        </Box>
      </StyledTabPanel>
      <StyledTabPanel value={1}>
        <DetailsGrid />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button variant="outlined">Show Details</Button>
        </Box>
      </StyledTabPanel>
    </ParentTab>
  );
}
