import React, { useEffect, useState } from 'react';
import { CustomDivider } from '../../../../Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import { COAEditIcon } from '../../../../Accounting/Accounts/chartsOfAccounts/Components/StyledComponents';
import { Stack, Box, Avatar, Typography, Link } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import UnstyledTabsIntroduction from '../../../../Accounting/Salespayments/Customer/ViewCustomer/Components/Tabs';
import { getBusinessByID } from 'libs/services/BusinessService/BusinessService';
import { EditBusinessFields } from '../AddBusiness/AddBusinessInterface';
import { useDropzone } from 'react-dropzone';

interface ViewBusinessFieldsProps {
  id: string;
}
const ViewBusinessFrontend: React.FC<ViewBusinessFieldsProps> = ({ id }) => {
  const [businessData, setBusinessData] = useState<EditBusinessFields | null>(
    null
  );
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessData = async (businessId: string) => {
      try {
        const response = await getBusinessByID(businessId);
        setBusinessData(response); // Assuming the response is of type FormValues
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchBusinessData(id);
  }, [id]);

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
        {businessData && (
          <>
            <Stack>
              <Typography
                marginBottom={'8px'}
                marginTop={'16px'}
                color="#68757d"
                fontWeight={'bold'}
              >
                Business Details
              </Typography>
              <Stack direction="column">
                <Typography fontSize={'12px'}>{businessData.name}</Typography>
                <Stack
                  direction="row"
                  marginTop={'8px'}
                  marginBottom={0}
                  justifyContent={'space-between'}
                >
                  <Typography fontSize={'12px'}>
                    Currency: {businessData.currencyName}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  marginTop={'8px'}
                  marginBottom={0}
                  justifyContent={'space-between'}
                >
                  <Typography fontSize={'12px'}>
                    Time Zone: {businessData.timeZone}
                  </Typography>
                </Stack>
              </Stack>
              {businessData && businessData.website && (
                <Stack direction="column">
                  <Stack
                    direction="row"
                    marginTop={'8px'}
                    marginBottom={0}
                    alignItems={'center'}
                  >
                    <Typography fontSize={'12px'}>Website: </Typography>
                    <Link
                      href={'https://' + businessData.website}
                      underline="hover"
                      fontSize={'12px'}
                      target="_blank"
                    >
                      {businessData.website ?? ''}
                    </Link>
                    <Link
                      href={'https://' + businessData.website}
                      target="_blank"
                    >
                      <OpenInNewOutlinedIcon />
                    </Link>
                  </Stack>
                </Stack>
              )}
              <Stack>
                <CustomDivider />
                <Typography
                  marginBottom={'8px'}
                  color="#68757d"
                  fontWeight={'bold'}
                >
                  Contact Information
                </Typography>
                <Stack direction="column">
                  <Typography fontSize={'12px'}>
                    {businessData.phone ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {businessData.mobile ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {businessData.tollFree ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {businessData.fax ?? ''}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            {businessData.address && (
              <>
                <CustomDivider />
                <Typography
                  marginBottom={'8px'}
                  fontWeight={'bold'}
                  color="#68757d"
                >
                  Address Details
                </Typography>
                <Stack direction="column">
                  <Typography fontSize={'12px'}>
                    Address: {businessData.address.addressDetails ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    Optional: {businessData.address.addressOptional ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    City, Country: {businessData.address.cityId ?? ''},{' '}
                    {businessData.address.countryId ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    State, Postal: {businessData.address.state ?? ''},{' '}
                    {businessData.address.postal ?? ''}
                  </Typography>
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
  );
};

export default ViewBusinessFrontend;
