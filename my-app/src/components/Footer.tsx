import { Box, Typography, Link, Container } from "@mui/material";
import Logo from "./Logo";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center" }}>
        <Box 
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}>
          <Logo textType="h4" sx={{ fontStyle: "italic" }}></Logo>

          <Typography variant="body2">
            &copy; 2025 My Services. All rights reserved.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, md: 0 } }}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="/services" color="inherit" underline="hover">
            Services
          </Link>
          <Link href="/about" color="inherit" underline="hover">
            About
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
