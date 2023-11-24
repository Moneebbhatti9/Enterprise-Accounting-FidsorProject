import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppInfoView from '@crema/components/AppInfoView';
import AppAnimate from '@crema/components/AppAnimate';
import AppTextField from '@crema/components/AppTextField';
import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from '../../assets/icon/comingsoon.svg';
import { useTheme } from '@mui/material';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import {
  StyledBox,
  StyledHeading,
  InnerStyledBox,
  StyledCustomBox,
  StyledButton,
  StyledTypography,
  InsideStyledBox,
  StyledThemeBox,
} from './accountantStyling';
import Options from './ManageAccountants/index';
const FormWrapper = styled(Form)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    alignItems: 'center',
    marginBottom: 12,
    '& .text-field': {
      width: '100%',
      marginBottom: 20,
    },
    '& .button': {
      fontWeight: Fonts.MEDIUM,
      fontSize: 16,
      textTransform: 'capitalize',
    },
  };
});

const validationSchema = yup.object({
  email: yup
    .string()
    .email('The Email you entered is not a valid format!')
    .required('Please enter Email Address!'),
});

const AddAnAccountant = () => {
  const theme = useTheme();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { messages } = useIntl();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRestrictedEmail, setIsRestrictedEmail] = useState(false);
  const [email, setEmail] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    if (enteredEmail === 'sadia@fidsor.com') {
      setIsRestrictedEmail(true);
    } else {
      setIsRestrictedEmail(false);
    }
  };
  const handleSubmit = async (data: any, { resetForm }: any) => {
    try {
      setIsSubmitting(true);
      infoViewActionsContext.showMessage(
        messages['error.comingSoonNotification'] as string
      );
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      resetForm();
    }
  };

  const handleAddAnotherAccount = () => {
    setIsButtonClicked(false);
    setIsSubmitted(false);
  };

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <>
        <StyledBox>
          <InnerStyledBox>
            <Logo fill={theme.palette.primary.main} />
          </InnerStyledBox>
        </StyledBox>

        {isSubmitted ? (
          <StyledBox>
            <StyledThemeBox>
              <IntlMessages id="hire.almostThere" />
            </StyledThemeBox>
            <InsideStyledBox>
              <StyledTypography>
                <IntlMessages id="hire.onceAccepted" />
              </StyledTypography>
            </InsideStyledBox>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="button"
              disabled={isSubmitting}
              onClick={handleAddAnotherAccount}
            >
              <IntlMessages id="hire.addAnotherAccount" />
            </Button>
          </StyledBox>
        ) : (
          <>
            <StyledCustomBox>
              <StyledHeading component="h3">
                <IntlMessages id="hire.AddAnAccountant" />
              </StyledHeading>
              <InsideStyledBox>
                <StyledTypography>
                  <IntlMessages id="hire.makeItEasy" />
                </StyledTypography>
                <StyledTypography>
                  <IntlMessages id="hire.yourAccountant" />
                </StyledTypography>
              </InsideStyledBox>
              <Formik
                validateOnChange={true}
                initialValues={{
                  email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values }) => (
                  <FormWrapper>
                    <AppTextField
                      placeholder="Email"
                      name="email"
                      label={<IntlMessages id="hire.emailAddress" />}
                      className="text-field"
                      variant="outlined"
                      disabled={isSubmitting}
                      value={values.email}
                      onChange={handleEmailChange} // Use the function directly
                    />
                    <StyledButton
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button"
                      disabled={isSubmitting || isRestrictedEmail} // Disable if email is restricted
                    >
                      <IntlMessages id="hire.invite" />
                    </StyledButton>
                    <Link
                      to="/accounting/addaccountant/manageaccountants"
                      className="button-link"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleButtonClick}
                      >
                        Manage Accountant
                      </Button>
                    </Link>
                    {isOptionsVisible && <Options />}
                  </FormWrapper>
                )}
              </Formik>
            </StyledCustomBox>
          </>
        )}

        <AppInfoView />
      </>
    </AppAnimate>
  );
};
export default AddAnAccountant;
