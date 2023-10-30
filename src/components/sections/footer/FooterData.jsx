import { Grid, Box } from "@mui/material";
import { footer } from "../../../utils/footer";
import { NavLink } from "react-router-dom";
import { Logo } from "../../logo/Logo";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logoWhite from "../../../images/logo_aurora_white-09.png";


export const FooterData = () => {

    return (
        <>
            <Grid
                container
                spacing={2}
                margin={0}
                padding={2}
                className="w-100"
            >
                {/* col 1 */}
                <Grid item xs={6}>
                    <Grid
                        container
                        padding={0}
                        className="block-font grid-3"
                        >
                        {footer.map((feet) => (
                            <Grid item padding={1} xs={4} key={feet.id}>
                                <NavLink>
                                    <Box className="d-flex g-sm j-start">
                                        <Box className="footer-icon">
                                            <ArrowForwardIosIcon className="fs-05" />
                                        </Box>

                                        <Box className="white">
                                            {feet.title}
                                        </Box>
                                    </Box>
                                </NavLink>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* col 2 */}
                <Grid
                    className="a-end footer-logo"
                    item
                    xs={6}
                >
                    <Logo
                        logo={logoWhite}
                        altLogo={"logo-footer"}
                        height={"80px"}
                    />
                </Grid>
            </Grid>
        </>
    );
};
