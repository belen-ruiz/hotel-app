import { useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "./Logo";
import { pages } from "../../utils/pages";
import { Link, NavLink } from "react-router-dom";
import { Banner } from "../banner/Banner";
import { Buttons } from "../button/Buttons"


export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ backgroundColor: "var(--color-white)" }} position="sticky">
      <Banner />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* menu  */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Link to={`${page.link}`}>
                    <Typography textAlign="center" variant="h5">
                      {page.page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* logo */}
          <Box
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            {<Logo />}
          </Box>

          {/* menu web */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "2rem",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              justifyContent: "end",
              fontWeight: "bold",
            }}
          >
            {pages.slice(0, 3).map((page) => (
              <NavLink
                to={page.link}
                key={page.page}
                style={{
                  color:
                    location.pathname === page.link ? "#7d7c7e" : "#1c1c1c",
                }}
              >
                {page.page}
              </NavLink>
            ))}
          </Box>

          {/* logo */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "Elsie, cursive",
              letterSpacing: ".3rem",
              textDecoration: "none",
              padding: "0 4rem",
            }}
          >
            {<Logo colorLogo={"#1c1c1c"}/>}
          </Box>

          {/* menu web */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "2rem",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              justifyContent: "start",
              fontWeight: "bold",
            }}
          >
            {pages.slice(3, 6).map((page) => (
              <NavLink
              to={page.link}
              key={page.page}
              style={{
                color:
                  location.pathname === page.link ? "#7d7c7e" : "#1c1c1c",
              }}
            >
              {page.page}
            </NavLink>
            ))}
          </Box>

          {/* booknow */}
          <Box
            sx={{
              flexGrow: 0,
            }}
          >

            <Buttons data={"book now"}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
