import { styled } from '@material-ui/core'
import { AppBar } from '@material-ui/core'

export const NavbarContainer = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  color: 'black',
  padding: '40px 170px 32px 170px',
  boxShadow: 'none',
  // boxShadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%); */
});

export const Logo = styled('a')({
  fontSize: '30px',
  letterSpacing: '0.11em',
  textTransform: 'uppercase',
  marginRight: 'auto',
  cursor: 'pointer',
});

export const NavbarItems = styled('ul')({
  listStyle: 'none',
  padding: '0',
  margin: '0',
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