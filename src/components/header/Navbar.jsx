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
import logoIso from "../../images/logo_iso.png";
import { Fade } from "react-awesome-reveal";
import {
    
    Green,
    MenuWeb,
} from "../../custom/Typography";
import { MenuList } from "@mui/material";

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


    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setScrolling(true);
    //         } else {
    //             setScrolling(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     //   return () => {
    //     //     window.removeEventListener('scroll', handleScroll);
    //     //   };
    // }, []);
 
    return (
        <AppBar className="navbar">
            <Toolbar style={{ justifyContent: "space-evenly", maxWidth: "1280px" }}
            >
                {/* menu mobile */}
                <Box className="menu-mobile">
                    {/* logo mobile */}
                    <Box>
                        <Logo
                            logo={logoIso}
                            altLogo={"logo-header"}
                            height={"30px"}
                        />
                    </Box>

                    {/* icon mobile */}
                    <IconButton size="large" onClick={handleOpenNavMenu}>
                        <MenuIcon className="orange" />
                    </IconButton>

                    {/* menu mobile */}
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
                        <MenuList style={{ width: "fit-content" }}>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link
                                        to={`${page.link}`}
                                        className="menuWeb green"
                                    >
                                        {page.page}
                                    </Link>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>



                {/* navbar expanded */}
                <Fade direction="down" delay={1} duration="2000">
                    {/* logo */}
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Logo
                            logo={logoIso}
                            altLogo={"logo-header"}
                            height={"50px"}
                        />
                    </Box>

                    {/* menu web */}
                    <Box className="menuWeb green"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: "2rem",
                            //flexGrow: 1,
                        }}
                    >
                        {pages.map((page) => (
                            <NavLink
                                to={page.link}
                                key={page.page}
                                style={{
                                    color: location.pathname === page.link
                                            ? "#d5d8d5"
                                            : "#989696fa",
                                    
                                }}
                            >
                                {page.page}
                            </NavLink>
                        ))}
                    </Box>

                    {/* booknow */}
                    <Box className="btn outlined-btn">book now</Box>
                </Fade>
            </Toolbar>
        </AppBar>
    );
};
