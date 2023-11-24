import { alpha, Box } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import { useIntl } from 'react-intl';
import AppCard from '@crema/components/AppCard';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiMessageDetail } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import AppScrollbar from '@crema/components/AppScrollbar';
// import { WelcomeCardType } from '@crema/models/dashboards/Analytics';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getTotalUsers } from '../../../../../../services/DashboardService/DashboardService';
type WelcomeCardType = {
  url: string;
  id: number;
  type: string;
  counts: number;
  icon: string;
};
type Props = {
  data: WelcomeCardType[];
};
interface Counts {
  employeeCount: number;
  vendorCount: number;
  customerCount: number;
}
const WelcomeCard = ({ data }: Props) => {
  const [counts, setCounts] = useState<Counts>({
    employeeCount: 0,
    vendorCount: 0,
    customerCount: 0,
  });
  const { messages } = useIntl();
  const [businessData, setBusinessData] = useState<{
    name: string | null;
    id: string | null;
  }>({
    name: null,
    id: null,
  });
  const [count, setCount] = useState([]);
  useEffect(() => {
    const storedBusiness = localStorage.getItem('selectedBusiness');
    if (storedBusiness) {
      const { name, id } = JSON.parse(storedBusiness);
      setBusinessData({ name, id });
    }
    async function totalUsers() {
      try {
        const data = await getTotalUsers();
        console.log(data);
        setCounts({
          employeeCount: data.employeeCount,
          vendorCount: data.vendorCount,
          customerCount: data.customerCount,
        });
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    }
    totalUsers();
  }, []);
  return (
    <AppCard
      sxStyle={{
        mb: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            mr: { xs: 2, xl: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              mb: { md: 12 },
            }}
          >
            <Box
              component="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: Fonts.REGULAR,
                mb: 0.5,
                fontSize: 14,
              }}
            >
              {messages['dashboard.analytics.welcome'] as string}
            </Box>
            <Box
              component="h3"
              sx={{
                color: 'text.primary',
                fontWeight: Fonts.MEDIUM,
                fontSize: 16,
                mb: 3,
              }}
            >
              {businessData.name}
            </Box>
          </Box>
          <Box
            sx={{
              mx: -3,
            }}
          >
            <AppScrollbar
              sx={{
                maxWidth: 500,
                px: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  mx: -3,
                }}
              >
                <>
                  <Link
                    to="/salespayment/customer"
                    style={{ textDecoration: 'none', color: '#111827' }}
                  >
                    <Box
                      key={'box-' + 0}
                      sx={{
                        px: 3,
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          mr: 4,
                          backgroundColor: (theme) =>
                            alpha(theme.palette.primary.main, 0.1),
                          width: { xs: 46, md: 60 },
                          height: { xs: 46, md: 60 },
                          minWidth: { xs: 46, md: 60 },
                          fontSize: { xs: 24, md: 26 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 1.25,
                          borderRadius: '50%',
                        }}
                      >
                        <HiOutlineMailOpen color="#0A8FDC" className="icon" />
                      </Box>
                      <Box
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        <Box
                          sx={{
                            color: 'text.primary',
                            fontWeight: Fonts.MEDIUM,
                            fontSize: 16,
                            position: 'relative',
                            lineHeight: 1,
                            marginBottom: 0.5,
                          }}
                          component="h5"
                        >
                          {counts.customerCount}
                          {/* { count} */}
                          {/* {/ { count} /} */}
                        </Box>

                        <Box component="p">
                          {messages['common.customers'] as string}
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                  <Link
                    to="/purchases/vendors"
                    style={{ textDecoration: 'none', color: '#111827' }}
                  >
                    <Box
                      key={'box-' + 1}
                      sx={{
                        px: 3,
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          mr: 4,
                          backgroundColor: (theme) =>
                            alpha(theme.palette.primary.main, 0.1),
                          width: { xs: 46, md: 60 },
                          height: { xs: 46, md: 60 },
                          minWidth: { xs: 46, md: 60 },
                          fontSize: { xs: 24, md: 26 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 1.25,
                          borderRadius: '50%',
                        }}
                      >
                        <BiMessageDetail color="#0A8FDC" className="icon" />
                      </Box>
                      <Box
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        <Box
                          sx={{
                            color: 'text.primary',
                            fontWeight: Fonts.MEDIUM,
                            fontSize: 16,
                            position: 'relative',
                            lineHeight: 1,
                            marginBottom: 0.5,
                          }}
                          component="h5"
                        >
                          {counts.vendorCount}
                          {/* {count} */}
                          {/* {/ {count} /} */}
                        </Box>

                        <Box component="p">
                          {messages['common.vendors'] as string}
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                  <Link
                    to="/payroll/employees"
                    style={{ textDecoration: 'none', color: '#111827' }}
                  >
                    <Box
                      key={'box-' + 2}
                      sx={{
                        px: 3,
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          mr: 4,
                          backgroundColor: (theme) =>
                            alpha(theme.palette.primary.main, 0.1),
                          width: { xs: 46, md: 60 },
                          height: { xs: 46, md: 60 },
                          minWidth: { xs: 46, md: 60 },
                          fontSize: { xs: 24, md: 26 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 1.25,
                          borderRadius: '50%',
                        }}
                      >
                        <CgFileDocument color="#0A8FDC" className="icon" />
                      </Box>
                      <Box
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        <Box
                          sx={{
                            color: 'text.primary',
                            fontWeight: Fonts.MEDIUM,
                            fontSize: 16,
                            position: 'relative',
                            lineHeight: 1,
                            marginBottom: 0.5,
                          }}
                          component="h5"
                        >
                          {/* { count} */}
                          {/* {/ { count} /} */}
                          {counts.employeeCount}
                        </Box>

                        <Box component="p">
                          {messages['sidebar.payroll.employees'] as string}
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </>
              </Box>
            </AppScrollbar>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            marginRight: -2.5,
            marginBottom: -5,
            maxWidth: { sm: 150, xl: 180 },
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            },
          }}
        >
          <img alt="welcome" src={'/assets/images/dashboard/welcomImage.svg'} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default WelcomeCard;
