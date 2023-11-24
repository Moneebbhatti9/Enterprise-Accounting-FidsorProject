import { useState, useEffect } from 'react';
import { Body } from '../../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import { useParams } from 'react-router-dom';
import jsonData from '../../../../Global/DummyData/Customer.json';
import { Stack, Box, Avatar, Typography, Link } from '@mui/material';
import UnstyledTabsIntroduction from './Tabs';
import { useDropzone } from 'react-dropzone';
import { COAEditIcon } from '../../../../../Accounting/Accounts/chartsOfAccounts/Components/StyledComponents';
import {
  VendorDataType,
  Currency,
  Country,
  City,
  Address,
} from '../../../../../../../interfaces/Vendors/Vendor';
import { getVendorByID } from 'libs/services/VendorService/VendorService';
import { CustomDivider } from '../../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const ViewVendorData = () => {
  const { id } = useParams<{ id?: string }>();
  const vendorId = id || '';
  const [vendorData, setVendorData] = useState<VendorDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await getVendorByID(vendorId);
        setVendorData(response); // Assuming the response is of type FormValues
      } catch (error) {
        console.error('Error fetching vendor data:', error);
      }
    };

    fetchVendorData();
  }, [vendorId]);

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
          {vendorData && (
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
                    {vendorData.vendorName}
                  </Typography>

                  <Typography fontSize={'12px'}>
                    {(vendorData.firstName ?? '') +
                      ' ' +
                      (vendorData.lastName ?? '')}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {vendorData.email ?? ''}
                  </Typography>
                  <Typography fontSize={'12px'}>
                    {vendorData.phone ?? ''}
                  </Typography>
                </Stack>
                {vendorData &&
                  vendorData.accountNumber &&
                  vendorData.website && (
                    <Stack direction="column">
                      <Stack
                        direction="row"
                        marginTop={'8px'}
                        marginBottom={0}
                        justifyContent={'space-between'}
                      >
                        <Typography fontSize={'12px'}>
                          Account Number: {vendorData.accountNumber}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        marginTop={'8px'}
                        marginBottom={0}
                        alignItems={'center'}
                      >
                        <Typography fontSize={'12px'}>Website:</Typography>
                        <Link
                          href={'https://' + vendorData.website}
                          underline="hover"
                          fontSize={'12px'}
                          target="_blank"
                        >
                          {vendorData.website ?? ''}
                        </Link>
                        <Link
                          href={'https://' + vendorData.website}
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
                      {vendorData.mobile ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      {vendorData.tollFree ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      {vendorData.fax ?? ''}
                    </Typography>
                  </Stack>
                </Stack>
                {/* {vendorData.contacts && vendorData.contacts.length > 0 && (
                  <Stack>
                    <Stack direction="column">
                      {vendorData.contacts
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
                {/* </div>
                          </>
                        ))}
                    </Stack>
                  </Stack> */}
                {/* )}  */}
              </Stack>
              {vendorData.address && (
                <>
                  <CustomDivider />
                  <Typography
                    marginBottom={'8px'}
                    fontWeight={'bold'}
                    color="#68757d"
                  >
                    Address
                  </Typography>
                  <Stack direction="column">
                    <Typography fontSize={'12px'}>
                      Currency: {vendorData.currencyId ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      Address: {vendorData.address.addressDetails ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      Optional: {vendorData.address.addressOptional ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      City, Country: {vendorData.address.cityId ?? ''},{' '}
                      {vendorData.address.countryId ?? ''}
                    </Typography>
                    <Typography fontSize={'12px'}>
                      State, Postal: {vendorData.address.state ?? ''},{' '}
                      {vendorData.address.postal ?? ''}
                    </Typography>
                  </Stack>
                </>
              )}
              {/* {vendorData && vendorData.shipping.instructions && (
                <>
                  <CustomDivider />
                  <Stack>
                    {vendorData && vendorData.instructions && (
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
              {vendorData && vendorData.note && (
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
                        {vendorData.note ?? ''}
                      </Typography>
                    </Stack>
                  </Stack>
                </>
              )} */}
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

      {/* <DeliveryInstructionsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={'Delivery Instructions'}
        titleBackground={'#caebca'}
        footerBg={'#efeded'}
        text={vendorData?.deliveryInstructions ?? ''}
      /> */}
    </Body>
  );
};
export default ViewVendorData;

// Developed By:
// Reviewed By:
