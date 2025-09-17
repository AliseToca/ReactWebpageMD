import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Section() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        bgcolor: "primary.main",
        width: "99.5vw",
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        paddingInline: 5,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          height: "100%",
        }}
      >
        {/*--Left side--*/}
        <Box
          sx={{
            flex: 1,
            flexDirection: "column",
            display: "flex",
            alignItems: { xs: "center", md: "flex-start" }, 
            justifyContent: "center",
            mb: { xs: 4, md: 0 }, 
          }}
        >
          <Typography variant="h1" color="#f4f4f4ff" p={3}>
            The best services world wide
          </Typography>

          <Typography
            p={3}
            sx={{
              borderBottom: "4px solid #FFD902",
              color: "white",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            quidem expedita magnam perferendis rem iusto architecto itaque
            laborum nisi enim tempore nostrum corrupti, id quos consectetur
            accusamus consequuntur. Iure, cumque.
          </Typography>
        </Box>

        {/*-- Right side ---*/}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            component={Link}
            to="/services"
            sx={{
              width: { xs: "100%", md: "100%" },
              height: { xs: "auto", md: "100%" }, 
            }}
          >
            <Box
              component="img"
              src="https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg"
              alt="Service"
              sx={{
                width: { xs: "90%", md: "70%" },
                height: { xs: "auto", md: "70%" },
                objectFit: "cover",
                borderRadius: 2,
                filter: "grayscale(100%)",
                transition: "transform 0.6s ease, filter 0.6s ease",
                "&:hover": {
                  filter: "grayscale(0%)",
                  transform: "scale(1.05)",
                },
              }}
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Section;
