import { useState, useRef, useEffect } from 'react';
import { Button, Stack, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [isConvertModalOpen, setConvertModalOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  // const navigate = useNavigate();
  // const handleMenuToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleMenuClose = () => {
  //   setOpen(false);
  // };

  // const handleMenuToggle1 = () => {
  //   setOpen1((prevOpen) => !prevOpen);
  // };

  // const handleMenuClose1 = () => {
  //   setOpen1(false);
  // };

  // const handleEdit = () => {
  //   navigate('/salespayment/quotations/createquotation');
  // };

  // const handleConverPopUp = () => {
  //   setConvertModalOpen(true);
  // };

  // const handleCustomerView = () => {
  //   navigate('/salespayment/quotations/customerview');
  // };

  const [isTablet, setIsTablet] = useState(window.innerWidth < 710);

  const handleWindowResize = () => {
    setIsTablet(window.innerWidth < 710);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Container>
      <Stack direction={isTablet ? 'column' : 'row'} spacing={2}>
        <Link to="/salespayment/customerstatements/details">
          <Button variant="outlined" sx={{ width: '100%' }}>
            Customer View
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default Header;
