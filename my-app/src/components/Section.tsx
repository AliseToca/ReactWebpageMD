import { Box, Button, Typography } from "@mui/material";

function Section() {
    return(
         <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 64px)",  
        bgcolor: "primary.light",       
        width: "99.5vw",                
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",   
        paddingInline: 5,           
      }}
    >
      {/*--Text--*/}
      <Box
          sx={{
            flex: 1,
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            //backgroundColor: "#222222ff",
          }}>
          <Typography variant="h1" textAlign="left" color="#f4f4f4ff" p={3}>
            The best services world wide
          </Typography>
          <Typography
            p={3}
            sx={{    
              borderBottom: "4px solid #FFD902",
              color: "white",
            }} >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, quidem expedita magnam perferendis rem iusto architecto itaque laborum nisi enim tempore nostrum corrupti, id quos consectetur accusamus consequuntur. Iure, cumque.
          </Typography>
      </Box>

      {/*-- Services ---*/}
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button>
          <Typography variant="h4">Right side content</Typography>
        </Button>
      </Box>
    </Box>
    );
};

export default Section;