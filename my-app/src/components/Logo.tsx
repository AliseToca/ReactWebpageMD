import { Box, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BoltIcon from '@mui/icons-material/Bolt';

type LogoProps = {
    textType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2";
    sx?: TypographyProps['sx'];
};

function Logo({textType, sx}: LogoProps){
    return(
    <Box sx={{display: "flex", alignItems: "baseline"}}>
            <Typography
                variant={textType}
                noWrap
                component="a"
                href="#"
                sx={{
                    mr: 0,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "inherit",
                    textDecoration: "none",
                    ...sx, // merge external sx
                    }}
                >
                    MYAPP
                </Typography>
                <Typography color = "secondary" sx={{...sx}}>
                    det
                </Typography>
        </Box>
    );
}

export default Logo;