import React, { useEffect, useState } from 'react';
import {
  Body,
  CustomDivider,
} from './AddCustomer/Components/AddCustomerStyled';
import { COAEditIcon } from '../../../Accounting/Accounts/chartsOfAccounts/Components/StyledComponents';
import PageHeaderWithBack from '../../Global/Components/PageHeaderWithBack';
import { useParams } from 'react-router-dom';
import jsonData from '../../Global/DummyData/Customer.json';
import { Stack, Box, Avatar, Typography, Link } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import DeliveryInstructionsModal from './ViewCustomer/CustomModal';
import UnstyledTabsIntroduction from './ViewCustomer/Components/Tabs';
import { getCustomerByID } from 'libs/services/CustomerService/CustomerService';

import { useDropzone } from 'react-dropzone';
import { FormValues } from './AddCustomer/Components/AddCustomerInterface';

const ViewCustomer = () => {
  const { id } = useParams<{ id?: string }>();
  const customerId = id || '';
  const [customerData, setCustomerData] = useState<FormValues | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await getCustomerByID(customerId);
        setCustomerData(response); // Assuming the response is of type FormValues
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomerData();
  }, [customerId]);

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
      <PageHeaderWithBack
        title={'View Customer'}
        url="/salespayment/customer"
      />
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
          {customerData && (
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
                  <Typography fontSize={'12px'}>
                    {customerData.customerName}
                  </Typography>

                  <Typography fontSize={'12px'}>
                    {(customerData.firstName ?? '') +
                      ' ' +
                      (customerData.lastName ?? '')}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {customerData.email ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {customerData.phone ?? ''}
                  </Typography>
                </Stack>
                {customerData &&
                  customerData.accountNumber &&
                  customerData.website && (
                    <Stack direction="column">
                      <Stack
                        direction="row"
                        marginTop={'8px'}
                        marginBottom={0}
                        justifyContent={'space-between'}
                      >
                        <Typography fontSize={'12px'}>
                          Account Number: {customerData.accountNumber}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        marginTop={'8px'}
                        marginBottom={0}
                        alignItems={'center'}
                      >
                        <Typography fontSize={'12px'}>Website: </Typography>
                        <Link
                          href={'https://' + customerData.website}
                          underline="hover"
                          fontSize={'12px'}
                          target="_blank"
                        >
                          {customerData.website ?? ''}
                        </Link>
                        <Link
                          href={'https://' + customerData.website}
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
                    Additional Accounts
                  </Typography>
                  <Stack direction="column">
                    <Typography fontSize={'12px'}>
                      {customerData.mobile ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      {customerData.tollFree ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      {customerData.fax ?? ''}
                    </Typography>
                  </Stack>
                </Stack>
                {customerData.contacts && customerData.contacts.length > 0 && (
                  <Stack>
                    <Stack direction="column">
                      {customerData.contacts
                        .filter(
                          (contact) =>
                            contact.name.trim() !== '' ||
                            contact.email.trim() !== '' ||
                            contact.phone.trim() !== ''
                        )
                        .map((contact, index) => (
                          <>
                            <CustomDivider />
                            <Typography
                              marginBottom={'8px'}
                              color="#68757d"
                              fontWeight={'bold'}
                            >
                              Additional Contacts
                            </Typography>
                            <div key={index}>
                              {contact.name.trim() !== '' && (
                                <Typography fontSize={'12px'}>
                                  Name: {contact.name}
                                </Typography>
                              )}
                              {contact.email.trim() !== '' && (
                                <Typography fontSize={'12px'}>
                                  Email: {contact.email}
                                </Typography>
                              )}
                              {contact.phone.trim() !== '' && (
                                <Typography fontSize={'12px'}>
                                  Phone: {contact.phone}
                                </Typography>
                              )}
                              {/* Add any other contact details you want to display */}
                            </div>
                          </>
                        ))}
                    </Stack>
                  </Stack>
                )}
              </Stack>
              {customerData.billing && (
                <>
                  <CustomDivider />
                  <Typography
                    marginBottom={'8px'}
                    fontWeight={'bold'}
                    color="#68757d"
                  >
                    Billing Details
                  </Typography>
                  <Stack direction="column">
                    <Typography fontSize={'12px'}>
                      Currency: {customerData.billing.currencyId ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      Address:{' '}
                      {customerData.billing.address.addressDetails ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      Optional:{' '}
                      {customerData.billing.address.addressOptional ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      City, Country: {customerData.billing.address.cityId ?? ''}
                      , {customerData.billing.address.countryId ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      State, Postal: {customerData.billing.address.state ?? ''},{' '}
                      {customerData.billing.address.postal ?? ''}
                    </Typography>
                  </Stack>
                </>
              )}
              {customerData.shipping && (
                <>
                  <CustomDivider />
                  <Typography
                    marginBottom={'8px'}
                    fontWeight={'bold'}
                    color="#68757d"
                  >
                    Shipping Details
                  </Typography>
                  <Stack direction="column">
                    <Typography fontSize={'12px'}>
                      Ship To: {customerData.shipping.shipTo ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      Phone: {customerData.shipping.phone ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      Address:{' '}
                      {customerData.shipping.address.addressDetails ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      Optional:{' '}
                      {customerData.shipping.address.addressOptional ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      City, Country:{' '}
                      {customerData.shipping.address.cityId ?? ''},{' '}
                      {customerData.shipping.address.countryId ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      State, Postal: {customerData.shipping.address.state ?? ''}
                      , {customerData.shipping.address.postal ?? ''}
                    </Typography>
                  </Stack>
                </>
              )}
              {customerData && customerData.shipping.instructions && (
                <>
                  <CustomDivider />
                  <Stack>
                    {customerData && customerData.shipping.instructions && (
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
              {customerData && customerData.note && (
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
                        {customerData.note ?? ''}
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
        text={customerData?.shipping.instructions ?? ''}
      />
    </Body>
  );
};
export default ViewCustomer;

// Developed By:
// Reviewed By:
