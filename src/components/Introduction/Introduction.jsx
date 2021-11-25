import React from 'react';
import { IntroductionContainer, ProfilePic, IntroTitle, IntroDescription, IntroParagraphContainer, IntroButton } from './styles';
import MyPic from '../../assets/MyPic.jpeg'
import { Grid } from '@material-ui/core';

export const Introduction = () => {
  return (
    <IntroductionContainer>
      <Grid container>
        <Grid item>
          <ProfilePic alt='' src={MyPic} sx={{ height: '230px', width: '230px' }} />
        </Grid>
        <Grid item>
          <IntroParagraphContainer>
            <IntroTitle>Hi, I&apos;m Kevin 👋</IntroTitle>
            <IntroDescription>A Front-End Developer with an Environmental Engineering 
              <br />and Electrical Engineering background.</IntroDescription>
            <IntroButton 
              variant="contained" 
              color="primary" 
              size="large"
            >
              See My Work
            </IntroButton>
          </IntroParagraphContainer>
        </Grid>
      </Grid>
    </IntroductionContainer>
  )
}