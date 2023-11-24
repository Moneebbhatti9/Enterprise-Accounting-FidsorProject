import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { ParentTab, StyledTab, StyledTabsList } from '../styles/GridStyling';
import IntlMessages from '@crema/helpers/IntlMessages';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(0),
  },
}));

export default function UnstyledTabsIntroduction() {
  return (
    <ParentTab defaultValue={0} sx={{ width: '100%' }}>
      <Root>
        <Divider>
          <StyledTabsList>
            <StyledTab value={0}>
              <IntlMessages id="common.invoices_unpaid" />
            </StyledTab>
            <StyledTab value={1}>
              <IntlMessages id="common.invoices_draft" />
            </StyledTab>
            <StyledTab value={2}>
              <IntlMessages id="common.invoices_allInvoices" />
            </StyledTab>
          </StyledTabsList>
        </Divider>
      </Root>
    </ParentTab>
  );
}
