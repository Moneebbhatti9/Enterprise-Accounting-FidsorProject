import React from 'react';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import AppList from '@crema/components/AppList';
import Avatar from '@mui/material/Avatar';
import MixBarChart from './MixBarChart';
import { SalesStateType } from '@crema/models/dashboards/Analytics';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { Icon } from '@mui/material';
type SalesChartDaumType = {
  name: string;
  CB: number;
  Rec: number;
  Paid: number;
};
type Props = {
  salesState: SalesStateType[];
  chartData: SalesChartDaumType[];
};
const StyledIconButton = styled(IconButton)`
  && {
    color: grey;
    padding: 8px;

    &:hover {
      color: rgb(10, 143, 220);
    }
  }
`;
const BalanceSheet = ({ salesState = [], chartData }: Props) => {
  const handleSelectionType = (data: SalesStateType) => {
    console.log('data: ', data);
  };
  const getData = (data: SalesStateType[]) => {
    return data;
  };
  const { messages } = useIntl();
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyle = {
    color: hovered ? 'blue' : 'grey',
    padding: 8,
  };
  const defaultMenuValueType = messages['dashboard.thisMonth'];
  return (
    <AppCard
      title={messages['reports.financialstatements.balancesheet'] as string}
      sxStyle={{ height: 1, fontSize: '12px' }}
      action={
        <>
          <AppSelect
            menus={[
              messages['dashboard.thisMonth'],
              messages['dashboard.lastMonth'],
              messages['dashboard.3months'],
              messages['dashboard.6months'],
              messages['dashboard.9months'],
              messages['dashboard.thisYear'],
              messages['dashboard.lastYear'],
            ]}
            defaultValue={defaultMenuValueType}
            onChange={handleSelectionType}
          />
          <Tooltip title="Reports">
            <Link
              to="/reports/financial-statements/balance-sheet"
              style={{ textDecoration: 'none', color: '#111827' }}
            >
              <StyledIconButton size="small">
                <Box className="state-icon">
                  <Box className="hsIcon">
                    <Icon style={{ fontSize: '18px' }}>domain</Icon>
                  </Box>
                </Box>
              </StyledIconButton>
            </Link>
          </Tooltip>
        </>
      }
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            mt: 'auto',
          }}
        >
          <AppGridContainer>
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  width: 1,
                  height: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                }}
              >
                <MixBarChart data={chartData} />
              </Box>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  width: 1,
                  ml: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <AppList
                  animation="transition.slideRightBigIn"
                  delay={200}
                  duration={400}
                  containerStyle={{ width: '100%', overflow: 'hidden' }}
                  data={getData(salesState)}
                  renderRow={(item) => (
                    <Box
                      key={'salesState-' + item.id}
                      sx={{
                        pl: { xl: 6 },
                        py: { xs: 2, md: 4 },
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      <Avatar
                        src={item.icon}
                        alt="icon"
                        sx={{ height: 50, width: 50 }}
                      />

                      <Box
                        position="relative"
                        sx={{
                          ml: 4,
                          overflow: 'hidden',
                          width: 'calc(100% - 66px)',
                        }}
                      >
                        <Box
                          component="h3"
                          sx={{
                            display: 'inline-block',
                            fontWeight: Fonts.MEDIUM,
                            mb: 0.5,
                            fontSize: 14,
                          }}
                        >
                          ${item.amount}
                        </Box>
                        <Box
                          component="p"
                          sx={{
                            color: 'text.secondary',
                            fontSize: 12,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '100%',
                          }}
                        >
                          {messages[item.type] as string}
                        </Box>
                      </Box>
                    </Box>
                  )}
                />
              </Box>
            </Grid>
          </AppGridContainer>
        </Box>
      </Box>
    </AppCard>
  );
};
export default BalanceSheet;
