import React from 'react';
import {
  StyledGridContent,
  Item1,
  Item2,
  ItemContainer,
  ButtonInvoiceStyling,
} from '../styles/GridStyling';
import { useIntl } from 'react-intl';

function InvoicesInstructions() {
  const { messages } = useIntl();
  return (
    <StyledGridContent>
      <ItemContainer>
        <Item1>{messages['common.invoices_content1'] as string}</Item1>
      </ItemContainer>
      <ItemContainer>
        <Item2>{messages['common.invoices_content2'] as string}</Item2>
        <ButtonInvoiceStyling variant="outlined">
          {messages['common.invoices_firstInvoice'] as string}
        </ButtonInvoiceStyling>
      </ItemContainer>
    </StyledGridContent>
  );
}

export default InvoicesInstructions;
