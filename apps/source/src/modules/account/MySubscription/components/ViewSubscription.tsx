import { useState } from 'react';
import {
  Body,
  CustomDivider,
} from '../../../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import jsonData from '../../../../../../../libs/modules/src/lib/Accounting/Global/DummyData/Subscription.json';
import { Stack, Box, Avatar, Typography, Link } from '@mui/material';
import UnstyledTabsIntroduction from './Tabs';
import { useDropzone } from 'react-dropzone';
import { COAEditIcon } from '../../../../../../../libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts/Components/StyledComponents';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import DeliveryInstructionsModal from '../../../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/ViewCustomer/CustomModal';

const ViewSubscriptionData = () => {
  const selectedData = jsonData[0];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleViewInstructionsClick = () => {
    setIsModalOpen(true);
  };

  const handleImageUpload = (acceptedFiles: File[]) => {
    // Explicitly specify the type as File[]
    // Assuming only one file is allowed
    const uploadedFile = acceptedFiles[0];
    setUploadedImage(URL.createObjectURL(uploadedFile)); // Store the image URL in state
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg'],
    },
    multiple: false, // Allow only a single file to be uploaded
    onDrop: handleImageUpload,
  });

  return (
    <Body>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { sm: '100%', md: '30%', lg: '20%' },
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px #47545c59',
            marginBottom: { xs: '2%', sm: '0%', md: '0%' },
          }}
        >
          {/* <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <Avatar
              alt="Remy Sharp"
              src={avatar1}
              sx={{
                width: { xs: '50%', md: '60%' },
                height: { xs: 'auto' }, // Set 'auto' for xs to maintain aspect ratio
              }}
            />
          </Box> */}
          <Box {...getRootProps()} style={{ cursor: 'pointer' }}>
            <input {...getInputProps()} />
            <Box width={'100%'} display={'flex'} justifyContent={'center'}>
              {uploadedImage ? (
                <Avatar
                  src={uploadedImage}
                  alt="Uploaded Avatar"
                  sx={{
                    width: { xs: '150px', md: '150px' },
                    height: { xs: '150px' }, // Set 'auto' for xs to maintain aspect ratio
                  }}
                />
              ) : (
                <>
                  <Avatar
                    sx={{
                      width: { xs: '150px', md: '150px' },
                      height: { xs: '150px' }, // Set 'auto' for xs to maintain aspect ratio
                    }}
                  />
                  <COAEditIcon color="primary" />
                </>
              )}
            </Box>
          </Box>
          {selectedData && (
            <>
              <Stack>
                <Typography
                  marginBottom={'8px'}
                  marginTop={'16px'}
                  color="#68757d"
                  fontWeight={'bold'}
                >
                  Primary contact
                </Typography>
                <Stack direction="column">
                  <Typography fontSize={'12px'}>{selectedData.name}</Typography>

                  <Typography fontSize={'12px'}>
                    {selectedData.email ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {selectedData.phone ?? ''}
                  </Typography>
                </Stack>
                {selectedData && selectedData.website && (
                  <Stack
                    direction="row"
                    marginTop={'8px'}
                    marginBottom={0}
                    justifyContent={'space-between'}
                  >
                    <Link
                      href={'https://' + selectedData.website}
                      underline="hover"
                      fontSize={'12px'}
                      target="_blank"
                    >
                      {selectedData.website ?? ''}
                    </Link>
                    <Link
                      href={'https://' + selectedData.website}
                      target="_blank"
                    >
                      <OpenInNewOutlinedIcon />
                    </Link>
                  </Stack>
                )}

                <Typography
                  marginBottom={'8px'}
                  marginTop={'16px'}
                  fontWeight={'bold'}
                  color="#68757d"
                >
                  Additional contacts
                </Typography>
                <Stack direction="column">
                  <Typography fontSize={'12px'}>
                    {(selectedData.firstName ?? '') +
                      ' ' +
                      (selectedData.secondName ?? '')}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {selectedData.AEmail ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {selectedData.APhone ?? ''}
                  </Typography>
                </Stack>
              </Stack>
              {selectedData &&
                selectedData.billingAddress1 &&
                selectedData.billingAddress2 &&
                selectedData.bcity &&
                selectedData.bregion &&
                selectedData.bpostalCode &&
                selectedData.currencyType && (
                  <>
                    <CustomDivider />
                    <Stack>
                      <Typography
                        marginBottom={'8px'}
                        color="#68757d"
                        fontWeight={'bold'}
                      >
                        Billing Address
                      </Typography>
                      <Stack direction="column">
                        {selectedData && selectedData.billingAddress1 && (
                          <Typography fontSize={'12px'}>
                            {selectedData.billingAddress1 ?? ''}
                          </Typography>
                        )}
                        {selectedData && selectedData.billingAddress2 && (
                          <Typography fontSize={'12px'}>
                            {selectedData.billingAddress2 ?? ''}
                          </Typography>
                        )}
                        {selectedData &&
                          selectedData.bcity &&
                          selectedData.bregion && (
                            <Typography fontSize={'12px'}>
                              {(selectedData.bcity ?? '') +
                                ', ' +
                                (selectedData.bregion ?? '')}
                            </Typography>
                          )}
                        {selectedData && selectedData.bpostalCode && (
                          <Typography fontSize={'12px'}>
                            {selectedData.bpostalCode ?? ''}
                          </Typography>
                        )}
                      </Stack>
                      {selectedData && selectedData.currencyType && (
                        <>
                          <Typography
                            marginBottom={'8px'}
                            marginTop={'16px'}
                            fontWeight={'bold'}
                            color="#68757d"
                          >
                            Currency
                          </Typography>
                          <Stack direction="column">
                            <Typography fontSize={'12px'}>
                              {selectedData.currencyType ?? ''}
                            </Typography>
                          </Stack>
                        </>
                      )}
                    </Stack>
                  </>
                )}
              {selectedData &&
                selectedData.shippingAddress1 &&
                selectedData.shippingAddress2 &&
                selectedData.scity &&
                selectedData.sregion &&
                selectedData.spostalCode &&
                selectedData.deliveryInstructions && (
                  <>
                    <CustomDivider />
                    <Stack>
                      <Typography
                        marginBottom={'8px'}
                        color="#68757d"
                        fontWeight={'bold'}
                      >
                        Shipping Address
                      </Typography>
                      <Stack direction="column" marginBottom={'8px'}>
                        {selectedData && selectedData.shippingAddress1 && (
                          <Typography fontSize={'12px'}>
                            {selectedData.shippingAddress1 ?? ''}
                          </Typography>
                        )}
                        {selectedData && selectedData.shippingAddress2 && (
                          <Typography fontSize={'12px'}>
                            {' '}
                            {selectedData.shippingAddress2 ?? ''}
                          </Typography>
                        )}
                        {selectedData &&
                          selectedData.scity &&
                          selectedData.sregion && (
                            <Typography fontSize={'12px'}>
                              {(selectedData.scity ?? '') +
                                ', ' +
                                (selectedData.sregion ?? '')}
                            </Typography>
                          )}
                        {selectedData && selectedData.spostalCode && (
                          <Typography fontSize={'12px'}>
                            {selectedData.spostalCode ?? ''}
                          </Typography>
                        )}
                      </Stack>
                      {selectedData && selectedData.deliveryInstructions && (
                        <Link
                          display={'flex'}
                          justifyContent={'flex-start'}
                          underline="hover"
                          component="button"
                          variant="body2"
                          onClick={handleViewInstructionsClick}
                        >
                          View delivery instructions
                        </Link>
                      )}
                    </Stack>
                  </>
                )}
              {selectedData && selectedData.Notes && (
                <>
                  <CustomDivider />
                  <Stack>
                    <Typography
                      marginBottom={'8px'}
                      color="#68757d"
                      fontWeight={'bold'}
                    >
                      Notes
                    </Typography>
                    <Stack direction="column" marginBottom={'8px'}>
                      <Typography fontSize={'12px'}>
                        {selectedData.Notes ?? ''}
                      </Typography>
                    </Stack>
                  </Stack>
                </>
              )}
            </>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { sm: '100%', md: '70%', lg: '80%' },
          }}
        >
          <UnstyledTabsIntroduction />
        </Box>
      </Stack>

      <DeliveryInstructionsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={'Delivery Instructions'}
        titleBackground={'#caebca'}
        footerBg={'#efeded'}
        text={selectedData?.deliveryInstructions ?? ''}
      />
    </Body>
  );
};
export default ViewSubscriptionData;

// Developed By:
// Reviewed By:
