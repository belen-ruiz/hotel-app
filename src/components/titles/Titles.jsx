import { Stack } from "@mui/material";

const Titles = ({ topText, title, subtitle, style }) => {
    return (
        <Stack spacing={1} className="section-container alignCenter">
            {topText && <div className="text-bc">{topText}</div>}

            {title && <div className="title green" style={style}> {title}</div>}

            {subtitle && <div className="subtitle green">{subtitle}</div>}
        </Stack>
    );
};

const TitlesSecondary = ({ topText, title, subtitle, style }) => {
    return (
        <Stack spacing={1}>
            { topText && <div className="text-bc">{ topText }</div>}

            {  title && <div className="title white">{ title }</div>}

            {  subtitle && <div className="subtitle white">{ subtitle }</div>}
        </Stack>
    );
};

export { Titles, TitlesSecondary };
