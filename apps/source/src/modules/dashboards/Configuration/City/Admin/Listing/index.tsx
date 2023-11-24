import AppsHeader from '@crema/components/AppsHeader';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { Box, Grid, Hidden } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
// import AppsContent from '@crema/components/AppsContent';
import AppsPagination from '@crema/components/AppsPagination';
import AppSearchBar from '@crema/components/AppSearchBar';
// import { FilterItem, ListingTable } from '@crema/modules/ecommerce/Admin';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import Slide from '@mui/material/Slide';
import { CityType } from '@crema/models/configuration/city';

const ProductListing = () => {
  const { messages } = useIntl();
  const [filterData, setFilterData] = useState<CityType>({
    id: 0,
    countryname: '',
    cityname: '',
  });

  const [page, setPage] = useState(0);
  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi<{
    list: CityType[];
    total: number;
  }>(
    '/api/ecommerce/list',
    {
      list: [],
      total: 0,
    },
    {},
    false
  );

  const { list, total } = apiData;

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    setPage(value);
  };
  useEffect(() => {
    setQueryParams({ filterData, page });
  }, [filterData, page]);

  const searchProduct = (title: string) => {
    setFilterData({ ...filterData });
  };

  return (
    <>
      <Box
        component="h2"
        sx={{
          fontSize: 16,
          color: 'text.primary',
          fontWeight: Fonts.SEMI_BOLD,
          mb: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        {messages['sidebar.configuration.city'] as string}
      </Box>
      <AppGridContainer spacing={7}>
        <Slide direction="right" in mountOnEnter unmountOnExit>
          <Grid item xs={12} lg={9}>
            <AppCard
              title={
                <AppsHeader>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    width={1}
                    justifyContent="space-between"
                  >
                    <AppSearchBar
                      iconPosition="right"
                      overlap={false}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        searchProduct(event.target.value)
                      }
                      placeholder={messages['common.searchHere'] as string}
                    />
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Hidden smDown>
                        <AppsPagination
                          rowsPerPage={10}
                          count={total}
                          page={page}
                          onPageChange={onPageChange}
                        />
                      </Hidden>
                    </Box>
                  </Box>
                </AppsHeader>
              }
              headerStyle={{ p: 0 }}
              contentStyle={{ p: 0 }}
            >
              {/* <AppsContent
                sx={{
                  paddingTop: 2.5,
                  paddingBottom: 2.5,
                }}
              >

              </AppsContent> */}
              <Hidden smUp>
                <AppsPagination
                  rowsPerPage={10}
                  count={total}
                  page={page}
                  onPageChange={onPageChange}
                />
              </Hidden>
            </AppCard>
          </Grid>
        </Slide>
        <Slide direction="left" in mountOnEnter unmountOnExit>
          <Grid item xs={12} lg={3}></Grid>
        </Slide>
      </AppGridContainer>
    </>
  );
};

export default ProductListing;
