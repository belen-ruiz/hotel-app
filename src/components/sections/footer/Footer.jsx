import { Container, Stack } from "@mui/material";
import { FooterData } from "./FooterData";
import { Banner } from "./Banner";

export const Footer = () => {
    return (
        <Container className="mainSections">
            <Stack sx={{ width: "100%" }}>
                {/* info */}
                <FooterData />

                {/* banner */}
                <Banner />
            </Stack>
        </Container>
    );
};
