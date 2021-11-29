import styled from 'styled-components'
import { AppBar } from '@material-ui/core'

export const NavbarContainer = styled(AppBar)`
  background-color: white !important;
  color: black;
  padding: 40px 30px 32px 0px;
  box-shadow: none !important;

  @media (min-width: 425px) {
    padding: 40px 80px 32px 0px;
  }

  @media (min-width: 1024px) {
    padding: 40px 170px 32px 170px;  
  }
`

export const Logo = styled('a')`
  font-size: 30px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  margin-right: auto;
  cursor: pointer;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavbarItems = styled('ul')({
  listStyle: 'none',
  padding: '0',
  margin: '0',
  paddingTop: '8px',
});

export const NavbarItem = styled('a')({
  color: '#000000',
  textDecoration: 'none',
  fontSize: '18px',
  fontFamily: 'Montserrat, sans-serif',
  fontStyle: 'normal',
  fontWeight:'normal',
  marginLeft: '2em',
});