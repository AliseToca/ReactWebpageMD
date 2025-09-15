import { Box, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import ElectricBoltSharpIcon from '@mui/icons-material/ElectricBoltSharp';


type LogoProps = {
    textType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    sx?: TypographyProps['sx'];
};

function Logo({textType, sx}: LogoProps){
    return(
        <Box sx={{display: "flex", alignItems: "center"}}>
            <ElectricBoltSharpIcon sx={{ color: "secondary.light", fontSize: 40 }}/>
            <Typography
                variant={textType}
                noWrap
                component="a"
                href="#"
                sx={{
                    mr: 0,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".15rem",
                    color: "inherit",
                    textDecoration: "none",
                    ...sx, // merge external sx
                    }}
                >
                    FLASHIO
            </Typography>
        </Box>
    );
}

export default Logo;