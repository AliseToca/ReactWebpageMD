import { Box, Grid, Stack, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 5, md: 10 } }}>
      <Grid container spacing={4} alignItems="stretch">
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={4}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3">
              Got a project in mind? We will help it come to life.
            </Typography>

            <Typography variant="body1">
              We specialize in delivering high-quality electrical services worldwide.
              Our team is committed to innovation, safety, and client satisfaction.
            </Typography>

            <Typography variant="body1">
              Whether you’re looking for help with a residential, commercial, or
              industrial project, we have the expertise to make it happen.
            </Typography> 

            <Box>
              <Typography variant="h6">
                  Contacts
              </Typography>

              <Box ml={2}>
                <Typography component="li">
                  Mobile: +00 00 000 00
                </Typography>

                <Typography component="li">
                  example@email.com
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}
