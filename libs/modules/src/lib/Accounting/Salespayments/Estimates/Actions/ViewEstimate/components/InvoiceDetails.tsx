import { Box, Typography } from '@mui/material';
import AppAnimate from '@crema/components/AppAnimate';
import TabsWrapper from '../../../../../Accounts/chartsOfAccounts/TabsWrapper';
import InvoiceItems from './InvoiceItems';
import {
  BillShipBox,
  BillShipText,
  Body,
  CustomStack,
  EstimateDetailStack,
  EstimateInfoBox,
  FlexColumnStart,
  HeaderTypography,
} from '../StyledComponent/InvoiceDetailStyle';
import { SubHeading } from '../../../../../Accounts/chartsOfAccounts/Components/StyledComponents';

const InvoiceDetails = () => {
  return (
    <TabsWrapper key="1">
      <AppAnimate animation="transition.slideRightIn" delay={300}>
        <Box className="account-tabs-content">
          <Body>
            <Box>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD+/v7///8EBAT6+vrS0tJGRkaysrK1tbX4+Pjr6+tgYGDY2Njx8fHn5+fe3t42NjbMzMwmJiZMTExycnJXV1cbGxs+Pj59fX2+vr6Tk5OqqqrGxsaLi4sQEBCtra0tLS2hoaGjo6N/f39ra2uOjo50dHQZGRlCQkJcXFw6OjojIyMyMjJSUlKcP7n3AAAME0lEQVR4nO1ch3qjvBJFI7mADW4p7rFjx5vm93+9q1FDYGFwEvLvt3fOlhgLhA4zmiaRKCIQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoHw4+Dyj3fEi0e/PZqWkPMoUvpnCF7Dv8Dxz7Zw+OB/foj+BUy73gGPHt89uc2vXvk9+bagHZyHeuXRaee+lz+3S2dteHReXpmLNw+R+x/bUP+qXrvL/O6Sz+bktS1er9mbG0fJy5++YcmqrgzKMFp4QpQfOtvIyjCad67w+L4gvnP9qd/r9fCfAX5cTUM3kbq4KDzVnlVN/B/mVxjy6M9Ng3pxQ3paHb5rxZaj4XA4Agshj4aTXXiYUTbzFeY1ec2bn+Gx6hYowuV79RC4/qs6HuwXKVwgXfQPg5up+egKBgwBnavnbYq6OOrnn6fQuTYNs+41VTO27bhI5RBY2umfPscKj/v+JMGxAbCkM99FX1VYx5BN3JhC2MKd33SCQX72mm0qCURvUNlo+e02UpMkleGmW2we3/VTHB0wyJ664S5q0RVgKBohVT2ofua7/W02chyiO4jHlTeYwNM1Ecp/m1RJKjmYbwpn756FGp6cRbcaVnOylGHO0Pu+dCKP7mHpH+4hd/U8g1HV7c+xZFgxAnXBOdNS2kcVlvdjrcYnoAmrAJwMK+ZhftOO2HksXmPIZboEpYohij0GvXDHXPX2rB9ves2aLAVDOdQwqUIdw8hJ7QB9lzlx1L6+4/SYMvEYJLiTxmJR1S+Pxh0QeO/R9KoGHn9DhlwONvcKcjhHiO/dWQuASfDyJTAx2gabZB8fqSLIsmlNWLTEidiATQj1DKOZ+dAvnpLA2p0zkLZwGbpcCpelHxU9T6WJQYrpKz7IKopKm+VcbE1LJTNz60+AY37X4uQbSTWaleSAER1ayUuGxkmkeg6KY72ne48Zu4GVjwYyXG+s34PRH/utnEPgSecFBAzN+fmVUQdNRIAhNk6lEVVu8LnJOPetaanEcGTGewKwqqiGD7CyZiiS2gbFPEp+POueL3y1Ury+iTSGzcaZtsdQmoN7E0DKOeUicx7dyYvG9qAPImZlv689GZxKX6vHcpA2SNnRQZNojEvb3ZBRGTUM5c0/YmPvuXReGKA4F5kxo5nyqzdRFgePurGKJuAQ6HYnmA2HeX2sItsPzWR9iQYyjEXa1aTe5bBmeRCwkbH/yR6MkMuyII+9ielDhY4nHagIcf7iwBujXobTmIm9OZxov2cjvlS5Mn20kbaGpf54pQPVDAOh95mZUGx92VYxjq+i3pZKhpAYpz1X88YBvZS1hDJ6kcZm5F260e6cgZdpWSyMmWENPIUexpdJ1jPsSpNuxfCRyUQ5v9W9vDKemYM+mg7w/H7G4qrMcxbrjIFlu4bj/LoQ6+fhBidYouwJphTMJzEUylQoWzFTEoOdjU7yzPPSRqxy8bZeT27GkLGBNniPqLLaKXDdJrBMw7V/xG6GkY3VU6uJlwwxmFM3nf0dDEHPJRPXCGYSPqyc4qUZ1w7jTvezd5GcYegiIQc5nbXAs4e/g6Fq/qNpyJQCI9Aoj4iRk/aRWmjS/hcZsrRcqVrrpJc1taTfQj3DFysaTUO6AO/UI14dmyo/+j/519rToakeAJTT29RQD3rKn0Y9w55uzkz8vETTOnD53BD1zeSGr6h6Ah2IehhrK0OXkiDkZa8YcgN6w0YR2zdRz7BjBnrS4/tAF2BjcSVhwcSdd6pg8TnSRQHjEgoMI8ypVFlC3jf6li9vhnqGQyOIicl6FphGvNhWLGA4R49Dx7HrB3CqkuFC3RLd5y8QrGe4Hdlx3mvNvEMayc62T+Q8VAYUkagTzWHOcF/scs30PSFrg1EZ9Tm+laEzfBke6AIa1jjweoCpOloqnY0xHrfeQ7kLrzsMA8F/EG2jluEfbfSl4OKd/ka5Dx2sqXUoxXChDmQsjo2JNijOZPpd8+jdMQ+Wdn4atQx3mXniQjPk0Rh1UUlUzUvjL7VZnKiDlbpym9klkWJQM67S3nZQy/A1NTLE2BTBpaWIhckxpNwehAp6sGaIqxRoasyqmAtqfIZcxet/kwwHdphiaEaoh6jMhOf3dJWGDyVfmy05G5V++j3uHcPL5L+En7C0tQyPRtNEfgJXwnGJbdcU5sc4IozF30yD8aSgHaRD30Q6mBzW4dBbPa08PEmEVwm+zVA7RMVPmUzmeQxlbU26voVcJ1f20iBDhglLHfpxnKaxWS3Fxygh2mEIPsNIugQvvd+YmgvGclJn3aL3xiq4V/+/keF0/D7+PIIpecBiiounP8ww92qucqtqndLtx6YQukuZqgwqtzcYudX3g71UFNTRFkoZu2s2xtw03aigCrUMX0zpnYE3nrOnt9xVXVQsx/PT5mZkIg/yEI7htdVhHznDQMWnFrUMbYYAPsNIO0lccUBrejbFT5MIWgs4cCNb+T26KlRTb9Eyw5GzpT5DM8VsjtExI1D1YlfgfXdBTWEZ+PlWj/9LDIsZwlTVQgV6NFOi1/r4pgpWdrHKVmqK8+dmj986Q6uCM//rnln6m+rKf2qewsj30p9WhqxQrRjbmd1wUeaXZMhYYS+GtDW6loQGlttCQCziN++caWZlWEiT8rg0bjbGlhlmYNR0VPiam4AlnqkC1bvJfYtScXUMb3WTy4wz8PU1vLXK8DG187DAkFtXoHMMbmwNFD1cL0zFGlMsUdVvkeGeTW6D4ZuwvY9KLamurAldldqoFLKYRDjPB0WGeei9aRBbt81wIOwoC5stcCcM6ihTHkMy3GJcU1gL9Rgy8el/P9OVKGAVGzguxtAyQ6tRxeV2OU5724M67EmP6ZbaDOY2Ai3lSamRLEs+mmRIv8OwGGIplzfERQvZkqjc9xx7BX2DR+dLi48nr6TeN0kB22V4tJ2X69PcunmB5XBcaGdxWSAPIYZcVeFMy+K/Z7h0vV9W4K27E++6PLoqn/DHz0t8KoltSJqkQu0yzIPIix0Vrg09Bo922cVm4G3V0DauobaQEbXNsOdNmSKkrYmNDIVKZQPZnqvUlGq/n5lpaBS4tcuwb4eSBvRpAvk4g/PJpV5p4WvuXCI0qNW0zdCFpYFd/EeXHR/sZrUiFlUMty5kbSDEdhmurzHcDu2t43yfpo+F3rlWZujiFFzkOQWv9NEuw47dbhDcNZFbWr2JuQy7I4FB8flwtWVI6M2lwSt9tMvQpemj0OsdU1BzCf8Pmv25b6e8bYtu3yJqeO+/Zej55hCsrYEk+H7Lm7UnpaQD9XKXAApRgKgzNq0y3DKrZqvyg1az56gTjKqy2b1jeCpejgdnocoEUCr6X6JlhnZjyEXAojFSy9pMREFVe9PzEML7E2cx6GpP9hBdSxSPbTJ8YHZvT8VbE2hrhMDW0Ag/riyG4grjCPSC/mhbPRV5uww/rSmtqvzh/kQpxMeKnegZM71fZIKqJPcx0UJkw+kVa/PSJsO8pl+1D3QCQq0Ah0foapEXvXMdIWykpVEbA66sYbh1yC8yNBTUe0/eJkf9cw/2AUz9rz2cAUQcpI8cbPzpdnJcYDvRpS41Dbx6sj4b/72YKhdA9pUdRt3YTjT9ZpfVNaN0K7BqtjV3LI6SY9GtcqMKzyPX8Htj6ib3HZVIQ3IIvpixwZIHSHq9wZcWTNU+JrU4V3qzS/9cqe1LiG2xOT9rc7mrK8ce6wDYexbUAfMc39YxLhuwbPlaun58Ggp0Ksnkbhe4fRO8xp4ele+MKaAVQvhytBaXcyzH3EUMs/AJZg3gcbPG5wAw2Q/sywuzwX6Cb5Wy4dPxIwqH9tcgM5g0SZL8xVQhj5KhC762HXmYCdecZGmSBvYsS00MxyRPxe7xKLlYqODuP2nVVh2h7pco4KVxul4dv7qYzy/fdO73+vmbzttlrwBs7QctymN4CBt9kddBv1+fDN7NT4dnefLTcj6fV8j9J3DjY7vh3c5rZ7a/x61wm+DtqmbCzzC0PtI796d/dQp3FG7puPkvVLhuKi5b2/nFEQQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIPyf4H/BlnwS+ZlI/wAAAABJRU5ErkJggg=="
                alt="product"
              />
            </Box>
            <EstimateInfoBox>
              <HeaderTypography variant="h2">10</HeaderTypography>
              <SubHeading>Subheading</SubHeading>
              <Typography variant="subtitle1">Fidsor</Typography>
              <Typography variant="subtitle1">United States</Typography>
            </EstimateInfoBox>
          </Body>
          <hr />
          <EstimateDetailStack>
            <BillShipBox>
              <Box>
                <BillShipText variant="h3">Bill To</BillShipText>
              </Box>
              <Box>
                <Typography>
                  <strong>Product Name</strong>
                </Typography>
                <Typography>Customer Name</Typography>
                <Typography>Customer Address</Typography>
                <Typography>State/Province</Typography>
                <Typography>Country</Typography>
                <Typography marginTop={2}>Customer Number</Typography>
                <Typography>Customer Email</Typography>
              </Box>
            </BillShipBox>
            <BillShipBox>
              <Box>
                <BillShipText variant="h3">Ship To</BillShipText>
              </Box>
              <Box>
                <Typography>
                  <strong>Product Name</strong>
                </Typography>
                <Typography>Buyer Address</Typography>
                <Typography>State/Province</Typography>
                <Typography>Country</Typography>
                <Typography marginTop={2}>Customer Number</Typography>
                <Typography>Customer Email</Typography>
              </Box>
            </BillShipBox>
            <CustomStack direction="row">
              <FlexColumnStart>
                <Typography>Estimate No:</Typography>
                <Typography>Estimate Date:</Typography>
                <Typography>Expire On: </Typography>
                <Typography>Grand Total:</Typography>
              </FlexColumnStart>
              <FlexColumnStart>
                <Typography>15</Typography>
                <Typography>August 15, 2023</Typography>
                <Typography>August 15, 2023</Typography>
                <Typography>$450</Typography>
              </FlexColumnStart>
            </CustomStack>
          </EstimateDetailStack>
          <InvoiceItems />
        </Box>
      </AppAnimate>
    </TabsWrapper>
  );
};

export default InvoiceDetails;
