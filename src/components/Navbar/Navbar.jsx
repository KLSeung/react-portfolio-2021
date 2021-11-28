import React from 'react';
import { Logo, NavbarContainer, NavbarItems, NavbarItem } from './styles.jsx'
import { Grid } from '@material-ui/core'
import ResumePath from '../../assets/Resume_Kevin_Lee.pdf'
import { animateScroll as scroll} from 'react-scroll'

export const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <NavbarContainer>
      <Grid 
        justifyContent="space-between" 
        container
      >
        <Grid item>
          <Logo onClick={scrollToTop}>Kevin Lee</Logo>
        </Grid>
        <Grid item>
          <NavbarItems>
            <NavbarItem href={ResumePath} target="_blank">
              Resume
            </NavbarItem>
            <NavbarItem href="https://github.com/KLSeung" target="_blank">
              GitHub
            </NavbarItem>
            <NavbarItem href="mailto:kevin.skyulee@gmail.com">
              Contact
            </NavbarItem>
          </NavbarItems>
        </Grid>
      </Grid>
    </NavbarContainer>
  )
}