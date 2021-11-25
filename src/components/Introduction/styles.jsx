import { styled, Button } from "@material-ui/core"
// import { Button } from "@material-ui/core";

export const IntroductionContainer = styled('div')({
  fontFamily:'Montserrat, sans-serif',
  marginTop: '400px',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '1140px',
});

export const ProfilePic = styled('img')({
  width: '240px',
  height: '240px',
  borderRadius: '50%',
  boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
  transform: 'matrix(-1, 0, 0, 1, 0, 0)'
});

export const IntroButton = styled(Button)({
  marginTop: '15px'
})

export const IntroParagraphContainer = styled('div')({
  marginLeft: '65px',
});

export const IntroTitle = styled('h1')({
  fontSize: '36px',
  lineHeight: '49px',
  fontWeight: 'bold',
  marginBottom: '30px',
});

export const IntroDescription = styled('p')({
  fontSize: '18px',
  lineHeight: '35px',
});
