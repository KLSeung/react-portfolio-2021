import { Button } from "@material-ui/core"
import styled from 'styled-components'

export const IntroductionContainer = styled('div')({
  fontFamily:'Montserrat, sans-serif',
  padding: '330px 28px 0px 28px',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '1140px',
});

export const ProfilePic = styled('img')`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  box-Shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    margin-left: 50px;
  }
`

export const IntroButton = styled(Button)({
  marginTop: '15px'
})

export const IntroParagraphContainer = styled('div')`
  padding-left: 40px;

  @media (min-width: 1024px) {
    padding-left: 70px;
  }
`

export const IntroTitle = styled('h1')`
  font-size: 36px;
  line-height: 49px;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 375px) {
    font-size: 31px;
  }
`

export const IntroDescription = styled('p')({
  fontSize: '18px',
  lineHeight: '35px',
  maxWidth: '600px'
});
