import React from 'react';
import { IntroductionContainer, ProfilePic, IntroTitle, IntroDescription, IntroParagraphContainer, IntroButton } from './styles';
import MyPic from '../../assets/MyPic.jpeg'
import { Grid } from '@material-ui/core';
import { Link } from 'react-scroll'
import { Fade } from 'react-awesome-reveal';

export const Introduction = () => {
  return (
    <IntroductionContainer>
      <Fade triggerOnce="true" direction="down">
        <Grid container style={{justifyContent: 'space-evenly'}}>
          <Grid item>
            <ProfilePic alt='' src={MyPic} sx={{ height: '230px', width: '230px' }}/>
          </Grid>
          <Grid item>
            <IntroParagraphContainer>
              <IntroTitle>Hi, I&apos;m Kevin 👋</IntroTitle>
              <IntroDescription>A Front-End Developer with an Environmental Engineering and Electrical Engineering background.</IntroDescription>
              <Link to='myWorks' smooth={true} duration={1500}>
                <IntroButton 
                  variant="contained" 
                  color="primary" 
                  size="large"
                >
                  See My Work
                </IntroButton>
              </Link>
            </IntroParagraphContainer>
          </Grid>
        </Grid>
      </Fade>
    </IntroductionContainer>
  )
}