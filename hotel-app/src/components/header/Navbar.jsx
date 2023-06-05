import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Logo } from "./Logo"
import { pages } from "../../utils/pages"
import { Link, NavLink } from 'react-router-dom';
import { Banner } from '../banner/Banner';


export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{backgroundColor:'#ecedee'}}  position="sticky">
            <Banner />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo */}
          <Box sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {<Logo />}
          </Box>


          {/* menu  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* menu icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#4f4e4e"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Link to={`${page.link}`}>
                    <Typography 
                      textAlign="center"
                      variant="h5">
                        {page.page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* logo */}
          <Box
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {<Logo />}
          </Box>


          {/* menu web */}
          <Box 
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap:"0.6rem", fontSize:"0.7rem", textTransform: "uppercase" }}>
            {pages.map((page) => (
              <NavLink
                to={`${page.link}`}
                key={page.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.page}
              </NavLink>
            ))}
          </Box>


          {/* booknow */}
          <Box sx={{ flexGrow: 0 }}>
             <Button 
              key="book-now"
              sx={{ my: 2,  backgrounColor: '#74e63bfb4', display: 'block' }} >
              BOOK NOW
             </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

