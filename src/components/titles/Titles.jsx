import { Stack } from "@mui/material";

const Titles = ({ topText, title, subtitle, style }) => {
    return (
        <Stack spacing={1} className="section-container alignCenter">
            {topText && <p className="text-bc">{topText}</p>}

            {title && <p className="title green" style={style}> {title}</p>}

            {subtitle && <p className="subtitle green">{subtitle}</p>}
        </Stack>
    );
};

const TitlesSecondary = ({ topText, title, subtitle, style }) => {
    return (
        <Stack spacing={1}>
            { topText && <p className="text-bc">{ topText }</p>}

            {  title && <p className="title white">{ title }</p>}

            {  subtitle && <p className="subtitle white">{ subtitle }</p>}
        </Stack>
    );
};

export { Titles, TitlesSecondary };
