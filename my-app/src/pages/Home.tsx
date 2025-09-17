import { Box, Container, Typography } from "@mui/material";
import Section from "../components/Section"

export default function Home() {
  return (
    <Box>
      <Section></Section>
      
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ px: 3}}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Why us?
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit
            amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
            pellentesque sem placerat.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean
            sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
            bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
