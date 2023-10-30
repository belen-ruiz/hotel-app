import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { pages } from "../../../utils/pages";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../logo/Logo";
import logoIso from "../../../images/logo_iso.png";
import { Fade } from "react-awesome-reveal";
import { MenuList } from "@mui/material";
import { BtnOutlined } from "../../buttons/Buttons";

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


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

    }, []);

    return (
        <AppBar className={`navbar ${scrolling && 'scroll-on'}`}>
            <Toolbar className="btn-box">
                {/* menu mobile */}
                <Box className="d-mob">
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
                        >
                        <MenuList style={{ width: "fit-content" }}>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link
                                        to={`${page.link}`}
                                        className="block-font green"
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
                    <Box className="d-web">
                        <Logo
                            logo={logoIso}
                            altLogo={"logo-header"}
                            height={"50px"}
                        />
                    </Box>

                    {/* menu web */}
                    <Box className="block-font d-web">
                        {pages.map((page) => (
                            <NavLink
                                to={page.link}
                                key={page.page}
                                className={ location.pathname === page.link && "isActive" }>
                                {page.page}
                            </NavLink>
                        ))}
                    </Box>

                    {/* booknow */}
                    <BtnOutlined link="book-now" text="book now" />
                </Fade>
            </Toolbar>
        </AppBar>
    );
};
