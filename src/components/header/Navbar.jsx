import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { pages } from "../../utils/pages";
import { Link, NavLink } from "react-router-dom";
import { OutlinedButton } from "../../custom/Buttons";
import { Logo } from "../logo/Logo";



export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navbarStyle = {
      backgroundColor: 'transparent',
      backdropFilter: scrolling ? 'blur(20px)' : 'none',
      transition: 'background-color 0.3s ease',
      paddingTop: "1rem",
      zIndex: 1,
      margin: 0,
      width: "100%",
      position: "static",
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    }, []);

    return (
        <AppBar 
            style={ navbarStyle }>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{display: "flex", justifyContent:"space-between" }} >
                    {/* menu mobile */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}>
                        {/* logo mobile */}
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            {<Logo />}
                        </Box>

                        {/* menu icon */}
                        <IconButton size="large" onClick={handleOpenNavMenu}>
                            <MenuIcon sx={{ color: "#ffffffa8" }} />
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
                                <MenuItem
                                    key={page.page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link to={`${page.link}`}>
                                        <Typography
                                            textAlign="center"
                                            variant="h5"
                                        >
                                            {page.page}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* logo web */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {<Logo />}
                    </Box>

                    {/* menu web */}
                    <Box
                        sx={{
                            //flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            gap: "2rem",
                            fontSize: "0.7rem",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            padding: "0rem 2rem",
                        }}
                    >
                        {pages.map((page) => (
                            <NavLink
                                to={page.link}
                                key={page.page}
                                style={{
                                    color:
                                        location.pathname === page.link
                                            ? "#989696fa"
                                            : "rgb(38, 37, 38)",
                                    boxShadow:
                                        location.pathname === page.link
                                            ? "#f5f1f1fb"
                                            : "rgb(38, 37, 38)",
                                        
                                }}
                            >
                                {page.page}
                            </NavLink>
                        ))}
                    </Box>

                    {/* booknow */}
                    <Box sx={OutlinedButton} >
                        book now
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
