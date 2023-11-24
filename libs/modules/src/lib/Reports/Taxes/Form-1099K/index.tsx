import { Box, Typography, Stack, Link } from '@mui/material';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Body, Info, Note, Links } from './styles/Form1099KStyle';

const Form1099K = () => {
  return (
    <Body>
      <Stack direction="column" spacing={3}>
        <Typography variant="h2" fontWeight="bold" fontSize="20px">
          Form 1099-K
        </Typography>
        <Info>
          <Typography variant="subtitle1">
            The Form 1099-K from Wave reports the gross processing volume of
            card payments in your Wave Payments account.
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Links>
              <Typography variant="button">FAQ about Form 1099-K</Typography>
            </Links>
            <OutboundOutlinedIcon fontSize="small" sx={{ color: '#808080' }} />
          </Stack>
        </Info>
        <Note>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <InfoOutlinedIcon fontSize="small" color="primary" />
            <Stack direction="column" alignItems="flex-start">
              <Typography fontWeight="bold" color="primary">
                No 1099-K needed this year!
              </Typography>
              <Typography>
                To receive a form 1099-K for 2022, you must have met the state
                or federal threshold.
              </Typography>
            </Stack>
          </Stack>
        </Note>

        <Typography>
          Something doesn't look right?
          <Links>
            <Typography component="span" fontWeight="bold">
              {' '}
              Let us know.
            </Typography>
          </Links>
        </Typography>
      </Stack>
    </Body>
  );
};

export default Form1099K;
